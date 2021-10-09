<template>
  <header class="app-header">
    <h1>LOGO</h1>
    <p>Header</p>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    return {}
  }
})
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: solid 1px blue;
}
</style>
