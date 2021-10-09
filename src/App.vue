<template>
  <EText text="123456" />
  <AppHeader />
</template>

<script lang="ts">
import { inject, defineComponent, onMounted, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() => {
      getCurrentInstance()?.appContext.config.globalProperties.$echo()
    })

    console.log(inject('test'))

    return {}
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
