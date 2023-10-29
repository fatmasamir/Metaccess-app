<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import { defineProps } from "vue";
import AOS from "aos";
const { t } = useI18n();

// props
let props = defineProps(["TiltePage"]);

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <header>
    <div class="container">
      <h1
        data-aos="fade-right"
        data-aos-offset="600"
        data-aos-easing="ease-in-out"
      >
        {{ t(props.TiltePage) }}
      </h1>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@import "../../../assets/scss/variables";
header {
  background: url(../../../assets/images/global/icons/global/HeaderGlobal/background.svg)
    no-repeat center center;
  background-size: cover;
  height: max-content;
  width: 100%;
  height: 470px;
  position: relative;
  .container {
    overflow-y: hidden;
    h1 {
      color: white;
      padding-top: 20%;
      font-size: 30px;
      line-height: 1.5;
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
    }
  }
}

/****media****/

@media screen and (max-width: 1240px) {
  header {
    .card {
      width: 100%;
    }
    .carImage {
      top: 80%;
    }
  }
}
@media screen and (max-width: 992px) {
  header {
    padding-bottom: 100px;
    height: auto;
    .container {
      .card {
        width: 95%;
        margin: auto;
      }
      .carImage {
        position: relative;
      }
      h1 {
        padding-top: 30%;
        font-size: 20px;
      }
    }
  }
}

/*ar version */
.is-ar {
  header .row input {
    text-align: right;
  }
  header .card .row.flex label img {
    margin-left: 5px;
    margin-right: 0px;
    vertical-align: middle;
  }
  header .simple-button {
    text-align: center;
  }
  header .carImage {
    left: 10px;
    right: auto;
    img {
      transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
    }
  }
}
</style>
