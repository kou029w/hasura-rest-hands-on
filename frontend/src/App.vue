<script>
import { ref, onMounted } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
import debounce from "lodash.debounce";

/* ここに作成したREST APIエンドポイントを指定します。 `memo-demo` の部分はHasura Cloudプロジェクト名です。 */
const endpoint = "https://memo-demo.hasura.app/api/rest/page/1";

export default {
  components: { QuillEditor },
  setup() {
    const editor = ref();
    onMounted(async () => {
      const res = await axios.get(endpoint);
      const content = res.data.page?.content;
      editor.value.setContents(content);
      console.log("content", content);
    });
    const update = debounce(async (content) => {
      await axios.put(endpoint, { content });
      console.log("updated", content);
    }, 1000);
    return { editor, update };
  },
};
</script>

<template>
  <QuillEditor
    ref="editor"
    :content="{ ops: [{ insert: '読み込み中…' }] }"
    @update:content="update"
    toolbar="full"
  />
</template>
