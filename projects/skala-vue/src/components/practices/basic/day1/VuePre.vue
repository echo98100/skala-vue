<template>
  <div>
    <h2>v-pre 학습</h2>
    <p>일반 출력 {{ message }}</p>
    <p v-pre>v-pre 출력 : {{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('안녕하세요')
</script>
