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
    ><div class="tabs_content Utilites">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('Blacxes')"><p>What is Blacxes</p></li>
        <li @click="FunChooseTabName('Utilites')" class="active">
          <p>Utilites</p>
        </li>
      </ul>
      <div class="content">
        <span>Utilities</span>
        <h1>the black <span>renaissance</span></h1>
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
.Utilites {
  background: url("../../../../assets/images/Utilities.jpg") center center;
}
</style>
