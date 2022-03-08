<script>
import { ref, onMounted } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
import debounce from "lodash.debounce";

const id =
  window.localStorage.getItem("id") ??
  String(window.crypto.getRandomValues(new Uint16Array(1))[0]);

window.localStorage.setItem("id", id);

// ここに作成したREST APIエンドポイントを指定します。`memo-demo` の部分にHasura Cloudプロジェクト名を指定します。
const endpoint = `https://memo-demo.hasura.app/api/rest/page/${id}`;

export default {
  components: { QuillEditor },
  setup() {
    const editor = ref();
    onMounted(async () => {
      console.log("endpoint", endpoint);
      const res = await axios.get(endpoint);
      const content = res.data.page?.content ?? {
        ops: [
          { insert: "メモ帳\n", attributes: { header: 1 } },
          { insert: "こんにちは!\n" },
          { insert: "これは「Hasuraで作るREST API」のデモ用Webアプリです。\n" },
          {
            insert:
              "ここに入力した内容は自動的にHasuraに送信されデータベースに保存されます。\n",
            attributes: {
              link: endpoint,
            },
          },
        ],
      };
      console.log("content", content);
      editor.value.setContents(content);
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
