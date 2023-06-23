<script setup>
import HomeGal from './HomeGal.vue'
import {defineProps,watch} from 'vue'

const props= defineProps(['myVar']);

watch(() => props.myVar, (newValue, oldValue) => {
  if (newValue > 0) {
    // Perform animation or other actions when myVar is greater than zero
    animateHomeGal();
  }
  if(newValue==0){
      reanimateHomeGal();
    }
  function animateHomeGal(){
    const HomeGal = document.querySelector('.animate')
    HomeGal.classList.remove('reanimated');
    HomeGal.classList.add('animated');


    
  }
  function reanimateHomeGal(){
    const HomeGal = document.querySelector('.animate')
    HomeGal.classList.remove('animated');
    HomeGal.classList.add('reanimated')
  }
});
</script>


<template>
  <div class="contNav">
    <h3>Company Name</h3>
    <div class="overhid"><HomeGal class="animate"/></div>
    
    <ul>
      <li><font-awesome-icon :icon="['fas', 'envelope']" /></li>
      <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
      <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
    </ul>
  </div>
</template>

<style scoped>
  .contNav{
    z-index: 1;
    width: 450px;
    height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    color: #fff;
    /* justify-content: space-between; */
    /* align-items: center; */
    padding-left: 20px;
    position: relative;
  }
  .contNav h3{
    height: 30%;
    display: flex;
    margin-top: 40px;
    /* align-items: center; */
  }
  .contNav ul{
      height: 50%;
      display: flex;
      flex-direction: column;
      /* justify-content: space-around; */
      font-size: 1.6rem;
      list-style: none;
      color: #fff;
    
  }
  .contNav ul li{
    margin-bottom: 80px;
  }
  .animated{
    transform: translateX(100%);
    /* display: none; */
    
    transition: 0.6s ease-in;
  }
  .reanimated{
    transform: translateX(0);
    transition: 0.6s ease-in;
  }
  .overhid{
    width: 400px;
    height: 100vh;
    position: absolute;
    left: 250px;
    display: flex;
    z-index: 4;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>
