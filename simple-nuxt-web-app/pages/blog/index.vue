<template>
    <div class="container mt-5">
       <div class="card" v-for="(item, index) in articulos" :key="index">
           <div class="card-body">
               <nuxt-link :to="`/blog/${item.id}`">
                   <h1>{{item.title}}</h1>
               </nuxt-link>
               <p>{{item.body}}</p>
           </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            articulos: []
        }
    },
    async created(){
        try {
            const res = await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
            console.log(res.data);
            this.articulos = res.data;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>
