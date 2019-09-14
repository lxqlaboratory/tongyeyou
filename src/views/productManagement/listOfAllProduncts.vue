<template>
  <div class="app-container" />
</template>

<script>
import { ListOfAllProduncts } from '@/api/productManagement'
export default {
  name: 'ListOfAllProduncts',
  data() {
    return {

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      ListOfAllProduncts().then(res => {
      })
    }
  }
}
</script>

<style scoped>

</style>
