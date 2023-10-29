import callServer from "@/assets/scripts/callServer/callServer.1";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export const UseWarehouse = defineStore("Warehouse", () => {
  let WarehouseListList = ref([]);
  let is_error = ref(false);
  let errors = ref([]);

  let showWarehouse = ref({});

  async function get_Warehouse() {
    const response = await callServer({
      url: "stock/warehouse",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        WarehouseListList.value = data.data;
      });
    } else {
    }
  }
  async function Show_Warehouse(id) {
    console.log("id", id);
    const response = await callServer({
      url: "stock/warehouse/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        showWarehouse.value = data.data;
      });
    } else {
    }
  }
  async function AddWarehouse(data) {
    const response = await callServer({
      url: "stock/warehouse",
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
  async function EditWarehouse(data: URLSearchParams, id) {
    const response = await callServer({
      url: "stock/warehouse/" + id,
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
  async function DeleteWarehouse(id) {
    const response = await callServer({
      url: "stock/warehouse/" + id,
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
    get_Warehouse,
    WarehouseListList,
    AddWarehouse,
    Show_Warehouse,
    showWarehouse,
    EditWarehouse,
    DeleteWarehouse,
    is_error,
  };
});
