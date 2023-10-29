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
    ><div class="tabs_content Blacxes">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('Blacxes')" class="active">
          What is Blacxes
        </li>
        <li @click="FunChooseTabName('Utilites')">Utilites</li>
      </ul>
      <div class="content">
        <span>what is Blacxes?</span>
        <h1>material of <span>tomorrow</span></h1>
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
.Blacxes {
  background: url("../../../../assets/images/Blacxes.jpg") center center;
}
</style>
