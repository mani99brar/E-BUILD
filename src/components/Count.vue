<template>
    <div class="countCon">
      <div class="name">
        <p>{{ name }}</p>
      </div>
      <div class="val">
        <span v-for="(char, index) in val" :key="index">{{ char }}</span>
      </div>
    </div>
  </template>
  
  <script setup>

  

    // Define the props
    import { defineProps,computed } from 'vue'
  
    // Declare the props
    const props = defineProps({
      name: {
        type: String,
        required: true
      },
      val: {
        type: String,
        required: true
      }
    })
     

  </script>
  
  <style scoped>
    .countCon {
      width: 80%;
      border: solid 2px #fff;
      height: 300px;
      display: flex;
    }
    .countCon .name {
      width: 20%;
      color: #231E1C;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: solid 2px #fff; */
      font-size: 1.6rem;
      background-color: #fff;
    }
    .countCon .val {
      width: 80%;
      display: flex;
      font-weight: 800;
      justify-content: space-between;
      /* font-family: sans-serif; */
      align-items: center;
      letter-spacing: 10px;
      font-size: 8rem;
      /* background-color: #fff; */
    }
    .countCon .val span{
        width: 25%;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        border-right:solid 1px #fff;
        height: 100%;
    }
  </style>
  