<template>
  <div class="search-bar">
    <input
      id="citySearch"
      type="text"
      placeholder="검색할 도시 이름 입력"
      :value="searchQuery"
      @input="$emit('update-query', $event.target.value)"
    />
    <div class="search-echo" v-if="searchQuery">
      검색 중인 도시: <strong>{{ searchQuery }}</strong>
    </div>
  </div>
</template>

<script setup>
// props: 부모(WeatherParent)의 searchText 반응형 데이터를 전달받음
defineProps({
  searchQuery: {
    type: String,
    default: '',
  },
})

// emits: 입력값이 바뀔 때마다 update-query 이벤트로 부모에게 검색어 전달
defineEmits(['update-query'])
</script>

<style scoped>
.search-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-bar input {
  border: none;
  outline: none;
  font-size: 16px;
  padding: 6px 2px;
  border-bottom: 2px solid var(--sky-2);
  transition: border-color 0.15s ease;
  background: transparent;
  color: var(--ink);
}

.search-bar input:focus {
  border-color: var(--accent);
}

.search-echo {
  font-size: 13px;
  color: var(--accent);
  min-height: 18px;
}
</style>
