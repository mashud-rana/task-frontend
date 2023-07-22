<script setup>

import axios from 'axios';
import moment from 'moment'
import {ref,onMounted} from 'vue';
import {useAuthStore} from '../stores/auth'
import { useTaskStore } from '../stores/task';


const authStore=useAuthStore();
const taskStore=useTaskStore();

const form =ref({
    title:null,
    description:null,
    dateLine:null,
    assign_to:null
});


onMounted(async ()=>{
    await authStore.getUser();
    form.value.dateLine=new Date().toISOString().substr(0, 10);
    taskStore.getUsers();
})

</script>

<template>

    <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
            <div class="card-header">
                <h4>Create New Task</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="taskStore.createTask(form)">
                <div class="form-group">
                    <label for="formGroupExampleInput" class="form-label">Title *</label>
                    <input type="text" v-model="form.title" class="form-control" id="formGroupExampleInput" placeholder="Title">
                    <span v-if="taskStore.errors.title">
                        <span class="text-danger">{{ taskStore.errors.title[0] }}</span>
                    </span>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2" class="form-label">Description</label>
                    <textarea v-model="form.description" class="form-control" id="" cols="3" rows="5" placeholder="Description"></textarea>
                    <span v-if="taskStore.errors.description">
                        <span class="text-danger">{{ taskStore.errors.description[0] }}</span>
                    </span>
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput2" class="form-label">Assign To *</label>
                    <select v-model="form.assign_to" id="" class="form-control">
                        <option  v-for="user,index in taskStore.user" :key="index" :value="user.id">{{ user.name }}</option>
                    </select>
                    <span v-if="taskStore.errors.assign_to">
                        <span class="text-danger">{{ taskStore.errors.assign_to[0] }}</span>
                    </span>
                    
                </div>

                <div class="form-group">
                    <label for="formGroupExampleInput2" class="form-label">Deadline *</label>
                    <input type="date" v-model="form.dateLine" class="form-control" id="formGroupExampleInput" placeholder="Deadline">
                    <span v-if="taskStore.errors.dateLine">
                        <span class="text-danger">{{ taskStore.errors.dateLine[0] }}</span>
                    </span>
                </div>

                <button type="submit" class="btn btn-primary mt-2">Create New Task</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>