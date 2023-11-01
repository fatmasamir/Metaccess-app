<script setup lang="ts">
import Tab from "../../../global/Tab/index.vue";
import { defineEmits } from "vue";

// emit
const emit = defineEmits(["TabsName"]);

// FunChooseTabName
const FunChooseTabName = (tabName: String) => {
  emit("TabsName", tabName);
};
</script>
<template>
  <Tab
    ><div class="tabs_content Feed">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('feed')" class="active"><p>Feed</p></li>
        <li @click="FunChooseTabName('marketAnalises')">
          <p>Market Analises</p>
        </li>
      </ul>
      <div class="content">
        <span>Feed</span>
        <h1>access for <span>evolution</span></h1>
        <p>
          Lorem ipsum, dolor sit amet adipisicing elit adipisicing elit. Quam
          eius Lorem ipsum, dolor sit amet adipisicing elit adipisicing elit.
          Quam eius
        </p>
        <router-link to="/">more info <i class="arrow right"></i></router-link>
      </div></div
  ></Tab>
</template>
<style lang="scss" scoped>
@import "../Oli/Styling.scss";
.Feed {
  background: url("../../../../assets/images/feed.jpg") center center;
}
</style>
