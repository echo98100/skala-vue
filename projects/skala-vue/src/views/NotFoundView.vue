<template>
  <div class="not-found">
    <div class="code">404</div>
    <h1>페이지를 찾을 수 없습니다</h1>
    <p>요청하신 경로 "{{ route.fullPath }}"는 존재하지 않습니다.</p>
    <RouterLink to="/" class="home-btn">메인 대시보드로 돌아가기</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.not-found {
  max-width: 480px;
  margin: 60px auto 0;
  text-align: center;
  background: var(--card-bg, #fff);
  border: 1px solid var(--border, #d9e3f0);
  border-radius: 16px;
  padding: 40px 28px;
}

.code {
  font-size: 48px;
  font-weight: 800;
  color: var(--accent, #2f5fae);
  margin-bottom: 8px;
}

.not-found h1 {
  margin: 0 0 8px;
  font-size: 20px;
}

.not-found p {
  margin: 0 0 20px;
  font-size: 13px;
  color: var(--sub, #5b6b82);
  word-break: break-all;
}

.home-btn {
  display: inline-block;
  background: var(--accent, #2f5fae);
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 999px;
}

.home-btn:hover {
  opacity: 0.9;
}
</style>
