import { defineStore } from "pinia";
import type {
  Register,
  ResetPassword,
  VerifyRegister,
  RegisterInterface,
  LoginSocialMedia,
  RegisterSocialMedia,
} from "./interface";
import { ref } from "vue";
import callServer from "../../assets/scripts/callServer/callServer";
import { useToast } from "vue-toastification";
import { useI18n } from "vue-i18n";
const toast = useToast();
import { inject, toRefs } from "vue";

// Vue3GoogleOauth
const Vue3GoogleOauth = inject("Vue3GoogleOauth");

export const useAuthStore = defineStore("auth", () => {
  // properites

  // user
  let user = ref();

  // resetPassword
  const resetPassword = ref<ResetPassword>({
    login: "",
    otp: "",
    password: "",
    password_confirmation: "",
  });

  // verifyRegister
  const verifyRegister = ref<VerifyRegister>({
    login: "",
    otp: "",
  });

  // registertion
  const registertion = ref<RegisterInterface>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    is_lender: 0,
    terms_and_conditions: 0,
  });

  // loginSocialMedia
  const loginSocialMedia = ref<LoginSocialMedia>({
    access_token: "",
  });

  // registerSocialMedia
  const registerSocialMedia = ref<RegisterSocialMedia>({
    access_token: "",
    is_lender: 0,
  });

  // is_error
  const is_error = ref<Boolean>(false);

  // is_loading
  const is_loading = ref<Boolean>(false);

  // is_auth
  const is_auth = ref<Boolean>(false);

  // is_waiting
  const is_waiting = ref<Boolean>(false);

  // -- auth functions

  // register
  async function register(data: Register) {
    console.log("data", data);
    is_loading.value = true;
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/register",
      method: "POST",
      data,
    });
    if (!response.ok) {
      let errors = null;
      console.log("errors == response");
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_error.value = true;
      is_loading.value = false;
      is_waiting.value = false;
      throw errors;
    } else {
      toast.success("Successfully Register ... ");
      is_auth.value = true;
      is_loading.value = false;
    }
  }

  // Verify
  async function Verify(data: Register) {
    console.log("data", data);
    is_loading.value = true;
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/verify",
      method: "POST",
      data,
    });

    if (response.ok) {
      is_auth.value = true;
      response.json().then(async (data: { token: string }) => {
        localStorage.setItem("access_token", data.data.token);
        localStorage.setItem("user", data.data.user);
        user.value = data.data.user;
        localStorage.setItem("type", "account");
        toast.success("Successfully Login ... ");
      });
      is_auth.value = true;
      is_loading.value = false;
    } else {
      is_error.value = true;
      is_loading.value = false;
      is_waiting.value = false;
      toast.error("data is Not Correct. .... ");
      throw response.status;
    }
  }
  // login
  async function login(data) {
    is_loading.value = true;
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/login",
      method: "POST",
      data,
    });

    if (response.ok) {
      is_auth.value = true;
      response.json().then(async (data: { token: string }) => {
        localStorage.setItem("access_token", data.data.token);
        localStorage.setItem("user", data.data.user);
        user.value = data.data.user;
        localStorage.setItem("type", "account");
        toast.success("Successfully Login ... ");
      });
      is_auth.value = true;
      is_loading.value = false;
    } else {
      is_error.value = true;
      is_loading.value = false;
      is_waiting.value = false;
      toast.error("data is Not Correct. .... ");
      throw response.status;
    }
  }

  // login/register by google
  async function registerGoogle(data) {
    is_loading.value = true;
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/social/google",
      method: "POST",
      data,
    });

    if (response.ok) {
      is_auth.value = true;
      response.json().then(async (data: { token: string }) => {
        localStorage.setItem("access_token", data.data.token);
        localStorage.setItem("user", data.data.user);
        user.value = data.data.user;
        localStorage.setItem("type", "Google");
        is_auth.value = true;
        is_loading.value = false;
        await window.location.reload();
        toast.success("Successfully Login ... ");
      });
    } else {
      is_error.value = true;
      is_loading.value = false;
      is_waiting.value = false;
      toast.error("data is Not Correct. .... ");
    }
  }

  // register by Facebook
  async function registerFacebook(data) {
    is_loading.value = true;
    is_waiting.value = true;
    console.log("data =", data);
    const response = await callServer({
      url: "api/auth/social/facebook",
      method: "POST",
      data,
    });

    if (response.ok) {
      is_auth.value = true;
      response.json().then(async (res) => {
        localStorage.setItem("access_token", res.data.token);
        localStorage.setItem("user", res.data.user);
        user.value = res.data.user;
        localStorage.setItem("type", "Facebook");
        is_auth.value = true;
        is_loading.value = false;
        await window.location.reload();
        toast.success("Successfully Login ... ");
      });
    } else {
      is_error.value = true;
      is_loading.value = false;
      is_waiting.value = false;
      toast.error("data is Not Correct. .... ");
    }
  }
  // forgetPassword
  async function forgetPassword(data) {
    is_loading.value = true;
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/forget-password",
      method: "POST",
      data,
    });

    if (response.ok) {
      is_auth.value = true;
      response.json().then(async (data: { access_token: string }) => {
        toast.success("تم تسجيل الدخول بنجاح");
      });
      is_auth.value = true;
      is_loading.value = false;
    } else {
      is_error.value = true;
      is_loading.value = false;
      is_waiting.value = false;
      toast.error("data is Not Correct. .... ");
      throw response.status;
    }
  }

  // reset_password
  async function PasswordReset(data) {
    is_loading.value = true;
    is_waiting.value = true;
    const response = await callServer({
      url: "api/auth/reset-password",
      method: "POST",
      data,
    });

    if (response.ok) {
      is_auth.value = true;
      response.json().then(async (data: { access_token: string }) => {
        toast.success("تم تسجيل الدخول بنجاح");
      });
      is_auth.value = true;
      is_loading.value = false;
    } else {
      is_error.value = true;
      is_loading.value = false;
      is_waiting.value = false;
      toast.error("data is Not Correct. .... ");
      throw response.status;
    }
  }

  // logOut
  function logOut() {
    user.value = undefined;
    localStorage.removeItem("access_token");
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    localStorage.removeItem("user");
    localStorage.removeItem("vue-facebook-login-accounts");
    user.value = "";
    toast.success("Successfully Logout ... ");
    this.router.push("/login");
  }

  // registertionResetFun
  async function registertionResetFun() {
    registertion.value.first_name = "";
    registertion.value.last_name = "";
    registertion.value.email = "";
    registertion.value.phone = "";
    registertion.value.password = "";
    registertion.value.password_confirmation = "";
    registertion.value.terms_and_conditions = 0;
    console.log("registertion.value.phone", registertion.value);
  }
  return {
    // properites
    is_loading,
    is_auth,
    is_waiting,
    resetPassword,
    verifyRegister,
    registertion,
    user,
    loginSocialMedia,
    registerSocialMedia,

    // auth functions
    register,
    login,
    logOut,
    forgetPassword,
    PasswordReset,
    registerGoogle,
    registertionResetFun,
    registerFacebook,
    Verify,
  };
});
