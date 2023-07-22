<script setup>

import axios from 'axios';
import {ref} from 'vue';
import { useAuthStore } from '../stores/auth';


const authStore=useAuthStore();
const form =ref({
    email:'admin@app.com',
    password:'password'
});

</script>

<template>

    <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
            <div class="card-header">
                <h4>Login</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="authStore.login(form)">
                <div class="form-group">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="email" v-model="form.email" class="form-control" id="formGroupExampleInput" placeholder="Email">
                    <span v-if="authStore.errors.email">
                        <span class="text-danger">{{ authStore.errors.email[0] }}</span>
                    </span>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="password" v-model="form.password" class="form-control" id="formGroupExampleInput2" placeholder="Password">
                    <span v-if="authStore.errors.password">
                        <span class="text-danger">{{ authStore.errors.password[0] }}</span>
                    </span>
                </div>
                <button type="submit" class="btn btn-primary mt-2">Login</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>



