<script setup>
import { ref, onMounted } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
import debounce from "lodash.debounce";

const id =
  window.localStorage.getItem("id") ??
  String(window.crypto.getRandomValues(new Uint16Array(1))[0]);

window.localStorage.setItem("id", id);

// ここに作成したREST APIエンドポイントを指定
// `memo-demo` の部分をHasura Cloudプロジェクト名に書き換えてください
const endpoint = `https://memo-demo.hasura.app/api/rest/page/${id}`;

const editor = ref();
const initialContent = {
  ops: [
    { insert: "メモ帳\n", attributes: { header: 1 } },
    { insert: "こんにちは!\n" },
    { insert: "これは「Hasuraで作るREST API」のデモ用Webアプリです。\n" },
    {
      insert:
        "ここに入力した内容は自動的にHasuraに送信されデータベースに保存されます。\n",
      attributes: { link: endpoint },
    },
  ],
};

onMounted(async () => {
  console.log("endpoint", endpoint);
  const res = await axios.get(endpoint);
  const content = res.data.page?.content ?? initialContent;
  editor.value.setContents(content);
  console.log("content", content);
});

const update = debounce(async (content) => {
  await axios.put(endpoint, { content });
  console.log("updated", content);
}, 1000);
</script>

<template>
  <QuillEditor ref="editor" @update:content="update" toolbar="full" />
</template>
