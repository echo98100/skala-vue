<template>
  <div>
    <h2>하위 컴포넌트(Child)</h2>
    <p>
      수신된 Props 데이터 : <strong>{{ parentData }}</strong>
    </p>
    <br />
    <button @click="sendNotification">상위 컴포넌트로 갱신 요청(Emit)</button>
  </div>
</template>

<script setup>
// props로 주입받을 데이터의 자료형 및 필수 여부 정의
defineProps({
  parentData: {
    type: String,
    required: true,
  },
})

// 상위 컴포넌트로 송신할 커스텀 이벤트 등록
const emit = defineEmits(['update-request'])

// 내부 이벤트 발생 시 페이로드를 실어 상위로 이벤트 디스패치
const sendNotification = () => {
  const payload = 'Child에서 가공한 새로운 데이터'
  emit('update-request', payload)
}
</script>

<style scoped>
.child-container {
  border: 2px dashed #3498db;
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
}
</style>
