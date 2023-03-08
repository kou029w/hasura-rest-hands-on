<script setup>
import { onMounted, ref } from "vue";
import { useDebounceFn } from "@vueuse/core";
import { Delta, QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const id =
  window.localStorage.getItem("id") ??
  String(window.crypto.getRandomValues(new Uint16Array(1))[0]);

window.localStorage.setItem("id", id);

// ここに作成したREST APIエンドポイントを指定
// `memo-demo` の部分をHasura Cloudプロジェクト名に書き換えてください
const endpoint = `https://memo-demo.hasura.app/api/rest/page/${id}`;

const content = ref(new Delta([{ insert: "読み込み中…" }]));
const defaultContent = new Delta([
  { insert: "メモ帳\n", attributes: { header: 1 } },
  { insert: "こんにちは!\n" },
  { insert: "これは「Hasuraで作るREST API」のデモ用Webアプリです。\n" },
  {
    insert:
      "ここに入力した内容は自動的にHasuraに送信されデータベースに保存されます。\n",
    attributes: { link: endpoint },
  },
]);

onMounted(async () => {
  console.log("endpoint", endpoint);
  const res = await fetch(endpoint);
  const data = await res.json();
  content.value = new Delta(data.page?.content ?? defaultContent);
  console.log("mounted", data);
});

const updateContent = useDebounceFn(async (content) => {
  const res = await fetch(endpoint, {
    method: "PUT",
    body: JSON.stringify({ content }),
  });
  const data = await res.json();
  console.log("updated", data);
}, 250);
</script>

<template>
  <QuillEditor
    toolbar="full"
    :content="content"
    @update:content="updateContent"
  />
</template>
