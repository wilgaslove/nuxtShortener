<template>
  <div class="prose">
    <h1>Connexion</h1>
    <form action="">
      <label>
        Email
        <input type="email">
      </label>
      <label>
        Mot de passe
        <input type="password">
      </label>
      <button type="button" class="btn">S'inscrire'</button>
    </form>
    <p>
      Pas de compte ?
      <NuxtLink class="uderline text-lime-600" to="/login">connectez-vous !</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "centered"
  });
</script>

<style></style>