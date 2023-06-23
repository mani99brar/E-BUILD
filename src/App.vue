npm<script setup>

import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css';

import Nav from './components/Nav.vue'
import HomeView from "./views/HomeView.vue"
import SlideShow from "./views/SlideShow.vue"

let myVar = ref(0);

const handleChangeMyVar = (newValue) => {
  myVar.value = newValue;
  console.log(myVar.value);
}
</script>

<template>
  <div class="wrapper">
    <component  :is="SlideShow" :changeMyVar="handleChangeMyVar" :myVar="myVar"  />
    <!-- <SlideShow  /> -->
    <Nav :myVar="myVar"  />
    
    <HomeView :myVar="myVar" :changeMyVar="handleChangeMyVar" />
    <!-- <RouterView  /> -->
    
  </div>
  
</template>

<style scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper{
  display: flex;
}
</style>
