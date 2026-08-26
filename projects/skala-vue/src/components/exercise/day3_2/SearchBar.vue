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
defineProps({
  searchQuery: {
    type: String,
    default: '',
  },
})

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
  border-bottom: 2px solid var(--sky-2, #dbe9f8);
  transition: border-color 0.15s ease;
  background: transparent;
  color: var(--ink, #1f2a3c);
}

.search-bar input:focus {
  border-color: var(--accent, #2f5fae);
}

.search-echo {
  font-size: 13px;
  color: var(--accent, #2f5fae);
  min-height: 18px;
}
</style>
