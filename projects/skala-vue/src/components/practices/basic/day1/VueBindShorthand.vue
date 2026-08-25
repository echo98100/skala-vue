<template>
  <div class="practice-section">
    <h2>v-bind 단축문법</h2>
    <div :id>
      <img :src alt="Vue로고" style="width: 50px" />
    </div>
  </div>
</template>

<script setup>
const id = 'user-profile-card'
const src = 'https://vuejs.org/images/logo.png'
</script>
