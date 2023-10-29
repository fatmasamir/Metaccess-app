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
import { ref } from "vue";

// router
const NameTab = ref("start");

// FunChooseTabName
const TabsName = (Value: String) => {
  NameTab.value = Value;
};
</script>
<template>
  <section class="Pages">
    <img
      src="@/assets/images/CompositeLayer.png"
      class="HeaderImage"
      :class="NameTab == 'start' ? '' : 'blur'"
    />
    <NavBar @TabsName="TabsName" />
    <OLI v-if="NameTab == 'oli'" @TabsName="TabsName" />
    <AccessCoin v-if="NameTab == 'acces_coin'" />
    <Teams v-if="NameTab == 'team'" @TabsName="TabsName" />
    <Blacxes v-if="NameTab == 'Blacxes'" @TabsName="TabsName" />
    <Utilites v-if="NameTab == 'Utilites'" @TabsName="TabsName" />
    <BePartner v-if="NameTab == 'bepartner'" @TabsName="TabsName" />
    <Feed v-if="NameTab == 'feed'" @TabsName="TabsName" />
    <marketAnalises v-if="NameTab == 'marketAnalises'" @TabsName="TabsName" />
    <Story v-if="NameTab == 'story'" @TabsName="TabsName" />
    <Journey v-if="NameTab == 'Journey'" @TabsName="TabsName" />
  </section>
</template>
<style lang="scss">
@import "../../assets/scss/variables";
.HeaderImage {
  width: 100%;
  height: 100vh;
}
.blur {
  filter: blur(15px);
  -webkit-filter: blur(15px);
}
</style>
