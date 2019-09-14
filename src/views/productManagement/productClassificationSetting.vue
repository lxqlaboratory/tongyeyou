<template>
  <div class="app-container">
  </div>
</template>

<script>
import { productClassificationSetting } from '@/api/productManagement'
export default {
  name: 'ProductClassificationSetting',
  data() {
    return {

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      productClassificationSetting().then(res => {
      })
    }
  }
}
</script>

<style scoped>

</style>
