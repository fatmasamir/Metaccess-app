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
    ><div class="tabs_content Teams">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('team')" class="active">Metacces team</li>
        <li @click="FunChooseTabName('bepartner')">Be a partner</li>
      </ul>
      <div class="content">
        <span>Team</span>
        <h1>unit for a <span>community</span></h1>
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
.Teams {
  background: url("../../../../assets/images/team.jpg") center center;
}
</style>
