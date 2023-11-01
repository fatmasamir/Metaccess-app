<script setup lang="ts">
import Tab from "../../../global/Tab/index.vue";
import { defineProps, defineEmits, onMounted, ref } from "vue";

// emit
const emit = defineEmits(["TabsName"]);

// props
const props = defineProps(["ShowItem"]);

// ShowImage
const ShowImage = ref();

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

// ChangeImageUp
const ChangeImageUp = (id) => {
  let index = ImagesStore.findIndex((e) => e.id === id);
  index++;
  if (index != ImagesStore.length) {
    ShowImage.value = ImagesStore[index];
  }
};

// ChangeImageDown
const ChangeImageDown = (id) => {
  let index = ImagesStore.findIndex((e) => e.id === id);
  index--;
  if (index != -1) {
    ShowImage.value = ImagesStore[index];
  }
};
// onMounted
onMounted(() => {
  if (props.ShowItem) {
    ShowImage.value = props.ShowItem;
    console.log(" props.ShowItem;", props.ShowItem);
  }
});
</script>
<template>
  <Tab
    ><div class="tabs_content Itemstory">
      <div class="content">
        <div class="row">
          <div class="col-lg-12 ShowImage" v-if="ShowImage">
            <img :src="ShowImage.img" />
            <div class="information">
              <h4>{{ ShowImage.info }}</h4>
            </div>
            <div
              class="icon iconUp"
              @click="ChangeImageUp(ShowImage.id)"
              v-if="ShowImage.id != 12"
            >
              <img src="../../../../assets/images/arrow.png" />
            </div>
            <div
              class="icon icondown"
              @click="ChangeImageDown(ShowImage.id)"
              v-if="ShowImage.id != 1"
            >
              <img src="../../../../assets/images/arrow.png" />
            </div>
          </div>
        </div>
      </div></div
  ></Tab>
</template>
<style scoped lang="scss">
.Itemstory {
  height: 100%;
  .row {
    height: 100%;
    position: relative;
    overflow: hidden;
    margin: auto;
    max-width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
    .icon {
      position: absolute;
      top: 10px;
      font-size: 20px;
      color: white;
      left: 20px;
      z-index: 999;
      height: 100%;
      cursor: pointer !important;
      width: 100px;
      img {
        width: 20px;
        height: auto;
      }
    }
    .iconUp {
      right: 20px;
      left: auto;
      transform: scaleX(-1);
    }
    .ShowImage {
      position: relative;
    }
    .information {
      position: absolute;
      width: 100%;
      height: 150px;
      z-index: 999;
      bottom: 0px;
      color: white;
      margin: auto;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.222);
      animation-name: rollIn;
      animation-duration: 0.3s;
      display: none;
      h4 {
        width: 80%;
        margin: auto;
      }
    }
    .ShowImage:hover .information {
      display: block;
    }
  }
}
@keyframes rollIn {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, -100%) rotate3d(0, 0, 1, -120deg);
    -webkit-transform: translate3d(0, 0, -100%) rotate3d(0, 0, 1, -120deg);
    -moz-transform: translate3d(0, 0, -100%) rotate3d(0, 0, 1, -120deg);
    -ms-transform: translate3d(0, 0, -100%) rotate3d(0, 0, 1, -120deg);
    -o-transform: translate3d(0, 0, -100%) rotate3d(0, 0, 1, -120deg);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
@media screen and (min-width: 1900px) {
  .Itemstory .row .icon {
    top: 40px;
    left: 40px;
    img {
      width: 30px;
    }
  }
  .Itemstory .row .iconUp {
    right: 40px;
    left: auto;
  }
  .Itemstory .row .information {
    height: 300px;
  }
}
@media screen and (min-width: 3840px) {
  .Itemstory .row .icon {
    top: 40px;
    left: 40px;
    img {
      width: 60px;
    }
  }
  .Itemstory .row .iconUp {
    right: 40px;
    left: auto;
  }
  .Itemstory .row .information {
    height: 300px;
  }
}
</style>
