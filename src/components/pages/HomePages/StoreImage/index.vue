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
          <div class="col-lg-12" v-if="ShowImage">
            <img :src="ShowImage.img" />
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
  .row {
    position: relative;
    overflow: hidden;
    margin: auto;
    max-width: 100%;
    img {
      width: 100%;
      height: 95%;
      margin: 1% auto;
    }
    .icon {
      position: absolute;
      top: 10px;
      font-size: 20px;
      color: white;
      left: 20px;
      z-index: 999;
      img {
        width: 20px;
      }
    }
    .iconUp {
      right: 20px;
      left: auto;
      transform: scaleX(-1);
    }
  }
}
</style>
