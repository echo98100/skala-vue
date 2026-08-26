<template>
  <div>
    <h2>Props & Emits</h2>
    <div class="parent-container">
      <h2>상위 컴포넌트(Parent)</h2>
      <p>
        현재 로컬 데이터(State) : <strong>{{ message }}</strong>
      </p>
      <br />
      <PropsEmitsChild :parent-data="message" @update-request="handleUpdateRequest" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PropsEmitsChild from './PropsEmitsChild.vue'

// 상위 컴포넌트의 로컬 반응형 상태 정의
const message = ref('Parent 초기 메시지')

// 하위 컴포넌트의 커스텀 이벤트를 수신했을 때 실행될 핸들러 함수
// 인자로 하위 컴포넌트가 보낸 payload가 자동 주입
const handleUpdateRequest = (newValue) => {
  message.value = newValue
}
</script>

<style scoped>
.parent-container {
  border: 2px solid #2ecc71;
  padding: 20px;
  background-color: #f8f9fa;
  margin: 0 auto;
  border-radius: 8px;
}
</style>
