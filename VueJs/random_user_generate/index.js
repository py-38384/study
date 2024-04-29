
const app = Vue.createApp({
    data(){
        data = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
        return{data}
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api/')
            const data = await res.json()
            console.log()
            this.data = {
                firstName: data.results[0].name.first,
                lastName: data.results[0].name.last,
                email: data.results[0].email,
                gender: data.results[0].gender,
                picture: data.results[0].picture.large
            }
            
        }
    }
})

app.mount('#app')