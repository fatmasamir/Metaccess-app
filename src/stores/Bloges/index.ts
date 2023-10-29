import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseBloges = defineStore("Bloges", () => {
  let Bloges = ref([]);
  let Blog = ref({});

  //Get Bloges
  async function get_Bloges() {
    const response = await callServer({
      url: "api/blogs",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Bloges.value = data.data;
        console.log("Bloges.value", Bloges.value);
      });
    } else {
      toast.error("Has Error");
    }
  }

  //Get Bloge
  async function get_Blog(slug) {
    console.log("slug =", slug);
    const response = await callServer({
      url: "api/blogs/" + slug,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Blog.value = data.data;
        console.log("Blog.value", Blog.value);
      });
    } else {
      toast.error("Has Error");
    }
  }

  return {
    get_Bloges,
    Bloges,
    get_Blog,
    Blog,
  };
});
