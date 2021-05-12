<template id="myBody">
    <div id="app">
        <h1>Fetching programming jokes to display</h1>
        <dl v-if="jokes">
            <template v-for="joke in jokes">
                <ul id="test" :key="joke.id">
                    <li>Type: {{joke.type}}</li>
                    <dt>{{ joke.setup }}</dt>
                    <dd>{{ joke.punchline }}</dd>
                </ul>
            </template>
        </dl>
        <p v-else>Getting jokes...</p>
    </div>
</template>

<script>
export default {
    name:'fetch',
     created() {
        fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
        .then((response) => response.json())
        .then((result) => {
          this.jokes = result
        })
        //https://official-joke-api.appspot.com/random_ten
    },
    data() {
        return {
            jokes: null
        }
    },
    props: {
    
    },
}
</script>

<style scoped>
    #app {
       background-color: rgb(79, 101, 121);
    }
    /* #app{
        background-color:#281459;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #157e50;
    
    #test {
        background-color: #281459;
    }
    #myBody {
        background-color: #281459;
    } */
</style>