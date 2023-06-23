<script setup>
import chart from "../assets/chart1.png"
import bar from "../assets/bar.png"
import { defineProps,watch } from "vue";
const props = defineProps(['myVar', 'changeMyVar']);

// watch(() => props.myVar, (newValue, oldValue) => {
//   if (newValue > 0) {
//     // Perform animation or other actions when myVar is greater than zero
//     animateOutSlide();
//   }
//   if(newValue==0){
//       reanimateOutSlide();
//     }
//   function animateOutSlide(){
//     const OutSlide = document.querySelector('.slide1Con')
//     OutSlide.classList.remove('reanimatedOutSlide')
//     OutSlide.classList.add('animateOutSlide');
    
//   }
//   function reanimateOutSlide(){
//     const OutSlide = document.querySelector('.slide1Con')
//     OutSlide.classList.remove('animateOutSlide');
//     OutSlide.classList.add('reanimatedOutSlide')
//   }
// });


</script>


<template
  
>
<div class="outSlide">
  <button @click="changeMyVar(0)">X</button>
  <div class="slide1Con"
  v-motion
    :initial="{ opacity: 1, x:1700}"
    :enter="{ opacity: 1, x: 0, 
      transition: {
      type: 'spring',
      stiffness: 150,
      damping: 35,
      mass: 2,
    },
    }"
    :delay="1200"
  >
        <div class="left">
          <h1>Green Homes</h1>
          <p>
            Green homes, also known as sustainable or eco-friendly homes, are designed and built with a focus on minimizing their environmental impact while maximizing energy efficiency and occupant comfort. These homes incorporate various design elements, technologies, and materials that promote sustainability and reduce resource consumption.

One of the key principles of green homes is energy efficiency. They are designed to optimize energy usage by incorporating features such as solar panels, energy-efficient appliances, proper insulation, and high-performance windows. These elements help reduce energy consumption and lower utility bills while minimizing greenhouse gas emissions.

          </p>
        </div>
        <div class="right">
          <div>
            <img :src="chart" alt="">
            <p>Green vs Traditional</p>
          </div>
          <div>
            <img :src="chart" alt="">
            <p>Some other Data</p>
          </div>
          <div class="last">
            <img :src="bar" alt="">
            <p>Some other data</p>
          </div>
        </div>
  </div>
</div>
</template>

<style scoped>
.slide1Con{
  width: 70%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  color: #fff;
  /* align-items: center; */
  z-index: 3;
  margin-left: 50px;
 
}
.outSlide{
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  display: flex;
  align-items: end;
  justify-content: center;
  overflow: hidden;
}
.slide1Con h1{
  font-size: 4rem;
}
.slide1Con .left{
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: justify;
}
.slide1Con .left p{
  height: 70%;
}
.slide1Con .right{
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.slide1Con .right div{
  width: 45%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
}
.slide1Con .right img{
  margin-bottom: 20px;
}
.slide1Con .right .last{
  width: 100%;
}
button{
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: black;
  /* border: #fff solid 2px; */
  border: none;
  color: #fff;
  padding: 20px;
  font-size: 1.6rem;
  cursor: pointer;
}
</style>
