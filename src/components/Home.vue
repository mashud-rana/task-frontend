<script setup>
import {ref,onMounted} from 'vue'
import {useAuthStore} from '../stores/auth'
import { useTaskStore } from '../stores/task';


const authStore=useAuthStore();
const taskStore=useTaskStore();


onMounted(async ()=>{
    await authStore.getUser();

    if(authStore.user)
    {
      taskStore.getUsers();
      taskStore.getTaskList();
    }
})
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            Welcome To Task Management
          </div>
          <div class="card-body" v-if="authStore.user">
            <h5 class="card-title">Task List</h5>
            <router-link :to="{name:'new-task'}"  class="btn btn-info">Create New Task</router-link>
              <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Crated By</th>
                      <th scope="col">Assign To</th>
                      <th scope="col">Date Line</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="task,index in taskStore.task" :key="index">
                      <th scope="row">{{ index+1 }}</th>
                      <td>{{ task.title }}</td>
                      <td>{{ task?.created_by?.name }}</td>
                      <td>{{ task?.assign_to?.name }}</td>
                      <td>{{ task?.dateLine }}</td>
                      
                    </tr>
                  </tbody>
            </table>
          </div>
          <div class="card-body" v-if="!authStore.user">
            <h5 class="card-title">Please Login First</h5>
            <router-link :to="{name:'login'}" class="btn btn-primary">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>