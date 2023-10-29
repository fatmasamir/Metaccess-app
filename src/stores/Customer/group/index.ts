import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseGroupCustomer = defineStore("GroupCustomer", () => {
  let group_customer = ref([]);
  let is_error = ref(false);
  let errors = ref([]);

  let showGroupCustomer = ref({});

  async function get_GroupCustomer() {
    const response = await callServer({
      url: "customer/group",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        group_customer.value = data.data;
      });
    } else {
    }
  }
  async function Show_GroupCustomer(id) {
    console.log("id", id);
    const response = await callServer({
      url: "customer/group/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showGroupCustomer.value = data.data;
      });
    } else {
    }
  }
  async function AddGroupCustomer(data) {
    const response = await callServer({
      url: "customer/group",
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
  async function EditGroupCustomer(data: URLSearchParams, id) {
    const response = await callServer({
      url: "customer/group/" + id,
      method: "PUT",
      data,
      type: "application/x-www-form-urlencoded",
      auth: true,
    });

    if (!response.ok) {
      await response.json().then((data) => {
        errors.value = data.errors;
        for (let key in errors.value) {
          toast.error(errors.value[key][0]);
        }
      });
    } else {
      is_error.value = false;
      toast.success("تم تعديل بنجاح");
    }
  }
  async function DeleteGroupCustomer(id) {
    const response = await callServer({
      url: "customer/group/" + id,
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
    get_GroupCustomer,
    group_customer,
    AddGroupCustomer,
    Show_GroupCustomer,
    showGroupCustomer,
    EditGroupCustomer,
    DeleteGroupCustomer,
    is_error,
  };
});
