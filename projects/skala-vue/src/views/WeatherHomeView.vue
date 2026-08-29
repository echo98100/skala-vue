<template>
  <div class="weather-home">
    <header>
      <h1>지역별 날씨 대시보드</h1>
      <p>도시 카드의 [상세보기]를 누르면 상세 페이지로 이동합니다.</p>
    </header>

    <BaseDashboardCard title="도시 검색">
      <SearchBar
        :search-query="searchText"
        @update-query="searchText = $event"
      />
    </BaseDashboardCard>

    <BaseDashboardCard title="정렬 및 통계">
      <div class="sort-control">
        <span>기온 순 정렬</span>
        <button class="sort-btn" @click="toggleSortOrder">{{ sortLabel }}</button>
        <!-- 3. 단위 설정(configStore) 적용: 평균 기온도 현재 단위로 변환해서 표시 -->
        <span class="avg-temp">
          평균 기온 : {{ configStore.convertTemp(averageTemp) }}{{ configStore.unitSymbol }}
        </span>
      </div>
    </BaseDashboardCard>

    <BaseDashboardCard title="지역별 날씨 현황">
      <template v-if="sortedWeatherList.length">
        <WeatherCard
          v-for="city in sortedWeatherList"
          :key="city.id"
          :city="city"
          :selected="selectedCityInfo && selectedCityInfo.name === city.name"
          @select-card="selectCity"
          @click-detail="goToDetail"
        />
      </template>
      <div class="empty" v-else>"{{ searchText }}" 검색 결과가 없습니다.</div>
    </BaseDashboardCard>

    <div class="status-bar">
      {{ statusMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import BaseDashboardCard from '../components/exercise/day3_2/BaseDashboardCard.vue'
import SearchBar from '../components/exercise/day3_2/SearchBar.vue'
import WeatherCard from '../components/exercise/day3_2/WeatherCard.vue'
import { weatherMockList } from '../data/weatherData'
import { useConfigStore } from '../stores/configStore'

const router = useRouter()
const configStore = useConfigStore()

const weatherList = ref(weatherMockList)
const searchText = ref('')
const selectedCityInfo = ref(null)
const statusMessage = ref('도시 카드를 눌러보세요.')
const sortOrder = ref('default')

// 검색/정렬/평균은 항상 원본(섭씨) 값 기준으로 계산하고,
// 화면 표시 시점에만 configStore.convertTemp()로 단위를 바꿔준다.
const filteredWeatherList = computed(() =>
  weatherList.value.filter((city) => city.name.includes(searchText.value.trim())),
)

const sortedWeatherList = computed(() => {
  const list = [...filteredWeatherList.value]
  if (sortOrder.value === 'asc') return list.sort((a, b) => a.temp - b.temp)
  if (sortOrder.value === 'desc') return list.sort((a, b) => b.temp - a.temp)
  return list
})

const averageTemp = computed(() => {
  if (!filteredWeatherList.value.length) return 0
  const sum = filteredWeatherList.value.reduce((acc, city) => acc + city.temp, 0)
  return Math.round((sum / filteredWeatherList.value.length) * 10) / 10
})

const sortLabel = computed(() => {
  if (sortOrder.value === 'default') return '기본순'
  return sortOrder.value === 'asc' ? '오름차순' : '내림차순'
})

watch(selectedCityInfo, (newVal, oldVal) => {
  if (newVal) {
    statusMessage.value = `${newVal.name}이 선택되었습니다.`
  }
  console.log(`[watch] 선택된 도시 정보 변경 : ${oldVal?.name} => ${newVal?.name}`)
})

watchEffect(() => {
  console.log(`[watchEffect] searchText: ${searchText.value}`)
})

watch(sortOrder, (newVal) => {
  console.log(`[watch] sortOrder 변경: ${newVal}`)
})

const selectCity = (city) => {
  selectedCityInfo.value = city
}

const toggleSortOrder = () => {
  if (sortOrder.value === 'default') sortOrder.value = 'asc'
  else if (sortOrder.value === 'asc') sortOrder.value = 'desc'
  else sortOrder.value = 'default'
}

const goToDetail = (city) => {
  router.push(`/weather/${city.id}`)
}
</script>

<style scoped>
.weather-home {
  max-width: 760px;
  margin: 0 auto;
}

header {
  margin-bottom: 20px;
}

header h1 {
  margin: 0 0 4px;
  font-size: 26px;
  font-weight: 800;
}

header p {
  margin: 0;
  font-size: 13px;
  color: var(--sub, #5b6b82);
}

.sort-control {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--sub, #5b6b82);
}

.sort-btn {
  border: 1px solid var(--border, #d9e3f0);
  background: var(--card-bg, #fff);
  color: var(--accent, #2f5fae);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  cursor: pointer;
}

.sort-btn:hover {
  background: var(--sky-1, #eef4fb);
}

.avg-temp {
  margin-left: auto;
  font-weight: 700;
  color: var(--ink, #1f2a3c);
}

.empty {
  text-align: center;
  padding: 20px 0;
  color: var(--sub, #5b6b82);
  font-size: 14px;
}

.status-bar {
  margin-top: 12px;
  background: var(--ink, #1f2a3c);
  color: #fff;
  font-size: 13px;
  padding: 12px 20px;
  text-align: center;
  border-radius: 12px;
}
</style>
