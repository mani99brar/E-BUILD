<script setup>
import Card from '../components/Card.vue';
const props = defineProps(['myVar', 'changeMyVar']);
</script>

<template>
    <div class="contM">
        <div class="divBase">
            <h1>How We Do IT!</h1>
            <div class="outConCard">
                <Card />
                <Card />
                <Card />
            </div>
            <button @click="changeMyVar(2)">Know More</button>
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
    background-image: url(../assets/house2.jpg);
    background-size: cover;
}
.divBase{
    width: calc(100% - 250px);
    color: #fff;
    
}
.divBase h1{
    font-size: 3rem;
}
.divBase .outConCard{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 50px;
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