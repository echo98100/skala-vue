<template>
  <div class="weather-detail">
    <button class="back-btn" @click="router.push('/')">← 메인 대시보드로 돌아가기</button>

    <div v-if="cityInfo" class="detail-card">
      <div class="detail-header">
        <div class="icon">{{ cityInfo.icon }}</div>
        <div>
          <h1>{{ cityInfo.name }}</h1>
          <p class="status">{{ cityInfo.status }} · 마지막 업데이트 {{ cityInfo.updatedAt }}</p>
        </div>
      </div>

      <div class="stat-grid">
        <div class="stat">
          <span class="label">현재 기온</span>
          <!-- 3. 단위 설정(configStore) 적용 -->
          <span class="value">
            {{ configStore.convertTemp(cityInfo.temp) }}{{ configStore.unitSymbol }}
          </span>
        </div>
        <div class="stat">
          <span class="label">습도</span>
          <span class="value">{{ cityInfo.humidity }}%</span>
        </div>
        <div class="stat">
          <span class="label">풍속</span>
          <span class="value">{{ cityInfo.windSpeed }} m/s</span>
        </div>
        <div class="stat">
          <span class="label">강수량</span>
          <span class="value">{{ cityInfo.precipitation }} mm</span>
        </div>
      </div>

      <!-- 임계값 판단은 원본(섭씨) 값 기준 -->
      <p class="temp-note" v-if="cityInfo.temp >= 25">🔥 현재 더운 편의 날씨입니다 (25도 이상)</p>
      <p class="temp-note" v-else>❄️ 현재 선선한 편의 날씨입니다 (25도 미만)</p>

      <button
        type="button"
        class="favorite-toggle"
        :class="{ active: favoriteStore.isFavorite(cityInfo.id) }"
        @click="favoriteStore.toggleFavorite(cityInfo.id)"
      >
        {{ favoriteStore.isFavorite(cityInfo.id) ? '★ 즐겨찾기 해제' : '☆ 즐겨찾기 추가' }}
      </button>
    </div>

    <div v-else class="not-found">
      <p>"{{ route.params.cityId }}"에 해당하는 도시 정보를 찾을 수 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { weatherMockList } from '../data/weatherData'
import { useConfigStore } from '../stores/configStore'
import { useFavoriteStore } from '../stores/favoriteStore'

const route = useRoute()
const router = useRouter()
const configStore = useConfigStore()
const favoriteStore = useFavoriteStore()

const cityInfo = ref(null)

onMounted(() => {
  cityInfo.value = weatherMockList.find((city) => city.id === route.params.cityId) || null
})
</script>

<style scoped>
.weather-detail {
  max-width: 620px;
  margin: 0 auto;
}

.back-btn {
  border: none;
  background: none;
  color: var(--accent, #2f5fae);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  margin-bottom: 18px;
}

.back-btn:hover {
  text-decoration: underline;
}

.detail-card {
  background: var(--card-bg, #fff);
  border: 1px solid var(--border, #d9e3f0);
  border-radius: 16px;
  padding: 28px;
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.icon {
  font-size: 44px;
  width: 68px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sky-1, #eef4fb);
  border-radius: 16px;
}

.detail-header h1 {
  margin: 0 0 4px;
  font-size: 24px;
}

.status {
  margin: 0;
  font-size: 13px;
  color: var(--sub, #5b6b82);
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 16px;
}

.stat {
  background: var(--sky-1, #eef4fb);
  border-radius: 12px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat .label {
  font-size: 12px;
  color: var(--sub, #5b6b82);
  font-weight: 700;
}

.stat .value {
  font-size: 20px;
  font-weight: 800;
  color: var(--ink, #1f2a3c);
}

.temp-note {
  margin: 0 0 16px;
  font-size: 13px;
  color: var(--sub, #5b6b82);
}

.favorite-toggle {
  border: 1px solid var(--border, #d9e3f0);
  background: #fff;
  color: var(--ink, #1f2a3c);
  font-size: 13px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
}

.favorite-toggle.active {
  background: #fff7dc;
  border-color: #e3c65c;
  color: #8a6d1a;
}

.not-found {
  background: var(--card-bg, #fff);
  border: 1px solid var(--border, #d9e3f0);
  border-radius: 16px;
  padding: 28px;
  text-align: center;
  color: var(--sub, #5b6b82);
}
</style>
