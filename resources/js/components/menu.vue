<template>
  <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ecommerce</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
              <router-link class="nav-link active" to="/listcat">Catégories
                </router-link>
            </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/listart">Articles</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link active" to="/listcat">Catégories
              </router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-sm-2" type="search" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import MenuVue from '../../../../Downloads/Menu.vue';


</script>

<style lang="scss" scoped></style>