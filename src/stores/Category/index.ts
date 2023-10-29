import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseCategory = defineStore("Category", () => {
  let Category = ref([]);

  let showCategory = ref({});

  async function get_Category() {
    const response = await callServer({
      url: "stock/category",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Category.value = data.data;
      });
    } else {
    }
  }
  async function Show_Category(id) {
    console.log("id", id);
    const response = await callServer({
      url: "stock/category/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showCategory.value = data.data;
      });
    } else {
    }
  }
  async function AddCategory(data) {
    const response = await callServer({
      url: "stock/category",
      method: "POST",
      data,
      type: "",
      auth: true,
    });

    if (response.ok) {
      toast.success("تم الإضافه بنجاح");
    } else {
      console.log("error");
    }
  }
  async function EditCategory(data: URLSearchParams, id) {
    const response = await callServer({
      url: "stock/category/" + id,
      method: "PUT",
      data,
      type: "application/x-www-form-urlencoded",
      auth: true,
    });

    if (response.ok) {
      toast.success("تم تعديل بنجاح");
    } else {
      console.log("error");
    }
  }
  async function DeleteCategory(id) {
    const response = await callServer({
      url: "stock/category/" + id,
      method: "DELETE",
      auth: true,
    });

    if (response.ok) {
      toast.success("تم الحذف بنجاح");
    } else {
      console.log("error");
    }
  }
  return {
    get_Category,
    Category,
    AddCategory,
    Show_Category,
    showCategory,
    EditCategory,
    DeleteCategory,
  };
});
