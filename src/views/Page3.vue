<script setup>
import Card from '../components/Card.vue';
import dhouse from '../assets/3Dhouse.jpeg'
import print from '../assets/print.jpeg'
import print2 from '../assets/print2.jpg'
const props = defineProps(['myVar', 'changeMyVar']);
</script>

<template>
    <div class="contM">
        <div class="divBase">
            <h1>Design</h1>
            <div class="design">
                <div class="left">
                    <img :src="dhouse" alt="">
                </div>
                <div class="right">
                    <img :src="print" alt="">
                    <img :src="print2" alt="">
                    <button @click="changeMyVar(3)">MORE</button>
                </div>
            </div>
        </div>
    </div>   

   


</template>


<style scoped>

.contM{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-image: url(../assets/house3.webp);
    background-size: cover;
}
.divBase{
    width: calc(100% - 250px);
    color: #fff;   
    height: 70%;
}
.divBase h1{
    font-size: 3rem;
}
.divBase .design{
    height: 90%;
    display: flex;
}
.divBase .left{
    width: 70%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.divBase .left img{
    width: auto;
    transform: scale(0.5);
    /* height: 100%; */
    
}
.divBase .right{
    height: 100%;
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
}
.divBase .right img{
    /* margin-bottom: 20px; */
    width: 90%;

}
.divBase button{
    background: none;
    padding: 20px 40px;
    border: #fff 2px solid;
    width: 90%;
    color: #000;  
    background-color: #fff;
    /* margin: 40px 0px;   */
}

</style>