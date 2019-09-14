<template>
  <div class="app-container" />
</template>

<script>
  import { AddTravelProducts } from '@/api/productManagement'
export default {
  name: 'AddTravelProducts',
  data() {
    return {

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      AddTravelProducts().then(res => {
      })
    }
  }
}
</script>

<style scoped>

</style>
