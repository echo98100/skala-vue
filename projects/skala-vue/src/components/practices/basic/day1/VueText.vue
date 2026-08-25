<template>
  <div class="practice-section">
    <h2>v-text 학습</h2>
    <h3>1. 일반 보간법 {{}} 결과 :</h3>
    <p>출력 : {{ content }}</p>
    <br />

    <h3>2. v-text 결과 :</h3>
    <p v-text="content"></p>
  </div>
</template>

<script setup>
const content = '안녕하세요! <strong>Skala-Vue</String> 강의입니다.'
</script>
