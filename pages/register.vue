<template>
  <div class="prose">
    <h1>Inscription</h1>
    <form @submit.prevent="register(form)">
      <label>
        Nom et prénom
        <input type="text" v-model="form.name">
      </label>
      <label>
        Email
        <input type="email" v-model="form.email">
      </label>
      <label>
        Mot de passe
        <input type="password" v-model="form.password">
      </label>
      <label>
       Confirmation Mot de passe
        <input type="password" v-model="form.password_confirmation">
      </label>
      <button type="submit" class="btn">S'inscrire'</button>
    </form>
    <p>
      Vous avez déjjà un compte ?
      <NuxtLink class="uderline text-lime-600" to="/login">connectez-vous!</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "centered"
  });

  interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };

  const form = ref<RegisterPayload>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  async function register(payload: RegisterPayload) {
    alert('hello')
    console.log({payload});
  }
</script>

<style></style>