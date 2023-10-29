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
    ><div class="tabs_content Journey">
      <ul class="subNavbar">
        <li @click="FunChooseTabName('oli')">Who is Oli</li>
        <li @click="FunChooseTabName('story')">Story</li>
        <li @click="FunChooseTabName('Journey')" class="active">Journey</li>
      </ul>
      <div class="content content-top">
        <span>Feed</span>
        <h1>access for <span>evolution</span></h1>
        <p>
          Lorem ipsum, dolor sit amet adipisicing elit adipisicing elit. Quam
          eius Lorem ipsum, dolor sit amet adipisicing elit adipisicing elit.
          Quam eius
        </p>
        <router-link to="/">more info <i class="arrow right"></i></router-link>
      </div>
      <div class="content content-left">
        <span>Feed</span>
        <h1>access for <span>evolution</span></h1>
        <p>
          Lorem ipsum, dolor sit amet adipisicing elit adipisicing elit. Quam
          eius Lorem ipsum, dolor sit amet adipisicing elit adipisicing elit.
          Quam eius
        </p>
        <router-link to="/">more info <i class="arrow right"></i></router-link>
      </div>
      <div class="content content-bottom">
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
.Journey {
  background: url("../../../../assets/images/journey.png") top center;
  height: max-content;
  background-size: contain;
  padding-bottom: 15%;
  .content-left {
    margin-left: auto;
    margin-right: 5%;
    padding-top: 12%;
  }
  .content-top {
    padding-top: 10%;
  }
  .content-bottom {
    padding-top: 20%;
  }
}
</style>
