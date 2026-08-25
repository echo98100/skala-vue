<template>
  <div>
    <h2>reactive() 배열의 특정 인덱스/요소 감시하기</h2>
    <h3>즐겨찾기 도시 목록 (reactive 배열)</h3>
    <p>
      현재 등록된 도시: <strong>{{ cityList }}</strong>
    </p>
    <button @click="cityList.push('부산')">부산 추가 (push)</button> &nbsp;
    <button @click="cityList.pop()">최근 도시 삭제 (pop)</button>

    <div class="monitor auto">
      <h3>1) cityList 변수명 쌩으로 감시</h3>
      <p>{{ logAuto }}</p>
    </div>

    <div class="monitor target">
      <h3>2) () => [...cityList] 복사본 감시</h3>
      <p>{{ logCopy }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

// reactive로 선언한 빈 배열
const cityList = reactive(['서울', '수원'])

const logAuto = ref('대기 중...')
const logCopy = ref('대기 중...')

// 1) 변수명 그대로 넣기 (배열 추가/삭제 자동 추적)
watch(cityList, (newArr, oldArr) => {
  // newArr.length와 oldArr.length가 똑같이 늘어난 상태로 출력됩니다.
  logAuto.value = `[자동 감시] 배열 변동 발생 옛날길이인척하는:${oldArr.length} / 현재길이:${newArr.length}`
})

// 2) 화살표 함수로 스냅샷(복사본)을 만들어 감시
watch(
  () => [...cityList],
  (newArr, oldArr) => {
    // 구조 분해 복사본을 감시
    logCopy.value = `[스냅샷 감시] 진짜 과거 길이:${oldArr.length} (데이터: ${oldArr}) -> 바뀐 길이:${newArr.length}`
  },
)
</script>

<style lang="scss" scoped></style>
