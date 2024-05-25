<template>
  <div>
    <h1>Mes liens</h1>

    <table class="w-full border text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th  >Lien Complet</th>
          <th  >Lien court</th>
          <th  >Nombre de vues</th>
          <th  >Supprimer</th>
          <th  >Editer</th>
          <th   aria-label="Rafraichir">
            <Icon name="mdi:refresh" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links" :key="link.id" class="bg-white border-b">
          <td>
            <a :href="link.full_links" target="_blank">
              {{ link.full_links }}
            </a>
          </td>
          <td>
            <a :href="`${useRuntimeConfig().public.appUrl}/${link.short_links}`" target="_blank">
              {{ `${useRuntimeConfig().public.appUrl.replace(/http(s?):\/\//, "")}/${link.short_links}`}}
            </a>
          </td>
          <td>
            <a>
              {{ link.vieuws }}
            </a>
          </td>

          <td>
            <button>
              <Icon name="mdi:trash" />
            </button>
          </td>
          <td>
            <NuxtLink :to="`/links/${link.id}`">
              <Icon name="material-symbols:edit-square-outline" />
            </NuxtLink>
          </td>
          <td><a> </a></td>
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

<style scoped>
th{
  @apply px-6 py-3;
}

th{
  @apply px-6 py-4;
}
</style>