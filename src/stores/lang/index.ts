import { defineStore } from "pinia";

export const useLang = defineStore("Lang", () => {
  let lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";

  // Followers
  function changeLayout() {
    let language = localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en";
    let body = document.getElementsByTagName("html")[0];
    console.log("language", language);
    localStorage.setItem("lang", language);
    document.dir = language === "ar" ? "rtl" : "ltr";
    if (language === "en") {
      body.classList.add("is-en");
      body.classList.remove("is-ar");
    } else {
      body.classList.add("is-ar");
      body.classList.remove("is-en");
    }
  }

  return {
    lang,
    changeLayout,
  };
});
