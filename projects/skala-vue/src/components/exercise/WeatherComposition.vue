<template>
  <div class="weather-mockup">
    <header>
      <h1>과제 2: 날씨 Composition</h1>
    </header>

    <div class="search-box">
      <h3>도시 검색</h3>
      <input
        id="citySearch"
        type="text"
        placeholder="검색할 도시 이름 입력"
        :value="searchText"
        @input="searchText = $event.target.value"
      />
      <div class="search-echo" v-if="searchText">
        검색 중인 도시: <strong>{{ searchText }}</strong>
      </div>
    </div>

    <!-- 정렬 토글 추가(sortOrder) -->
    <div class="sort-box">
      <span>기온 순 정렬</span>
      <button class="sort-btn" @click="toggleSortOrder">
        {{ sortOrder === 'default' ? '기본순' : sortOrder === 'asc' ? '오름차순' : '내림차순' }}
      </button>
      <span class="avg-temp">평균 기온 : {{ averageTemp }}</span>
    </div>

    <!-- 검색 결과 -->
    <div class="card-grid" v-if="sortedWeatherList.length">
      <div
        v-for="city in sortedWeatherList"
        :key="city.id"
        class="weather-card"
        :class="{ 'is-selected': selectedCityInfo && selectedCityInfo.name === city.name }"
        @click="selectCity(city)"
      >
        <div class="card-left">
          <div class="icon">{{ city.icon }}</div>
          <div class="city-info">
            <h3>{{ city.name }}</h3>
            <div class="meta">{{ city.status }} · 습도 {{ city.humidity }}%</div>
          </div>
        </div>

        <div class="card-right">
          <div class="temp">{{ city.temp }}°</div>
          <span class="label hot" v-if="city.temp >= 25">🔥 더움 (25도 이상)</span>
          <span class="label cold" v-else>❄️ 선선함 (25도 미만)</span>
          <button class="detail-btn" @click.stop="showDetail(city.name, city.status)">
            상세보기
          </button>
        </div>
      </div>
    </div>

    <div class="empty" v-else>"{{ searchText }}" 검색 결과가 없습니다.</div>

    <div class="status-bar">
      {{ statusMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue'

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

// watch : selectedCityInfor 감시 -> 상태바 문구를 갱신하고, 콘솔 로그 출력
watch(selectedCityInfo, (newVal, oldVal) => {
  if (newVal) {
    statusMessage.value = `${newVal.name}이 선택되었습니다.`
  }
  console.log(`[watch] 선택된 도시 정보 변경 : ${oldVal} => ${newVal}`)
})

// watchEffect: searchText 추적하고 콘솔 로그 출력
watchEffect(() => {
  console.log(`[watchEffect] searchText: ${searchText.value}`)
})

// sortOrder 감시하는 watch
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

//알림 대행 함수
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

header .eyebrow {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
}

header h1 {
  margin: 6px 0 4px;
  font-size: 28px;
  font-weight: 800;
}

header p {
  margin: 0;
  color: var(--sub);
  font-size: 14px;
}

.search-box {
  max-width: 760px;
  margin: 24px auto;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-box label {
  font-size: 12px;
  font-weight: 700;
  color: var(--sub);
}

.search-box input {
  border: none;
  outline: none;
  font-size: 16px;
  padding: 6px 2px;
  border-bottom: 2px solid var(--sky-2);
  transition: border-color 0.15s ease;
  background: transparent;
  color: var(--ink);
}

.search-box input:focus {
  border-color: var(--accent);
}

.search-echo {
  font-size: 13px;
  color: var(--accent);
  min-height: 18px;
}

.card-grid {
  max-width: 760px;
  margin: 0 auto;
  display: grid;
  gap: 14px;
}

.weather-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease,
    border-color 0.12s ease;
}

.weather-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px -14px rgba(31, 42, 60, 0.35);
  border-color: var(--accent);
}

.weather-card.is-selected {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(47, 95, 174, 0.18);
}

.card-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.icon {
  font-size: 30px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sky-1);
  border-radius: 12px;
}

.city-info h3 {
  margin: 0 0 2px;
  font-size: 17px;
}

.city-info .meta {
  font-size: 12px;
  color: var(--sub);
}

.card-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.temp {
  font-size: 22px;
  font-weight: 800;
}

.label {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 999px;
  white-space: nowrap;
}

.label.hot {
  color: var(--hot);
  background: var(--hot-bg);
}

.label.cold {
  color: var(--cold);
  background: var(--cold-bg);
}

.detail-btn {
  border: 1px solid var(--border);
  background: #fff;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
}

.detail-btn:hover {
  background: var(--sky-1);
}

.empty {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;
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

.sort-box {
  max-width: 760px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--sub);
}

.sort-btn {
  border: 1px solid var(--border);
  background: var(--card-bg);
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;
  cursor: pointer;
}

.sort-btn:hover {
  background: var(--sky-1);
}

.avg-temp {
  margin-left: auto;
  font-weight: 700;
  color: var(--ink);
}
</style>
