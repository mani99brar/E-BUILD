<script setup>
import house1 from "../assets/house1.jpg"
import house2 from "../assets/house2.png"
</script>

<template>
  <div class="galWrap">
    <div class="galCon">
      <img :src="house1" alt="">
  </div>
  </div>
  
</template>

<style scoped>

  .galWrap{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 4;
    display: flex;
    align-items: center;
  }
  .galCon{
    width: 100%;
    height: 70%;
    border: solid;
    overflow: hidden;
    border-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 225, 255);
  }
  .galCon img{
    width: auto;
    height: 100%;
  }
</style>
