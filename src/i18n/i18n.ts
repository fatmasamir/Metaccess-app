import { createI18n } from "vue-i18n";
import en from "../assets/translate/en.js";
import ar from "../assets/translate/ar.js";

const i18n = createI18n<object>({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages: {
    ar,
    en,
  },
});

export default i18n;
