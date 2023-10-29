import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseCustomer = defineStore("Customer", () => {
  let customer = ref([]);
  let is_error = ref(false);
  let errors = ref([]);
  let showCustomer = ref({});

  async function get_Customer() {
    const response = await callServer({
      url: "customer",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        customer.value = data.data;
      });
    } else {
    }
  }
  async function Show_Customer(id) {
    console.log("id", id);
    const response = await callServer({
      url: "customer/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showCustomer.value = data.data;
      });
    } else {
    }
  }
  async function AddCustomer(data) {
    const response = await callServer({
      url: "customer",
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
  async function EditCustomer(data: URLSearchParams, id) {
    const response = await callServer({
      url: "customer/" + id,
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
  async function DeleteCustomer(id) {
    const response = await callServer({
      url: "customer/" + id,
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
    get_Customer,
    customer,
    AddCustomer,
    Show_Customer,
    showCustomer,
    EditCustomer,
    DeleteCustomer,
    is_error,
  };
});
