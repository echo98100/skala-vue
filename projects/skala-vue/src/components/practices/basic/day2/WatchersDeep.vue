<template>
  <div>
    <h2>ref 객체/배열 감시</h2>
    <h3>회원 데이터 조작 panel</h3>
    <p>이름: {{ user.name }} / 나이: {{ user.age }}세</p>
    <button @click="user.name = '이순신'">이름만 변경</button>
    <button @click="user.age++">나이만 변경 (age++)</button>

    <div class="monitor">
      <p>1) deep: true 모니터 (전체 감시)</p>
      <p>{{ logDeep }}</p>
    </div>

    <div class="monitor target">
      <p>2) 화살표 함수 모니터 (나이만 타겟 감시)</p>
      <p>{{ logTarget }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const user = ref({
  name: '홍길동',
  age: 20,
})

const logDeep = ref('아직 반응 없음')
const logTarget = ref('아직 반응 없음')

// watch(user, () -> {cosole.log('')}) 와 같은 식으로 작성하면
// 로그가 절대 찍히지 않는다

// 해결 1: deep 옵셩르 켜 객체 하위 속성 전체 감시
watch(
  user,
  (newVal) => {
    logDeep.value = `[deep 감지] 이름: ${newVal.name}, 나이: ${newVal.age}`
  },
  { deep: true },
)

// 해결 2: 화살표 함수로 특정 속성만 집어 감시 (이전 값 추적 가능)
watch(
  () => user.value.age,
  (newAge, oldAge) => {
    logTarget.value = `[타겟 감지] 나이가 ${oldAge}세 -> ${newAge}세로 변경`
  },
)
</script>

<style scoped></style>
