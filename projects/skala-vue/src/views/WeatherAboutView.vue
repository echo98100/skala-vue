<template>
  <div class="about">
    <h1>Weather Router 소개</h1>
    <p>
      Weather Router는 Vue Router 학습을 위해 만든 미니 날씨 대시보드입니다. 메인 화면에서 도시를
      검색하고, 카드를 눌러 상세 기상관측 페이지로 이동해볼 수 있습니다.
    </p>

    <ul class="feature-list">
      <li>🔍 도시 이름으로 실시간 검색 (컴포넌트 props / emit 연습)</li>
      <li>🌡️ 기온 기준 정렬 및 평균 기온 계산 (computed 연습)</li>
      <li>🧭 카드의 [상세보기] → Programmatic Navigation으로 상세 페이지 이동</li>
      <li>🚧 정의되지 않은 경로 접근 시 Catch-all Route로 안내</li>
    </ul>

    <RouterLink to="/" class="home-btn">메인 대시보드로 돌아가기</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about {
  max-width: 620px;
  margin: 0 auto;
  background: var(--card-bg, #fff);
  border: 1px solid var(--border, #d9e3f0);
  border-radius: 16px;
  padding: 28px;
}

.about h1 {
  margin: 0 0 12px;
  font-size: 24px;
}

.about p {
  margin: 0 0 18px;
  color: var(--sub, #5b6b82);
  line-height: 1.6;
  font-size: 14px;
}

.feature-list {
  margin: 0 0 24px;
  padding-left: 18px;
  color: var(--ink, #1f2a3c);
  font-size: 14px;
  line-height: 1.9;
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
