import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const UseGeneral = defineStore("General", () => {
  let cities = ref([]);

  let countries = ref({});

  async function get_country() {
    const response = await callServer({
      url: "general/country",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        countries.value = data.data;
      });
    } else {
    }
  }
  async function get_city(idCountry) {
    const response = await callServer({
      url: "general/city/" + idCountry,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        cities.value = data.data;
      });
    } else {
    }
  }
  return {
    get_country,
    get_city,
    countries,
    cities,
  };
});
