<template>
  <QuillEditor
    ref="editor"
    :content="{ ops: [{ insert: '読み込み中…' }] }"
    @update:content="update"
    toolbar="full"
  />
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
import debounce from "lodash.debounce";

/* ここに作成したREST APIエンドポイントを指定します。 `memo-demo` の部分はHasura Cloudプロジェクト名です。 */
const endpoint = "https://memo-demo.hasura.app/api/rest/page/1";

export default {
  name: "App",
  components: { QuillEditor },
  beforeMount() {
    this.update = debounce(async (content) => {
      await axios.put(endpoint, { content });
      console.log("updated", content);
    }, 1000);
  },
  async mounted() {
    const res = await axios.get(endpoint);
    const content = res.data.page?.content;
    this.$refs.editor.setContents(content);
    console.log("content", content);
  },
};
</script>
