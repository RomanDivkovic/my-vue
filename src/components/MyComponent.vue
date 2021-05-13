<template>
    <div>
      <h2>{{ getMsg }}</h2>
        <p>I'm 28 years old and this is a school project</p>
        <h3> {{ info }}</h3>

  </div>
</template>

<script>
export default {
  name: 'myComp',
  props: {
    getMsg: String,
    info: String,
    age: Number

  }
}
</script>

<style>
    
</style>