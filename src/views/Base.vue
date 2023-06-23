<script setup>
import house from "../assets/house.jpg"
import Count from "../components/Count.vue"
import { defineProps } from "vue";
import SlideMore from "../components/SlideMore.vue";
 
const props = defineProps(['myVar', 'changeMyVar']);

const name="Energy Savings"
const val="1235"
</script>

<template>
    
   <div class="contM">
        <div class="divBase">
            <nav>
                <span class="head1">Green Homes
                    <div><p>Sustainable</p><p>Eco Friendly</p> <p>Modern</p> </div>
                </span>
                 
            </nav>
            <button v-wave="{ color: 'black' }" @click="changeMyVar(1)"
            >Exlpore More</button>

            <Count :name="name" :val="val" />
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
    background-image: url(../assets/house.jpg);
    background-size: cover;
}
.divBase{
    width: calc(100% - 250px);
    color: #fff;
}
.divBase .nav{
    width: fit-content;
}
.divBase nav .head1{
    font-size: 5rem;
    width: fit-content;
    position: relative;
}

.divBase nav .head1 div{
    display: flex;
    font-size: 1.2rem;
    /* width: inherit; */
    width: 100%;
    /* justify-content: space-around; */
}
.divBase nav p{
    /* margin-right: 5px;
    border-bottom: solid;
    padding-bottom: 2px; */
    /* width: fit-content; */
    margin-right: 50px;
    /* margin-left: 10px; */
    /* margin-left: 25px; */
    letter-spacing: 4px;
}

.divBase button{
    background: none;
    padding: 20px 40px;
    border: #fff 2px solid;
    color: #000;  
    background-color: #fff;
    margin: 40px 0px;  
}

</style>
