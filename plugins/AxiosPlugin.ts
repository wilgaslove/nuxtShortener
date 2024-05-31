import axios from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {
    //configuration de base pour que les requettes requêtes soient accepter par le backend
    const config = useRuntimeConfig();
    axios.defaults.baseURL = `${config.public.apiUrl}/api`;
    axios.defaults.headers.common['Content-type'] = "application/json"; // on envoie du json au serve
    axios.defaults.headers.common['Accept'] = "application/json"; // on accepte du json du serve
    axios.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    // on lance des requêtes pour avoir les cookies nous permettant d'interagir avec le backend
    await axios.get("/sanctum/csrf-cookie", {
        baseURL: config.public.apiUrl
    });
})
