<script setup lang="ts">
import Tab from "../../../global/Tab/index.vue";
import { ref, onMounted, defineEmits } from "vue";
// emit
const emit = defineEmits(["TabsName", "OpenImage"]);
const ImagesStore = [
  {
    id: 1,
    img: new URL(`../../../../assets/images/Store-3.png`, import.meta.url).href,
  },
  {
    id: 2,
    img: new URL(`../../../../assets/images/Store-5.png`, import.meta.url).href,
  },
  {
    id: 3,
    img: new URL(`../../../../assets/images/Store-12.png`, import.meta.url)
      .href,
  },
  {
    id: 4,
    img: new URL(`../../../../assets/images/Store-4.png`, import.meta.url).href,
  },
  {
    id: 5,
    img: new URL(`../../../../assets/images/Store-11.png`, import.meta.url)
      .href,
  },
  {
    id: 6,
    img: new URL(`../../../../assets/images/Store-10.png`, import.meta.url)
      .href,
  },
  {
    id: 7,
    img: new URL(`../../../../assets/images/Store-9.png`, import.meta.url).href,
  },
  {
    id: 8,
    img: new URL(`../../../../assets/images/Store-8.png`, import.meta.url).href,
  },
  {
    id: 9,
    img: new URL(`../../../../assets/images/Store-2.png`, import.meta.url).href,
  },
  {
    id: 10,
    img: new URL(`../../../../assets/images/Store-7.png`, import.meta.url).href,
  },
  {
    id: 11,
    img: new URL(`../../../../assets/images/Store-6.png`, import.meta.url).href,
  },
  {
    id: 12,
    img: new URL(`../../../../assets/images/Store-1.png`, import.meta.url).href,
  },
];
// FunChooseTabName
const FunChooseTabName = (tabName: String) => {
  emit("TabsName", tabName);
};
// OpenImage
const OpenImage = (item: String) => {
  emit("OpenImage", item);
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
      <div class="content">
        <div class="row">
          <div class="col-lg-3" v-for="item in ImagesStore" :key="item.id">
            <img :src="item.img" @click="OpenImage(item)" />
          </div>
        </div>
      </div></div
  ></Tab>
</template>
<style lang="scss" scoped>
@import "../Oli/Styling.scss";
.story {
  background: none;
  .content {
    margin: 0px;
    padding: 0px;
    width: 100%;
    .row {
      margin: auto;
      max-width: 95%;
      div {
        padding: 10px;
        img {
          width: 100%;
          height: 140px;
        }
        img:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
