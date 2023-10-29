<script setup lang="ts">
import MainButton from "../../Buttons/MainButton/MainButton.vue";
import { ref } from "vue";

const props = defineProps<{
  data: {
    icon: string;
    title: string;
    description: string;
    target: {
      title: string;
      name: string;
      icon: {
        name: string;
        reverse: boolean;
      };
    };
  };
}>();
const meta = ref<string>(import.meta.url);
</script>
<template>
  <section class="dont-have">
    <InlineSvg :src="`/images/global/icons/dontHave/${data.icon}.svg`" />
    <h3>{{ data.title }}</h3>
    <p>{{ data.description }}</p>
    <MainButton
      :target="{
        title: data.target.title,
        name: data.target.name,
      }"
      :icon="{
        name: 'plus',
        reverse: true,
      }"
    />
  </section>
</template>
<style lang="scss">
.dont-have {
  background: var(--white-color);
  display: grid;
  justify-items: center;
  align-content: center;
  padding: 30px 10px;
  border-radius: var(--main-border-radius);
  > svg {
    margin: {
      bottom: 30px;
    }
  }
  h3 {
    font: {
      weight: bold;
    }
  }
  p {
    margin: {
      bottom: 20px;
    }
  }
}
</style>
