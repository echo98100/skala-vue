<template>
  <div class="unit-toggler">
    <span class="unit-label">단위</span>
    <button
      type="button"
      class="unit-btn"
      :class="{ active: !configStore.isFahrenheit }"
      @click="configStore.setUnit('celsius')"
    >
      °C
    </button>
    <button
      type="button"
      class="unit-btn"
      :class="{ active: configStore.isFahrenheit }"
      @click="configStore.setUnit('fahrenheit')"
    >
      °F
    </button>
  </div>
</template>

<script setup>
import { useConfigStore } from '@/stores/configStore'; 

const configStore = useConfigStore()
</script>

<style scoped>
.unit-toggler {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid var(--border, #d9e3f0);
  border-radius: 999px;
  padding: 4px 6px 4px 12px;
}

.unit-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--sub, #5b6b82);
}

.unit-btn {
  border: none;
  background: transparent;
  color: var(--sub, #5b6b82);
  font-size: 12px;
  font-weight: 800;
  padding: 5px 12px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.12s ease, color 0.12s ease;
}

.unit-btn:hover {
  background: var(--sky-1, #eef4fb);
}

.unit-btn.active {
  background: var(--accent, #2f5fae);
  color: #fff;
}
</style>
