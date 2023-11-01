<script setup lang="ts"></script>
<template>
  <section class="ContentTabs">
    <h2>Metacces</h2>
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
  h2 {
    text-align: center;
    color: white;
    margin-top: 25px;
  }
  .theblock {
    width: 70%;
    height: 76vh;
    margin: auto 0px;
    border: 10px solid;
    position: absolute;
    margin: auto;
    bottom: 100px;
    left: 15%;
    border-width: 10px;
    // border-image: url("@/assets/images/rim.svg");
    // border-image-slice: 20;
    background: #00000085;
    border-radius: 15px;
    border: 2px solid #fe20ce;
    overflow-y: auto;
  }
}
@media screen and (max-width: 1486px) {
  .ContentTabs .theblock {
    bottom: 80px;
    width: 80%;
    margin: 1.5% auto 0px;
    left: 10%;
  }
}
@media screen and (min-width: 2000px) {
  .ContentTabs .theblock {
    bottom: 130px;
  }
}
@media screen and (min-width: 2500px) {
  .ContentTabs .theblock {
    bottom: 180px;
  }
}
@media screen and (min-width: 3840px) {
  .ContentTabs .theblock {
    bottom: 250px;
  }
}
@media screen and (min-width: 5000px) {
  .ContentTabs .theblock {
    bottom: 350px;
  }
  .ContentTabs h2 {
    margin-top: 100px;
  }
  .theblock {
    width: 79%;
  }
}
</style>
