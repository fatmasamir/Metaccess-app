<script setup lang="ts">
import Tab from "../../../global/Tab/index.vue";
import { ref, onMounted, defineEmits } from "vue";

// emit
const emit = defineEmits(["TabsName"]);

// FunChooseTabName
const FunChooseTabName = (tabName: String) => {
  emit("TabsName", tabName);
};
</script>
<template>
  <Tab
    ><div class="tabs_content story">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('oli')">Who is Oli</li>
        <li @click="FunChooseTabName('story')" class="active">Story</li>
        <li @click="FunChooseTabName('Journey')">Journey</li>
      </ul>
      <div class="content">store</div>
    </div></Tab
  >
</template>
<style lang="scss" scoped>
@import "../Oli/Styling.scss";
.story {
  background: none;
}
</style>
