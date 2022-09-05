<template>
    <div class="container">
        <h2>Vuex</h2>
        <form @submit.prevent="addTask(task)">
            <input type="text" class="form-control mb-2" v-model="task">
            <b-button type="submit">Add</b-button>
        </form>
        <ul>
            <li v-for="(item, index) in tasks" :key="index">
                {{ item.id }} - {{ item.name }}
                <b-button class="btn-sm btn-warning" :to="`/vuex/${item.id}`">Update</b-button>
                <b-button class="btn-sm btn-danger" @click="deleteTask(item)">Delete</b-button>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { db } from "@/plugins/firebase.js"
export default {
    data(){
        return{
            task: ''
        }
    },
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['addTask', 'deleteTask', 'updateTask'])
    }
}
</script>