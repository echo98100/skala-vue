<template>
  <div>
    <h2>감시자 watch()의 원리와 실무 활용</h2>
    <h3>지역 선택 제어판</h3>
    <p>현재 선택된 도시: {{ currentCity }}</p>
    <button @click="currentCity = '서울'">서울 선택</button>
    <button @click="currentCity = '수원'">수원 선택</button>
    <button @click="currentCity = '부산'">부산 선택</button>

    <div class="monitor">
      <h3>파수꾼(watch) 모니터링 시스템</h3>
      <p>{{ logMessage }}</p>
      <small style="color: gray">(버튼을 누른 후 브라우저 콘솔창 F12를 확인해 보세요)</small>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const currentCity = ref('서울')
const logMessage = ref('아직 감시시스템 작동X')

// currentCity 변수를 감시하는 Watch 가동
watch(currentCity, (newValue, oldValue) => {
  //값이 바뀌는 순간 자동 주입
  logMessage.value = `Watcher 발동 [${oldValue}]에서 [${newValue}]로 변경`

  //시뮬레이션
  console.log(`기상청 서버에서 ${newValue}의 날씨 API를 다시 조회합니다`)
})
</script>

<style scoped></style>
