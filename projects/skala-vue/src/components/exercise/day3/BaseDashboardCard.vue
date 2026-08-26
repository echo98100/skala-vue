<template>
  <section class="dashboard-card">
    <h3 v-if="title" class="card-title">{{ title }}</h3>
    <div class="card-body">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.dashboard-card {
  max-width: 760px;
  margin: 0 auto 20px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px 18px;
}

.card-title {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  color: var(--sub);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
