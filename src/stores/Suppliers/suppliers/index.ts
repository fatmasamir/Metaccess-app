import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseSupplier = defineStore("Suppliers", () => {
  let supplier = ref([]);
  let is_error = ref(false);
  let errors = ref([]);
  let showSupplier = ref({});
  async function get_Supplier() {
    const response = await callServer({
      url: "suppliers",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        supplier.value = data.data;
      });
    } else {
    }
  }
  async function Show_Supplier(id) {
    console.log("id", id);
    const response = await callServer({
      url: "suppliers/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showSupplier.value = data.data;
      });
    } else {
    }
  }
  async function AddSupplier(data) {
    const response = await callServer({
      url: "suppliers",
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
      toast.success("تم تعديل بنجاح");
    }
  }
  async function EditSupplier(data: URLSearchParams, id) {
    const response = await callServer({
      url: "suppliers/" + id,
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
      toast.success("تم الإضافه بنجاح");
    }
  }
  async function DeleteSupplier(id) {
    const response = await callServer({
      url: "suppliers/" + id,
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
    get_Supplier,
    supplier,
    AddSupplier,
    Show_Supplier,
    showSupplier,
    EditSupplier,
    DeleteSupplier,
    is_error,
  };
});
