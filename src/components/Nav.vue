<script setup>
import { useAuthStore } from '../stores/auth';

const authStore=useAuthStore();

</script>

<template>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link :to="{name:'home'}" class="navbar-brand" href="#">
      <img src="https://mashud-rana.com/assets/images/logo/favicon.png" alt="Mashud Rana">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name:'home'}"  class="nav-link" aria-current="page" href="#">Home</router-link >
        </li>
        <li class="nav-item" v-if="!authStore?.user">
          <router-link :to="{name:'login'}" class="nav-link" aria-current="page" href="#">Login</router-link >
        </li>
        <li class="nav-item" v-if="!authStore?.user">
          <router-link :to="{name:'register'}" class="nav-link" aria-current="page" href="#">Register</router-link >
        </li>
        <li class="nav-item" v-if="authStore?.user">
          <a  class="nav-link"  @click="authStore.logout" aria-current="page" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>


