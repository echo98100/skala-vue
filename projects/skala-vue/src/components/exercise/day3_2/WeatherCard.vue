<template>
  <div
    class="weather-card"
    :class="{ 'is-selected': selected }"
    @click="$emit('select-card', city)"
  >
    <div class="card-left">
      <div class="icon">{{ city.icon }}</div>
      <div class="city-info">
        <h3>{{ city.name }}</h3>
        <div class="meta">{{ city.status }} · 습도 {{ city.humidity }}%</div>
      </div>
    </div>

    <div class="card-right">
      <!-- 3. 단위 설정(configStore) 적용: 항상 섭씨로 저장된 city.temp를 현재 단위로 변환해서 표시 -->
      <div class="temp">{{ configStore.convertTemp(city.temp) }}{{ configStore.unitSymbol }}</div>
      <!-- 온도 라벨 임계값은 원본(섭씨) 값 기준으로 판단 -->
      <span class="label hot" v-if="city.temp >= 25">🔥 더움 (25도 이상)</span>
      <span class="label cold" v-else>❄️ 선선함 (25도 미만)</span>

      <div class="card-actions">
        <button
          type="button"
          class="favorite-btn"
          :class="{ active: favoriteStore.isFavorite(city.id) }"
          @click.stop="favoriteStore.toggleFavorite(city.id)"
        >
          {{ favoriteStore.isFavorite(city.id) ? '★' : '☆' }}
        </button>
        <button class="detail-btn" @click.stop="$emit('click-detail', city)">상세보기</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConfigStore } from '../../../stores/configStore'
import { useFavoriteStore } from '../../../stores/favoriteStore'

defineProps({
  city: {
    type: Object,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['select-card', 'click-detail'])

const configStore = useConfigStore()
const favoriteStore = useFavoriteStore()
</script>

<style scoped>
.weather-card {
  background: var(--card-bg, #fff);
  border: 1px solid var(--border, #d9e3f0);
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
  border-color: var(--accent, #2f5fae);
}

.weather-card.is-selected {
  border-color: var(--accent, #2f5fae);
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
  background: var(--sky-1, #eef4fb);
  border-radius: 12px;
}

.city-info h3 {
  margin: 0 0 2px;
  font-size: 17px;
}

.city-info .meta {
  font-size: 12px;
  color: var(--sub, #5b6b82);
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
  color: var(--hot, #e0622b);
  background: var(--hot-bg, #fdece1);
}

.label.cold {
  color: var(--cold, #2b7fe0);
  background: var(--cold-bg, #e6f0fd);
}

.card-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

.favorite-btn {
  border: 1px solid var(--border, #d9e3f0);
  background: #fff;
  color: #c9ab2c;
  font-size: 14px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  line-height: 1;
}

.favorite-btn.active {
  background: #fff7dc;
  border-color: #e3c65c;
}

.detail-btn {
  border: 1px solid var(--border, #d9e3f0);
  background: #fff;
  color: var(--accent, #2f5fae);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
}

.detail-btn:hover {
  background: var(--sky-1, #eef4fb);
}
</style>
