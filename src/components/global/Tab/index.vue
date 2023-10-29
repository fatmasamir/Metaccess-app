<script setup lang="ts"></script>
<template>
  <section class="ContentTabs">
    <h4>Metacces</h4>
    <section class="theblock">
      <slot></slot>
    </section>
  </section>
</template>
<style lang="scss">
.ContentTabs {
  position: absolute;
  top: 0px;
  z-index: 90;
  width: 100%;
  height: 100%;
  background: #00000033;
  h4 {
    text-align: center;
    color: white;
    margin-top: 20px;
  }
  .theblock {
    width: 70%;
    height: 73vh;
    margin: 2% auto;
    border: 10px solid;
    border-width: 10px;
    // border-image: url("@/assets/images/rim.svg");
    // border-image-slice: 20;
    background: #00000085;
    border-radius: 20px;
    border: 2px solid #fe20ce;
    overflow-y: auto;
  }
}
</style>
