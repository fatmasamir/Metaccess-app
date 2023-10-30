<script setup lang="ts">
import NavBar from "@/components/global/NavBar/NavBar.vue";
import OLI from "../../components/pages/HomePages/Oli/index.vue";
import AccessCoin from "../../components/pages/HomePages/AccessCoin/index.vue";
import Teams from "../../components/pages/HomePages/Teams/index.vue";
import Blacxes from "../../components/pages/HomePages/Blacxes/index.vue";
import Utilites from "../../components/pages/HomePages/Utilites/index.vue";
import BePartner from "../../components/pages/HomePages/BePartner/index.vue";
import Feed from "../../components/pages/HomePages/Feed/index.vue";
import marketAnalises from "../../components/pages/HomePages/marketAnalises/index.vue";
import Story from "../../components/pages/HomePages/Story/index.vue";
import Journey from "../../components/pages/HomePages/Journey/index.vue";
import Start from "../../components/pages/HomePages/Start/index.vue";
import StoreImage from "../../components/pages/HomePages/StoreImage/index.vue";
import { ref } from "vue";

// router
const NameTab = ref();

// ShowID
const ShowItem = ref();

// FunChooseTabName
const TabsName = (Value: String) => {
  ShowItem.value = "";
  NameTab.value = Value;
};
const OpenImage = (value: String) => {
  NameTab.value = "ShowItem";
  console.log("value =", value);
  ShowItem.value = value;
};
</script>
<template>
  <section class="Pages">
    <div class="background">
      <img
        src="@/assets/images/CompositeLayer.png"
        class="HeaderImage"
        :class="NameTab ? 'blur' : ''"
      />
    </div>
    <NavBar @TabsName="TabsName" :ShowItem="ShowItem" />
    <Start v-if="NameTab == 'start'" @TabsName="TabsName" />
    <OLI v-if="NameTab == 'oli'" @TabsName="TabsName" />
    <AccessCoin v-if="NameTab == 'acces_coin'" />
    <Teams v-if="NameTab == 'team'" @TabsName="TabsName" />
    <Blacxes v-if="NameTab == 'Blacxes'" @TabsName="TabsName" />
    <Utilites v-if="NameTab == 'Utilites'" @TabsName="TabsName" />
    <BePartner v-if="NameTab == 'bepartner'" @TabsName="TabsName" />
    <Feed v-if="NameTab == 'feed'" @TabsName="TabsName" />
    <marketAnalises v-if="NameTab == 'marketAnalises'" @TabsName="TabsName" />
    <Story
      v-if="NameTab == 'story'"
      @OpenImage="OpenImage"
      @TabsName="TabsName"
    />
    <Journey v-if="NameTab == 'Journey'" @TabsName="TabsName" />
    <div v-if="ShowItem">
      <StoreImage :ShowItem="ShowItem" />
    </div>
  </section>
</template>
<style lang="scss">
@import "../../assets/scss/variables";
.HeaderImage {
  width: 100%;
  height: 100vh;
}
// .Balls {
//   position: absolute;
//   right: 0px;
//   width: 200px;
//   height: 200px;
//   left: 43%;
//   top: 5%;
// }
// .Balls:hover {
//   transform: scale(1.1);transition: 1s all ease-in-out;
// }
// .Ball2 {
//   left: 56%;
//   top: 54%;
// }
// .Ball3 {
//   right: 56%;
//   top: 54%;
//   left: auto;
// }
.blur {
  filter: blur(15px);
  -webkit-filter: blur(15px);
}
</style>
