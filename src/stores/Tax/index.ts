import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseTax = defineStore("Tax", () => {
  let product_tax = ref([]);
  let is_error = ref(false);
  let errors = ref([]);

  let showtax = ref({});

  async function get_Tax() {
    const response = await callServer({
      url: "stock/tax",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        product_tax.value = data.data;
      });
    } else {
    }
  }
  async function Show_Tax(id) {
    console.log("id", id);
    const response = await callServer({
      url: "stock/tax/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showtax.value = data.data;
      });
    } else {
    }
  }
  async function AddTax(data) {
    const response = await callServer({
      url: "stock/tax",
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
  async function EditTax(data: URLSearchParams, id) {
    const response = await callServer({
      url: "stock/tax/" + id,
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
  async function DeleteTax(id) {
    const response = await callServer({
      url: "stock/tax/" + id,
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
    get_Tax,
    product_tax,
    AddTax,
    Show_Tax,
    showtax,
    EditTax,
    DeleteTax,
  };
});
