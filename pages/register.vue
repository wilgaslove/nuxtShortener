<template>
  <div class="prose">
    <h1>Inscription</h1>


    <FormKit 
    type="form" 
    submit-label="s'inscrire" 
    :submit-attrs="{inputClass: 'btn'}" #default="{value}" @submit="register">
    <FormKit 
    name="name" 
    label="Nom et prenom" 
    type="text" 
    placeholder="Wilgas HOUNFONADAN"/>
    <FormKit 
    name="email" 
    label="Email" 
    type="email"  
    validation="required|email" 
    placeholder="jdoe@exemple.com"/>
    <FormKit 
    name="password" 
    label="Votre Mot de Passe" 
    type="password" 
    validation="required"  
    placeholder="Votre mot de passe"/>
    <FormKit 
    name="password_confirmation" 
    label="Confirmation mot de passe" 
    type="password" 
    validation="required|confirm:password"  
    placeholder="Confirmez votre mot de passe"/>
    </FormKit>

    <p>
      Vous avez déjà un compte ?
      <NuxtLink class="uderline text-lime-600" to="/login">connectez-vous!</NuxtLink>
    </p>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

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
  console.log(payload);
  
// try {
//   await axios.post('/register', payload)
// await axios.post('/login', {
//   email: payload.email,
//   password:payload.password
// });

// useRouter().push("/me");
 
// } catch (error) {
//   console.log("une erreur est survenue");
  
// }
 
}
</script>

<style>
.formkit-form {
  @apply space-y-4;
}
</style>