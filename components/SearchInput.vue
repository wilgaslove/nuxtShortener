<template>
  <div class="relative">
    <Icon name="mdi:magnify" class="absolute top-[50%] translate-y-[-50%] w-6 h-6" />
    <input type="text" 
    placeholder="Rechercher un lien"
    class="pl-10 p-2 rounded border"
  v-model="modelValue"
    />
    <p>{{ modelValue }}</p>
  </div>
</template>

<script lang="ts" setup>
// defineProps({
//   modelValue: {type: String, require: true}
// })

// const props = defineProps<{
//  modelValue: string;
// }>() //version typscript de ce qui est en haut.

const modelValue = defineModel()
</script>

<style>

</style>