import {defineStore} from 'pinia';
import axios from 'axios'


export const useAuthStore=defineStore('auth',{
    state: () => ({
        authUser:"",
        errors:[]
    }),
    getters:({
        user:(state)=>state.authUser
    }),
    actions:{
        async getToken(){
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser(){
            this.getToken();
            const data=await axios.get('/api/user');
            console.log(data.data);
            this.authUser=data.data;
        },
        async login(data){
            this.errors=[];
            await this.getToken();
            try {
                const authUser=await axios.post('/login',{
                    email:data.email,
                    password:data.password
                });
                console.log(authUser);
                this.router.push('/');
            } catch (error) {
                if(error.response.status===422)
                {
                    this.errors=error.response.data.errors;
                }
            }
        },
        async register(data){
            this.errors=[];
            await this.getToken();
            try {
                await axios.post('/register',{
                    name:data.name,
                    email:data.email,
                    password:data.password,
                    password_confirmation:data.password_confirmation
                });
                this.router.push('/');
            } catch (error) {
                if(error.response.status===422)
                {
                    this.errors=error.response.data.errors;
                }
            }
            
        },
        async logout(){
            await axios.post('/logout');
            this.authUser='';
            this.router.push('/');
        }
    }
});