<template>
  <div class="about">
    <h1>My name is Roman Divkovic</h1>
    <getcomponent info="Write a litte bit about you" getMsg="And this is an about page about me"></getcomponent>
    <input id="input" v-model="value" type="text" placeholder="Write here" >
    <br>
    <h4>{{ value }}</h4>
  </div>
</template>


<script>
import getcomponent from '@/components/MyComponent.vue'


export default {
  name:'About',
  components: {
    getcomponent,
  },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    n() {
      return this.value
    }
  },
  methods: {
    onClick() {
      
    }
  }
}
</script>

<style>
  #button {
    margin-top: 10px;
    padding: 10px;
    color: black;
  }
  #input {
    width: 35%;
    margin-bottom: 10px;
  }
</style>