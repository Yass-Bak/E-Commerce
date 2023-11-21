<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
    <router-link :to="{ name: 'addcategorie' }" class="btn btnoutline-light">Ajouter Catégorie
    </router-link></div>
    </nav>
    <div>
        <div class="py-6">
            <table class="table table-striped shadow">
                <thead>
                    <tr>
                        <td>Image</td>
                        <td>Nom catégorie</td>
                        <td>Modifier</td>
                        <td>Supprimer</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cat in categories" :key="cat.id">
                        <td><img :src="cat.imagecategorie" width="70" height="80" /> </td>
                        <td>{{ cat.nomcategorie }}</td>
                        <td><div class="btn-group" role="group">
    <router-link :to="{name: 'editcategorie', params: {id: cat.id}}" class="btn btn-success">Modifier</router-link></div></td>
                        <td><button class="btn btn-danger mx-2" @click="deletecategorie(cat.id)">Supprimer</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const categories = ref([])
const getcategories = async () => {
     console.log("Fetching categories...");
    await axios.get("http://localhost:8000/api/categories")
        .then(res => {
            categories.value = res.data
            console.log(categories.value)
        })
        .catch(error => {
            console.log("Error fetching categories:", error)
        })
}
onMounted(() => {
    getcategories();
});
const deletecategorie = async (id) => {
    try {
        await axios.delete(`http://localhost:8000/api/categories/${id}`)
        getcategories()
    } catch (error) {
        console.log(error)
    }
}
</script>
<style lang="scss" scoped></style>