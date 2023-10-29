<script setup lang="ts">
// import router from "@/router";
import { ref, onMounted, defineEmits } from "vue";
import AOS from "aos";

// emit
const emit = defineEmits(["TabsName"]);
// import { useRouter } from "vue-router";

// router
// const router = useRouter();

// IconListNavbar
const IconListNavbar = ref(false);

// FunChooseTabName
const FunChooseTabName = (tabName: String) => {
  emit("TabsName", tabName);
};

// FunChooseTabName
const changeIconNav = () => {
  IconListNavbar.value = !IconListNavbar.value;
  emit("TabsName", "start");
};

// onMounted
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="Navbar">
    <div class="Follow" :class="IconListNavbar ? '' : 'hidden'">
      <router-link to="/">Follow Us </router-link>
    </div>
    <ul class="ListNavbar">
      <li :class="IconListNavbar ? '' : 'hidden'">
        <img src="../../../assets/images/oli.svg" />
        <ul class="dropdown">
          <li @click="FunChooseTabName('oli')">Who is Oli</li>
          <li @click="FunChooseTabName('story')">Story</li>
          <li @click="FunChooseTabName('Journey')">Journey</li>
        </ul>
      </li>
      <li :class="IconListNavbar ? '' : 'hidden'">
        <img src="../../../assets/images/blaxces.svg" />
        <ul class="dropdown">
          <li @click="FunChooseTabName('Blacxes')">What is Blacxes</li>
          <li @click="FunChooseTabName('Utilites')">Utilites</li>
        </ul>
      </li>
      <li
        :class="IconListNavbar ? '' : 'hidden'"
        @click="FunChooseTabName('acces_coin')"
      >
        <img src="../../../assets/images/acces_coin.svg" />
      </li>
      <li class="IconListNavbar" @click="changeIconNav()">
        <img src="../../../assets/images/openMenuBtn.svg" />
      </li>
      <li :class="IconListNavbar ? '' : 'hidden'">
        <img src="../../../assets/images/news.svg" />
        <ul class="dropdown">
          <li @click="FunChooseTabName('feed')">Feed</li>
          <li @click="FunChooseTabName('marketAnalises')">Market Analises</li>
        </ul>
      </li>
      <li :class="IconListNavbar ? '' : 'hidden'">
        <img src="../../../assets/images/team.svg" />
        <ul class="dropdown">
          <li @click="FunChooseTabName('team')">Metacces team</li>
          <li @click="FunChooseTabName('bepartner')">Be a partner</li>
        </ul>
      </li>
      <li
        :class="IconListNavbar ? '' : 'hidden'"
        @click="FunChooseTabName('more')"
      >
        <img src="../../../assets/images/more.svg" />
      </li>
    </ul>
    <div class="download_App" :class="IconListNavbar ? '' : 'hidden'">
      <p>Download App</p>
      <router-link to="/"
        ><img src="../../../assets/images/apple_mac.svg"
      /></router-link>
      <router-link to="/"
        ><img src="../../../assets/images/store.svg"
      /></router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
</style>
