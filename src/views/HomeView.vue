<script setup>
import { defineProps,ref } from 'vue';
import Texture from '../components/Texture.vue';
import Mid from '../components/Mid.vue';
import house from "../assets/house.jpg";
import NavBar from '../components/NavBar.vue';
import Base from './Base.vue';
import Page2 from './Page2.vue';
import Page3 from './Page3.vue';




const props = defineProps(['myVar', 'changeMyVar']);

let hstate = ref(1);
let pstate = ref(3);
function handleClickNext() {
  pstate.value =hstate.value;
  hstate.value = hstate.value % 3 + 1;
  

}

function handleClickPrevious() {
  pstate.value=hstate.value;
  hstate.value = (hstate.value - 2 + 3) % 3 + 1;
}

</script>

<template>
  <div class="cont">
    <NavBar />
    
    <!-- Display components based on hstate value -->
   
    <component 
      v-motion
    :initial="{ opacity: 1, x:1600}"
    :enter="{ opacity: 1, x: 0, 
      transition: {
      type: 'spring',
      stiffness: 250,
      damping: 35,
      mass: 2,
    },
    }"
    :delay="200"
    v-if="hstate === 1" :is="Base" :myVar="myVar"
  :changeMyVar="changeMyVar" />
    
    <component
    v-motion
    :initial="{ opacity: 1, x:1600}"
    :enter="{ opacity: 1, x: 0, 
      transition: {
      type: 'spring',
      stiffness: 250,
      damping: 35,
      mass: 2,
    },
    }"
    :delay="200"
    
    v-if="hstate === 2" :is="Page2" :myVar="myVar"
  :changeMyVar="changeMyVar" />
    <component
    v-motion
    :initial="{ opacity: 1, x:1600}"
    :enter="{ opacity: 1, x: 0, 
      transition: {
      type: 'spring',
      stiffness: 250,
      damping: 35,
      mass: 2,
    },
    }"
    :delay="200"
    v-if="hstate === 3" :is="Page3" :myVar="myVar"
  :changeMyVar="changeMyVar" />



<!--  -->
    <component 
      v-motion
    :initial="{ opacity: 1, x:0}"
    :enter="{ opacity: 1, x: -1600, 
      transition: {
      type: 'spring',
      stiffness: 250,
      damping: 35,
      mass: 2,
    },
    }"
    :delay="200"
    v-if="pstate === 1" :is="Base"  />
    
    <component
    v-motion
    :initial="{ opacity: 1, x:0}"
    :enter="{ opacity: 1, x: -1600, 
      transition: {
      type: 'spring',
      stiffness: 250,
      damping: 35,
      mass: 2,
    },
    }"
    :delay="200"
    
    v-if="pstate === 2" :is="Page2" />
    <component
    v-motion
    :initial="{ opacity: 1, x:0}"
    :enter="{ opacity: 1, x: -1600, 
      transition: {
      type: 'spring',
      stiffness: 250,
      damping: 35,
      mass: 2,
    },
    }"
    :delay="200"
    v-if="pstate === 3" :is="Page3" />


<!--  -->

    
    <div class="nextP">
      <button  @click="handleClickPrevious">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </button>
      <button @click="handleClickNext">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </button>
    </div>
  </div>
</template>


<style scoped>
.cont{
  display: flex;
  background-color: #000;
  /* justify-content: center; */
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: center; */
  width: calc(100% - 450px);
 height: 100vh;
 position: relative;
 overflow: hidden;
 
}

.cont .nextP{
  width: 200px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 50px;
  right: 100px;
}
.cont .nextP button{
  width: 40%;
  height: 100%;
  background-color: #fff;
  color: #000;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}




</style>

