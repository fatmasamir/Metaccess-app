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
        <li @click="FunChooseTabName('oli')">
          <p>Who is Oli</p>
        </li>
        <li @click="FunChooseTabName('story')"><p>Story</p></li>
        <li @click="FunChooseTabName('Journey')" class="active">
          <p>Journey</p>
        </li>
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
  background: url("../../../../assets/images/journey-2.jpg") top center;
  height: auto;
  background-size: contain;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 15%;
  .content {
    padding-top: 200px;
  }
  .content-left {
    margin-left: auto;
    margin-right: 5%;
    h1 span {
      color: #b42764;
    }
  }
  .content-top {
    padding-top: 10%;
  }
  .content-bottom {
    padding-top: 20%;
    h1 span {
      color: #137ea7;
    }
  }
}
@media screen and (min-width: 2000px) {
  .Journey .content {
    padding-top: 10%;
  }
  .Journey .content-left {
    padding-top: 17%;
  }
  .Journey .content-bottom {
    padding-top: 30%;
  }
}
</style>
