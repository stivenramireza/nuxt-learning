<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h1>{{ article.title }}</h1>
                <p class="small">{{ article.author }}</p>
                <p>{{ article.body }}</p>
                <nuxt-link to="/blog" class="btn btn-primary">
                    Previous
                </nuxt-link>
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
            
        }
    },
    async asyncData({params, error}){
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            const article = res.data
            const resAuthor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
            article.author = resAuthor.data.name
            return { article }
        } catch (error) {
            return { error: error}
        }
    }
}
</script>