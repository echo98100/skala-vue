<template>
  <div>
    <h2>reactive() 데이터 watch 감시 규칙</h2>
    <h3>상품 정보 관리 (reactive)</h3>
    <p>상품명: {{ state.productName }} / 가격: {{ state.price }}원</p>
    <button @click="state.price += 500">가격 500원 인상</button>

    <div class="monitor auto">
      <p>1) state 변수 통째로 감시 (deep 자동화)</p>
      <p>{{ logAutoDeep }}</p>
    </div>

    <div class="monitor target">
      <p>2) () => state.price 콕 집어 감시 (과거 추적)</p>
      <p>{{ logTarget }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

// reactive 선언 묶음 상품 데이터
const state = reactive({
  productName: '노트북',
  price: 1000,
})

const logAutoDeep = ref('대기 중')
const logTarget = ref('대기 중')

// 1. 변수 명 그대로 감시
watch(state, (newVal, oldVal) => {
  logAutoDeep.value = `[자동 deep] 이전:${oldVal} -> 현재:${newVal}`
})

// 2. 화살표 함수로 특정 속성만 감시
watch(
  () => state.price,
  (newPrice, oldPrice) => {
    logTarget.value = `[타겟] 이전:${oldPrice} -> 현재:${newPrice}`
  },
)
</script>

<style lang="scss" scoped></style>
