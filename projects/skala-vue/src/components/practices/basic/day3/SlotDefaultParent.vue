<template>
  <div>
    <h2>Default Slot 레이아웃 주입 실습</h2>
    <SlotDefaultChild>
      <p>단순한 텍스트 문장을 주입</p>
    </SlotDefaultChild>
    <SlotDefaultChild>
      <h2 style="color: red">경고 상태</h2>
      <button>확인</button>
    </SlotDefaultChild>
    <SlotDefaultChild> </SlotDefaultChild>
  </div>
</template>

<script setup>
''
import SlotDefaultChild from './SlotDefaultChild.vue'
</script>
