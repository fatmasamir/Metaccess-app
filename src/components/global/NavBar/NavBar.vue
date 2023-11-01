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
  if (IconListNavbar.value) {
    emit("TabsName", "start");
  } else {
    emit("TabsName", "");
  }
};

// onMounted
onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div class="Navbar" :class="IconListNavbar ? 'navbar-open' : ''">
    <div class="Follow" :class="IconListNavbar ? '' : 'hidden'">
      <router-link to="/">Follow Us </router-link>
    </div>
    <ul class="ListNavbar">
      <li :class="IconListNavbar ? '' : 'hidden'">
        <span
          ><img
            src="../../../assets/images/oli_icon.svg"
            @click="FunChooseTabName('oli')"
        /></span>
        <ul class="dropdown">
          <li @click="FunChooseTabName('oli')"><p>Who is Oli</p></li>
          <li @click="FunChooseTabName('story')"><p>Story</p></li>
          <li @click="FunChooseTabName('Journey')"><p>Journey</p></li>
        </ul>
        <p class="name">oli</p>
      </li>
      <li :class="IconListNavbar ? '' : 'hidden'">
        <span
          ><img
            src="../../../assets/images/blaxces_icon.svg"
            @click="FunChooseTabName('Blacxes')"
        /></span>
        <ul class="dropdown">
          <li @click="FunChooseTabName('Blacxes')"><p>What is Blacxes</p></li>
          <li @click="FunChooseTabName('Utilites')"><p>Utilites</p></li>
        </ul>
        <p class="name">blaxces</p>
      </li>
      <li
        :class="IconListNavbar ? '' : 'hidden'"
        @click="FunChooseTabName('acces_coin')"
      >
        <span><img src="../../../assets/images/acces_coin_icon.svg" /></span>
        <p class="name">acces coin</p>
      </li>
      <li class="IconListNavbar" @click="changeIconNav()">
        <img src="../../../assets/images/openMenuBtn.svg" />
      </li>
      <li :class="IconListNavbar ? '' : 'hidden'">
        <span
          ><img
            src="../../../assets/images/newsIcon.svg"
            @click="FunChooseTabName('feed')"
        /></span>
        <ul class="dropdown">
          <li @click="FunChooseTabName('feed')"><p>Feed</p></li>
          <li @click="FunChooseTabName('marketAnalises')">
            <p>Market Analises</p>
          </li>
        </ul>
        <p class="name">news</p>
      </li>
      <li :class="IconListNavbar ? '' : 'hidden'">
        <span
          ><img
            src="../../../assets/images/teams_icon.svg"
            @click="FunChooseTabName('team')"
        /></span>
        <ul class="dropdown">
          <li @click="FunChooseTabName('team')"><p>Metacces team</p></li>
          <li @click="FunChooseTabName('bepartner')">
            <p>Be a partner</p>
          </li>
        </ul>
        <p class="name">teams</p>
      </li>
      <li
        :class="IconListNavbar ? '' : 'hidden'"
        @click="FunChooseTabName('more')"
      >
        <span><img src="../../../assets/images/more_icon.svg" /></span>
        <p class="name">more</p>
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
