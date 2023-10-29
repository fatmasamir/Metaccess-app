import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseUnit = defineStore("Unit", () => {
  let product_Unit = ref([]);
  let is_error = ref(false);
  let errors = ref([]);

  let showUnit = ref({});

  async function get_Unit() {
    const response = await callServer({
      url: "stock/unit",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        product_Unit.value = data.data;
      });
    } else {
    }
  }
  async function Show_Unit(id) {
    console.log("id", id);
    const response = await callServer({
      url: "stock/unit/" + id,
      auth: true,
    });

    if (response.ok) {
      response.json().then((data) => {
        showUnit.value = data.data;
      });
    } else {
    }
  }
  async function AddUnit(data) {
    const response = await callServer({
      url: "stock/unit",
      method: "POST",
      data,
      type: "",
      auth: true,
    });

    if (!response.ok) {
      is_error.value = true;
      await response.json().then((data) => {
        errors.value = data.errors;
        for (let key in errors.value) {
          toast.error(errors.value[key][0]);
        }
      });
    } else {
      is_error.value = false;
      errors.value = [];
      toast.success("تم الإضافه بنجاح");
    }
  }
  async function EditUnit(data: URLSearchParams, id) {
    const response = await callServer({
      url: "stock/unit/" + id,
      method: "PUT",
      data,
      type: "application/x-www-form-urlencoded",
      auth: true,
    });

    if (!response.ok) {
      is_error.value = true;
      await response.json().then((data) => {
        errors.value = data.errors;
        for (let key in errors.value) {
          toast.error(errors.value[key][0]);
        }
      });
    } else {
      is_error.value = false;
      errors.value = [];
      toast.success("تم تعديل بنجاح");
    }
  }
  async function DeleteUnit(id) {
    const response = await callServer({
      url: "stock/unit/" + id,
      method: "DELETE",
      auth: true,
    });

    if (!response.ok) {
      is_error.value = true;
      await response.json().then((data) => {
        errors.value = data.errors;
        for (let key in errors.value) {
          toast.error(errors.value[key][0]);
        }
      });
    } else {
      is_error.value = false;
      errors.value = [];
      toast.success("تم الحذف بنجاح");
    }
  }
  return {
    get_Unit,
    product_Unit,
    AddUnit,
    Show_Unit,
    showUnit,
    EditUnit,
    DeleteUnit,
    is_error,
  };
});
