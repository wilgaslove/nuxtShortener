<template>
  <div>
    <h1>Mes liens</h1>

    <table class="w-full">
      <thead>
        <tr>
          <th>Lien Complet</th>
          <th>Lien court</th>
          <th>Nombre de vues</th>
          <th>Supprimer</th>
          <th>Editer</th>
          <th>Rafraîchir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links" :key="link.id">
        <td><a :href="link.full_links" target="_blank"> {{ link.full_links }} </a></td>
        <td><a href="#"> {{ link.short_links }} </a></td>
        <td><a > {{ link.vieuws }} </a></td>
        <td><a > {{  }} </a></td>
        <td><a > {{  }} </a></td>
        <td><a > {{  }} </a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    short_links: "lkj23df",
    full_links: "https://youtube.com",
    vieuws: 3,
    id: 1,
  },
  {
    short_links: "lkj25fe",
    full_links: "https://w3school.com",
    vieuws: 1,
    id: 2,
  },
  {
    short_links: "lk98dsf",
    full_links: "https://devdocs.io",
    vieuws: 0,
    id: 3,
  },


]
</script>

<style></style>