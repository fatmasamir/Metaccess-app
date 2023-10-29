<script setup lang="ts">
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useLang } from "@/stores/lang";
import Loading from "./components/global/Loading/index.vue";

//Language
const Language = useLang();

//loading
const loading = ref(true);

//onMounted
onMounted(() => {
  //onMounted
  Language.changeLayout();

  //setTimeout
  setTimeout(function () {
    loading.value = false;
  }, 1000);
});
</script>
<template>
  <div class="text-center loading" v-if="loading">
    <!-- <b-spinner label="Spinning"></b-spinner> --><Loading />
  </div>
  <router-view></router-view>
</template>
