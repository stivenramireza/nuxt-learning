<template>
    <div class="container mt-5">
        <div class="card my-2" v-for="(item, index) in articles" :key="index">
            <div class="card-body">
                <nuxt-link :to="`/blog/${item.id}`">
                    <h1>{{ item.title }}</h1>
                </nuxt-link>
                <p>{{ item.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'we',
    data(){
        return{
            articles: [
                { id: 1, title: 'Title #1' },
                { id: 2, title: 'Title #2' },
                { id: 3, title: 'Title #3' },
                { id: 4, title: 'Title #4' }
            ]
        }
    },
    async created(){
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            this.articles = res.data            
        } catch (error) {
            console.log(error)
        }
    }
}
</script>