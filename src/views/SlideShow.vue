<script setup>
import { defineProps, ref, watch} from 'vue';
import Slide1 from '../components/SlideMore.vue';

const props = defineProps(['myVar', 'changeMyVar']);



watch(() => props.myVar, (newValue, oldValue) => {
  if (newValue > 0) {
    // Perform animation or other actions when myVar is greater than zero
    animateSlide();
  }
  if(newValue==0){
      reanimateHomeGal();
    }
  function animateSlide(){
    const HomeGal = document.querySelector('.slideCon')
    HomeGal.classList.remove('reanimatedSlide')
    HomeGal.classList.add('animateSlide');
    
  }
  function reanimateHomeGal(){
    const HomeGal = document.querySelector('.slideCon')
    HomeGal.classList.remove('animateSlide');
    HomeGal.classList.add('reanimatedSlide')
  }
});


</script>

<template>
  <div class="slideCon">
    
  </div>
  <component v-if="myVar==1" :is="Slide1" :changeMyVar="changeMyVar" :myVar="myVar"/>
</template>

<style scoped>
.slideCon {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  overflow: hidden;
  transform: translateX(-100%);
}
.animateSlide{
    transform: translateX(0);
    transition: 1s ease-in-out;
}
.reanimatedSlide{
    transform: translateX(-100%);
    transition: 1s ease-in-out;
}
</style>
