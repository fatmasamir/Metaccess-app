import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseGroupSupplier = defineStore("GroupSupplier", () => {
  let group_supplier = ref([]);
  let showGroupSupplier = ref({});
  let is_error = ref(false);
  let errors = ref([]);
  async function get_GroupSupplier() {
    const response = await callServer({
      url: "suppliers/group",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        group_supplier.value = data.data;
      });
    } else {
    }
  }
  async function Show_GroupSupplier(id) {
    console.log("id", id);
    const response = await callServer({
      url: "suppliers/group/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showGroupSupplier.value = data.data;
      });
    } else {
    }
  }
  async function AddGroupSupplier(data) {
    const response = await callServer({
      url: "suppliers/group",
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
  async function EditGroupSupplier(data: URLSearchParams, id) {
    const response = await callServer({
      url: "suppliers/group/" + id,
      method: "PUT",
      data,
      type: "application/x-www-form-urlencoded",
      auth: true,
    });
    if (!response.ok) {
      let errors = ref([]);
      is_error.value = true;
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
  async function DeleteGroupSupplier(id) {
    const response = await callServer({
      url: "suppliers/group/" + id,
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
    get_GroupSupplier,
    group_supplier,
    AddGroupSupplier,
    Show_GroupSupplier,
    showGroupSupplier,
    EditGroupSupplier,
    DeleteGroupSupplier,
    is_error,
  };
});
