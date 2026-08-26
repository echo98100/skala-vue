<template>
  <div class="sort-control">
    <span>기온 순 정렬</span>
    <button class="sort-btn" @click="$emit('toggle-sort')">
      {{ sortLabel }}
    </button>
    <span class="avg-temp">평균 기온 : {{ averageTemp }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// props: 부모의 sortOrder, averageTemp(computed) 전달받음
const props = defineProps({
  sortOrder: {
    type: String,
    default: 'default',
  },
  averageTemp: {
    type: [Number, String],
    default: 0,
  },
})

// emits: 정렬 버튼 클릭 -> toggle-sort 이벤트로 부모에게 전달
defineEmits(['toggle-sort'])

const sortLabel = computed(() => {
  if (props.sortOrder === 'default') return '기본순'
  return props.sortOrder === 'asc' ? '오름차순' : '내림차순'
})
</script>

<style scoped>
.sort-control {
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
