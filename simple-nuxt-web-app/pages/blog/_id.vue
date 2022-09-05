<template>
    <div class="container">
        <div class="card">
           <div class="card-body">
                <h1>{{articulo.title}}</h1>
                <p class="small">{{articulo.nombreAutor}}</p>
               <p>{{articulo.body}}</p>
               <nuxt-link to="/blog" class="btn btn-primary">Atrás</nuxt-link>
           </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){

    },
    /**
     * async created(){
        try {
            const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
            
            this.articulo = res.data;
            console.log('Artículo: ', this.articulo);

            const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
            
            console.log('Autor: ', resAutor.data);

            this.articulo.nombreAutor = resAutor.data.name;

        } catch (error) {
            console.log(error);
        }
    },
     */
    async asyncData({params}) {
        try {
            const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${params.id}`)
            const articulo = res.data;
            const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
            articulo.nombreAutor = resAutor.data.name;
            return {articulo};
        } catch (error) {
            return {error: error}
        }
    },
    
}
</script>
