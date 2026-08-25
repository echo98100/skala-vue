<template>
  <div>
    <h2>v-memo 학습</h2>
    <div v-memo="[name]" style="padding: 20px; border: 1px solid #42b883; margin-bottom: 10px">
      <p>v-memo 적용 영역(기준: name)</p>
      <p>이름: {{ name }}</p>
      <p>나이: {{ age }}</p>
    </div>
    <button @click="name = '이순신'">1. 이름 변경 (이순신)</button>
    <button @click="age++">2. 나이 한 살 추가 (age++)</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('홍길동')
const age = ref(20)
</script>
