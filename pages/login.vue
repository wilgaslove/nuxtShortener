<template>
  <div class="prose">
    <h1>Connexion</h1>
    
    <FormKit type="form">
      <FormKit type="email" label="Email" nema="email" />
      <FormKit type="password" label="mot de passe" name="password"/>
    </FormKit>

    <p>
      Pas de compte ?
      <NuxtLink class="uderline text-lime-600" to="/login">connectez-vous !</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

  definePageMeta({
    layout: "centered"
  });

  interface LoginPayload {

  email: string;
  password: string;

};

const form = ref<LoginPayload>({

  email: "",
  password: "",

});

async function login(payload: LoginPayload) {
 await axios.post('/login', payload);
// useRoute().push("/me")
 
}
</script>

<style></style>