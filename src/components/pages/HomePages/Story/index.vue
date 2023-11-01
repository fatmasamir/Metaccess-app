<script setup lang="ts">
import Tab from "../../../global/Tab/index.vue";
import { ref, onMounted, defineEmits } from "vue";
// emit
const emit = defineEmits(["TabsName", "OpenImage"]);

// ImagesStore
const ImagesStore = [
  {
    id: 1,
    img: new URL(`../../../../assets/images/Store-3.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 2,
    img: new URL(`../../../../assets/images/Store-5.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 3,
    img: new URL(`../../../../assets/images/Store-12.png`, import.meta.url)
      .href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 4,
    img: new URL(`../../../../assets/images/Store-4.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 5,
    img: new URL(`../../../../assets/images/Store-11.png`, import.meta.url)
      .href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 6,
    img: new URL(`../../../../assets/images/Store-10.png`, import.meta.url)
      .href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 7,
    img: new URL(`../../../../assets/images/Store-9.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 8,
    img: new URL(`../../../../assets/images/Store-8.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 9,
    img: new URL(`../../../../assets/images/Store-2.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 10,
    img: new URL(`../../../../assets/images/Store-7.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 11,
    img: new URL(`../../../../assets/images/Store-6.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
  },
  {
    id: 12,
    img: new URL(`../../../../assets/images/Store-1.png`, import.meta.url).href,
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur laudantium harum tenetur, ad eius illum minus rerum voluptatum quae debitis voluptatibus, vero aut facere ex molestiae! Dolor, blanditiis accusantium. Obcaecati.",
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
        <li @click="FunChooseTabName('oli')">
          <p>Who is Oli</p>
        </li>
        <li @click="FunChooseTabName('story')" class="active"><p>Story</p></li>
        <li @click="FunChooseTabName('Journey')"><p>Journey</p></li>
      </ul>
      <div class="content">
        <div class="row">
          <div class="col-lg-6"><h6>Story</h6></div>
          <div class="col-lg-6">
            <p>Click on the Image to see the full Story</p>
          </div>
          <div class="col-lg-3" v-for="item in ImagesStore" :key="item.id">
            <div class="content">
              <img :src="item.img" @click="OpenImage(item)" /><span
                class="number"
                >{{ item.id }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div></Tab
  >
</template>
<style lang="scss" scoped>
@import "../Oli/Styling.scss";
.story {
  background: url("../../../../assets/images/story_background.jpg") center
    center;
  .content {
    margin: 0px;
    padding: 0px;
    width: 100%;
    .row {
      margin: auto;
      max-width: 95%;
      .content {
        position: relative;
        padding: 10px;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 40%;
      }
      .number {
        position: absolute;
        bottom: 10px;
        right: 10px;
        width: 10%;
        background: #fe20ce;
        color: white;
        text-align: center;
        border-top-left-radius: 100%;
      }
      img:hover {
        transform: scale(1.1);
      }
    }
    h6 {
      text-align: left;
      vertical-align: middle;
      margin: 0px;
      color: #fe20ce;
      margin-bottom: 25px;
    }
    p {
      text-align: right;
    }
  }
}
</style>
