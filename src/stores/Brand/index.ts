import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseBrand = defineStore("Brand", () => {
  let brand = ref([]);

  let showbran = ref({});

  async function get_Brand() {
    const response = await callServer({
      url: "stock/brand",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        brand.value = data.data;
      });
    } else {
    }
  }
  async function Show_Brand(id) {
    console.log("id", id);
    const response = await callServer({
      url: "stock/brand/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showbran.value = data.data;
      });
    } else {
    }
  }
  async function AddBand(data) {
    const response = await callServer({
      url: "stock/brand",
      method: "POST",
      data,
      type: "",
      auth: true,
    });

    if (response.ok) {
      console.log("success");
      toast.success("تم الإضافه بنجاح");
    } else {
      console.log("error");
    }
  }
  async function EditBand(data: URLSearchParams, id) {
    const response = await callServer({
      url: "stock/brand/" + id,
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
  async function DeleteBand(id) {
    const response = await callServer({
      url: "stock/brand/" + id,
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
    get_Brand,
    brand,
    AddBand,
    Show_Brand,
    showbran,
    EditBand,
    DeleteBand,
  };
});
