<template>
  <div class="about">
    <h1>This is an about page</h1>
    <getcomponent getMsg="And this is a string component"></getcomponent>
  </div>
</template>


<script>
import getcomponent from '@/components/MyComponent.vue'

export default {
  name:'About',
  components: {
    getcomponent
  }
}
</script>