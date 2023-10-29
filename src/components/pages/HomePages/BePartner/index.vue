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
    ><div class="tabs_content BePartner">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('team')">Metacces team</li>
        <li @click="FunChooseTabName('bepartner')" class="active">
          Be a partner
        </li>
      </ul>
      <div class="content">
        <span>Be a Partner</span>
        <h1>together<span>we thrive</span></h1>
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
.BePartner {
  background: url("../../../../assets/images/bepartner.jpg") center center;
  .content {
    margin-left: auto;
    margin-right: 5%;
    padding-top: 10%;
  }
}
</style>
