<template>
  <div class="app-container">
    666
  </div>
</template>

<script>
import { test } from '@/api/table'
export default {
  name: 'Changepwd',
  data() {
    return {
      list: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      test().then(res =>{

      })
    }
  }
}
</script>

<style scoped>

</style>
