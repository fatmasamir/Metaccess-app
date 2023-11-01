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
    ><div class="tabs_content Oli">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('oli')" class="active">
          <p>Who is Oli</p>
        </li>
        <li @click="FunChooseTabName('story')"><p>Story</p></li>
        <li @click="FunChooseTabName('Journey')"><p>Journey</p></li>
      </ul>
      <div class="content">
        <span>Who is Oli</span>
        <h1>always by <span>your side</span></h1>
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
@import "./Styling.scss";
.Oli {
  background: url("../../../../assets/images/Oli.jpg") center center;
  .content {
    margin-left: auto;
    margin-right: 5%;
    padding-top: 8%;
  }
}
</style>
