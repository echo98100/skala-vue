<template>
  <div class="favorites">
    <header>
      <h1>⭐ 즐겨찾기 도시</h1>
      <p>
        자주 확인하는 도시만 모아둔 페이지입니다. (본인 추가 View / '/favorites' 라우팅)
        <br />
        현재 즐겨찾기 {{ favoriteStore.favoriteCount }}곳
      </p>
    </header>

    <BaseDashboardCard title="내가 즐겨찾는 도시">
      <template v-if="favoriteCities.length">
        <WeatherCard
          v-for="city in favoriteCities"
          :key="city.id"
          :city="city"
          :selected="selectedName === city.name"
          @select-card="(c) => (selectedName = c.name)"
          @click-detail="goToDetail"
        />
      </template>
      <div class="empty" v-else>
        즐겨찾는 도시가 없습니다. 홈 화면 카드의 ☆ 버튼을 눌러 추가해보세요.
      </div>
    </BaseDashboardCard>

    <RouterLink to="/" class="home-link">← 메인 대시보드로 돌아가기</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import BaseDashboardCard from '../components/exercise/day3_2/BaseDashboardCard.vue'
import WeatherCard from '../components/exercise/day3_2/WeatherCard.vue'
import { weatherMockList } from '../data/weatherData'
import { useFavoriteStore } from '../stores/favoriteStore'

const router = useRouter()

// 4. 본인만의 추가 Store 활용: 로컬 ref 대신 Pinia favoriteStore를 그대로 사용
const favoriteStore = useFavoriteStore()
const selectedName = ref('')

const favoriteCities = computed(() =>
  weatherMockList.filter((city) => favoriteStore.isFavorite(city.id)),
)

const goToDetail = (city) => {
  router.push(`/weather/${city.id}`)
}
</script>

<style scoped>
.favorites {
  max-width: 760px;
  margin: 0 auto;
}

header {
  margin-bottom: 20px;
}

header h1 {
  margin: 0 0 4px;
  font-size: 24px;
}

header p {
  margin: 0;
  font-size: 13px;
  color: var(--sub, #5b6b82);
}

.empty {
  text-align: center;
  padding: 20px 0;
  color: var(--sub, #5b6b82);
  font-size: 14px;
}

.home-link {
  display: inline-block;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  color: var(--accent, #2f5fae);
  text-decoration: none;
}

.home-link:hover {
  text-decoration: underline;
}
</style>
