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
    ><div class="tabs_content marketAnalises">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('feed')">Feed</li>
        <li @click="FunChooseTabName('marketAnalises')" class="active">
          Market Analises
        </li>
      </ul>
      <div class="content">
        <span>Market Analysis</span>
        <h1>It`s time for<span>creation</span></h1>
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
.marketAnalises {
  background: url("../../../../assets/images/MarketAnalysis.jpg") center center;
  .content {
    margin-left: auto;
    margin-right: 5%;
    padding-top: 10%;
  }
}
</style>
