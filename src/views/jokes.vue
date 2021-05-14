<template id="myBody">
    <div id="app">
        <h1>Getting programming jokes or general to display</h1>
         
        <dl v-if="jokes">
            <template v-for="joke in jokes">
                <ul id="test" :key="joke.id">
                    <li > Type: {{joke.type}}</li>
                    <dt>{{ joke.setup }}</dt>
                    <dd  v-bind:style="styleObject" >{{ joke.punchline }}</dd>
                </ul>
            </template>
        </dl>
        <p v-else>Getting jokes...</p>
        <b-button id="button" v-on:click='changeJokes' variant="primary">Click here to change to general</b-button>
        <br>
        <b-button id="button" v-on:click='changeBack' variant="primary">Click here to change to programming</b-button>
    </div>
</template>

<script>
import axios from "axios"

export default {
    //v-bind
    name:'fetch',
     created() {
        axios.get(`https://official-joke-api.appspot.com/jokes/programming/ten`)
            .then(response => {
            this.jokes = response.data
            }).catch(e => {
                this.errors.push(e)
            })
    },
    data() {
        return {
            jokes: null,
            styleObject: {
                color: 'grey',
                fontSize: '20px'
            }

        }
    },
    props: {
    
    },
    methods: {
        changeJokes() {
            axios.get(`https://official-joke-api.appspot.com/random_ten`)
            .then(response => {
            this.jokes = response.data
            }).catch(e => {
                this.errors.push(e)
            })
        },
        changeBack() {
            axios.get(`https://official-joke-api.appspot.com/jokes/programming/ten`)
            .then(response => {
            this.jokes = response.data
            }).catch(e => {
                this.errors.push(e)
            })
        }
    }
}
</script>

<style scoped>
    #app {
       background-color: rgb(79, 101, 121);
    }
    #button {
        color: whitesmoke;
    }
</style>