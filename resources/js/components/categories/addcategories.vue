<template>
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2
    shadow">
        <form @submit.prevent="addCategorie">
            <div class="mb-3">
                <label for="nomcateg" class="form-label">Nom catégorie</label>
                <input type="text" class="form-control" id="nomcategorie" vmodel="categorie.nomcategorie">
            </div>
            <div class="mb-3">
                <label for="imagecateg" class="form-label">Image</label>
                <input type="texte" class="form-control" id="imagecategorie" vmodel="categorie.imagecategorie">
            </div>
            <button type="submit" className="btn btn-outline-primary">
                Enregister
            </button>
            <router-link to="/listcat" class="btn btn-outline-danger mx-2">
                Cancel
            </router-link>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router';

import axios from 'axios'; 
const router = useRouter()

const categorie = ref({
    nomcategorie: "",
    imagecategorie: ""
})
const addCategorie = async () => {
    await
        axios.post("http://localhost:8000/api/categories/", categorie.value)
            .then(() => (
                router.push({ name: 'listecategories' })
            ))
            .catch(err => console.log(err))
}
</script>
<style scoped></style>