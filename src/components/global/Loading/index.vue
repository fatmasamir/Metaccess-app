<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="text-center loading">
    <b-spinner label="Spinning"></b-spinner>
  </div>
</template>
<style scoped lang="scss">
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background: white;
  padding-top: 25%;
  background: black;
  color: #fe20ce;
  span {
    width: 40px;
    height: 40px;
  }
}
@media screen and (min-width: 2500px) {
  .loading span {
    width: 100px;
    height: 100px;
  }
}
</style>
