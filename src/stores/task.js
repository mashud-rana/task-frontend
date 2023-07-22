import {defineStore} from 'pinia';
import axios from 'axios'


export const useTaskStore=defineStore('task',{
    state: () => ({
        tasks:[],
        users:[],
        errors:[]
    }),
    getters:({
        user:(state)=>state.users,
        task:(state)=>state.tasks
    }),
    actions:{
        async getTaskList(){
            let data=await axios.get('/api/task');
            if(data.status==200)
            {
                // console.log(data?.data?.data);
                this.tasks=[...data?.data?.data];
            }
        },
        async getUsers(){
            let data=await axios.get('/api/get-users');
            if(data.status==200)
            {
                // console.log(data?.data?.data);
                this.users=[...data?.data?.data];
            }
        },
        async createTask(data){
            await axios.post('/api/task',{
                title:data.title,
                description:data.description,
                dateLine:data.dateLine,
                assign_to:data.assign_to
            }).then(response=>{
                console.log(response);
                if(response.data)
                {
                    this.router.push('/');
                }
            }).catch(error=>{
                if(error.response.status===422)
                {
                    this.errors=error.response.data.errors;
                }
            });
        },
    }
});