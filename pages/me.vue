<template>
  <div>
    <p><strong>Nom d'utilisateur: </strong>Wilgas</p>
    <p><strong>Email: </strong>Wilgas216@gmail.com</p>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

const { data } = await axios.get("/user");
</script> 


<style>

</style>