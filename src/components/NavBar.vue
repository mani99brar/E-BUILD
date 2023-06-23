<script setup>
import '../assets/main.css';

</script>


<template>
  <div class="navBar">
    <ul>
        <li>Home</li>
        <li>Gallery</li>
        <li>Contact</li>
    </ul>
  </div>
</template>

<style scoped>
  .navBar{
    font-family: myfont;
    width: 100%;
    height: 50px;
    color: #fff;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    height: 50px;
    align-items: center;
    /* background-color: #181818; */
  }
  .navBar ul{
    list-style: none;
    width: 70%;
    display: flex;
    justify-content: space-around;
  }
  .navBar li{
    width: 30%;
    font-size: 1.5rem;
    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
  }
</style>
