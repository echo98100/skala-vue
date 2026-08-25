<template>
  <div v-cloak>
    <h2>v-cloack 학습</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('느린 네트워크 안전하게 출력되는 메세지')
</script>

<style scoped>
/* Vue가 로딩되기 전까지 해당 구역을 물리적으로 숨김 */
[v-cloak] {
  display: none !important;
}
</style>
