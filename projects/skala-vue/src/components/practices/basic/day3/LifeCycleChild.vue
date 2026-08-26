<template>
  <h3>라이프사이클 훅 흐름 탐색기</h3>
  <div class="counter-display">
    <p>실시간 타이머 카운트: {{ count }}</p>
    <button @click="count++">수동으로 숫자 올리기</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref(0)
let timerId = null

// 생성 단계
console.log('1. [setup] 컴포넌트 메모리 생성 (DOM 접근 불가)')

//부착 단계
onMounted(() => {
  console.log('2. [onMounted] 화면에 부착 (DOM 조작 적기)')

  timerId = setInterval(() => {
    count.value++
  }, 3000)
})

// 갱신 단계
onUpdated(() => {
  console.log('3. [onUpdated] 데이터가 변경되어 화면 새로 그림')
})

// 소멸 단계
onUnmounted(() => {
  clearInterval(timerId)
  console.log('4. [onUnmounted] 컴포넌트 소멸')
})
</script>

<style scoped>
.counter-display {
  background: #e3fafc;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #99e9f2;
  text-align: center;
}
</style>
