<template>
  <div class="weather-mockup">
    <header>
      <h1>과제 3: 컴포넌트 분리</h1>
    </header>

    <!-- 검색 박스: BaseDashboardCard + SearchBar(slot) -->
    <BaseDashboardCard title="도시 검색">
      <SearchBar :search-query="searchText" @update-query="searchText = $event" />
    </BaseDashboardCard>

    <!-- 정렬/통계 박스: BaseDashboardCard + SortControl(slot) -->
    <BaseDashboardCard title="정렬 및 통계">
      <SortControl
        :sort-order="sortOrder"
        :average-temp="averageTemp"
        @toggle-sort="toggleSortOrder"
      />
    </BaseDashboardCard>

    <!-- 리스트 박스: BaseDashboardCard + WeatherCard 여러 개(slot) -->
    <BaseDashboardCard title="지역별 날씨 현황">
      <template v-if="sortedWeatherList.length">
        <WeatherCard
          v-for="city in sortedWeatherList"
          :key="city.id"
          :city="city"
          :selected="selectedCityInfo && selectedCityInfo.name === city.name"
          @select-card="selectCity"
          @click-detail="showDetail"
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
import BaseDashboardCard from './BaseDashboardCard.vue'
import SearchBar from './SearchBar.vue'
import SortControl from './SortControl.vue'
import WeatherCard from './WeatherCard.vue'

// 1. 모든 반응형 데이터는 WeatherParent가 유지
const weatherList = ref([
  { id: 'city_01', name: '서울', temp: 28, status: '맑음', humidity: 42, icon: '☀️' },
  { id: 'city_02', name: '수원', temp: 24, status: '비', humidity: 78, icon: '🌧️' },
  { id: 'city_03', name: '부산', temp: 26, status: '구름', humidity: 55, icon: '⛅' },
  { id: 'city_04', name: '대구', temp: 22, status: '안개', humidity: 88, icon: '🌫️' },
])

const searchText = ref('')
const selectedCityInfo = ref(null)
const statusMessage = ref('도시 카드를 눌러보세요.')
const sortOrder = ref('default')

// computed로 이름에 포함된 항목만 필터링
const filteredWeatherList = computed(() =>
  weatherList.value.filter((city) => city.name.includes(searchText.value.trim())),
)

// 필터링된 리스트를 기온 기준으로 정렬
const sortedWeatherList = computed(() => {
  const list = [...filteredWeatherList.value]
  if (sortOrder.value === 'asc') return list.sort((a, b) => a.temp - b.temp)
  if (sortOrder.value === 'desc') return list.sort((a, b) => b.temp - a.temp)
  return list
})

// 필터링된 리스트의 평균 기온
const averageTemp = computed(() => {
  if (!filteredWeatherList.value.length) return 0
  const sum = filteredWeatherList.value.reduce((acc, city) => acc + city.temp, 0)
  return Math.round((sum / filteredWeatherList.value.length) * 10) / 10
})

// watch : selectedCityInfo 감시 -> 상태바 문구를 갱신하고, 콘솔 로그 출력
watch(selectedCityInfo, (newVal, oldVal) => {
  if (newVal) {
    statusMessage.value = `${newVal.name}이 선택되었습니다.`
  }
  console.log(`[watch] 선택된 도시 정보 변경 : ${oldVal?.name} => ${newVal?.name}`)
})

// watchEffect: searchText 추적하고 콘솔 로그 출력
watchEffect(() => {
  console.log(`[watchEffect] searchText: ${searchText.value}`)
})

// sortOrder 감시하는 watch
watch(sortOrder, (newVal) => {
  console.log(`[watch] sortOrder 변경: ${newVal}`)
})

// SearchBar가 emit한 update-query를 받아 searchText 갱신 (템플릿에서 인라인 처리)

// WeatherCard가 emit한 select-card를 받아 selectedCityInfo 갱신
const selectCity = (city) => {
  selectedCityInfo.value = city
}

// SortControl이 emit한 toggle-sort를 받아 정렬 상태 순환
const toggleSortOrder = () => {
  if (sortOrder.value === 'default') sortOrder.value = 'asc'
  else if (sortOrder.value === 'asc') sortOrder.value = 'desc'
  else sortOrder.value = 'default'
}

// WeatherCard가 emit한 click-detail을 받아 알림 표시
const showDetail = (cityName, status) => {
  window.alert(`${cityName}의 현재 날씨는 [${status}] 상태입니다.`)
}
</script>

<style scoped>
.weather-mockup {
  --sky-1: #eef4fb;
  --sky-2: #dbe9f8;
  --ink: #1f2a3c;
  --sub: #5b6b82;
  --hot: #e0622b;
  --hot-bg: #fdece1;
  --cold: #2b7fe0;
  --cold-bg: #e6f0fd;
  --card-bg: #ffffff;
  --border: #d9e3f0;
  --accent: #2f5fae;

  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
  color: var(--ink);
  background: linear-gradient(160deg, var(--sky-1), var(--sky-2) 70%);
  padding: 40px 20px 90px;
  min-height: 100vh;
  box-sizing: border-box;
}

.weather-mockup * {
  box-sizing: border-box;
}

header {
  max-width: 760px;
  margin: 0 auto 28px;
}

header h1 {
  margin: 6px 0 4px;
  font-size: 28px;
  font-weight: 800;
}

.empty {
  text-align: center;
  padding: 20px 0;
  color: var(--sub);
  font-size: 14px;
}

.status-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ink);
  color: #fff;
  font-size: 13px;
  padding: 12px 20px;
  text-align: center;
  letter-spacing: 0.01em;
}
</style>
