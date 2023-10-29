import { defineStore } from "pinia";
import { ref } from "vue";

export const useLight = defineStore("Light", () => {
  let Light = ref(
    localStorage.getItem("light") ? localStorage.getItem("light") : "open"
  );

  // Followers
  function changeLight() {
    let body = document.getElementsByTagName("html")[0];
    localStorage.setItem("light", Light.value);
    if (Light.value === "off") {
      body.classList.add("LightOff");
    } else {
      body.classList.remove("LightOff");
    }
  }

  return {
    Light,
    changeLight,
  };
});
