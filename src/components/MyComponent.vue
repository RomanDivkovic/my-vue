<template>
    <div>
      <h1>{{ getMsg }}</h1>
        <p>that has string interpulation and will use other functions we have learned during this course</p>
  </div>
</template>

<script>
export default {
  name: 'myComp',
  props: {
    getMsg: String
  }
}
</script>

<style>
    
</style>