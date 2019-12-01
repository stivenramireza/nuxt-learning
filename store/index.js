import { db } from '@/plugins/firebase.js'

export const state = () => ({
    tasks: '',
    task: ''
})

export const mutations = {
    setTasks(state, payload){
        state.tasks = payload
    },
    setTask(state, payload){
        state.tasks.push(payload)
    },
    deleteTask(state, payload){
        const index = state.tasks.findIndex(task => task.id === payload.id)
        state.tasks.splice(index, 1)
    },
    updateTask(state, payload){
        const index = state.tasks.findIndex(task => task.id === payload.id)
        state.tasks[index].name = payload.name
    },
    setTaskIndividual(state, payload){
        state.task = payload
    }
}

export const actions = {
    nuxtServerInit ({commit}, {req}){
        return db.collection('tasks').get()
            .then(query => {
                const tasks = []
                query.forEach(element => {
                    let task = element.data()
                    task.id = element.id
                    tasks.push(task)
                })
                return commit('setTasks', tasks)
            })
            .catch(err => {
                console.log(err)
            })
    },
    async addTask({commit}, payload){
        try {
            const doc = await db.collection('tasks').add({
                name: payload,
                date: new Date()
            })
            commit('setTask', {name: payload, id: doc.id})
        } catch (error) {
            console.log(error)
        }
    },
    async deleteTask({commit}, payload){
        await db.collection('tasks').doc(payload.id).delete()
            .then(() => {
                console.log('Document has been deleted!')
                commit('deleteTask', payload)
            })
            .catch(err => {
                console.log('Error deleting document: ', err)
            })
    },
    updateTask({commit}, payload){
        db.collection('tasks').doc(payload.id).update({
            name: payload.name
        })
        .then(() => {
            console.log('Task updated')
            commit('updateTask', payload)
            this.app.router.push('/vuex')
        }).catch(e => {
            console.log(e)
        })
    }

}