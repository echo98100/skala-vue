<template>
    <div>
        <h2>Counter Store 활용 실습</h2>

        <p>
        원본 카운트 데이터(state): <strong>{{ counterStore.count }}</strong>
        </p>
        <p>
        2배 연산 데이터(getters): <span>{{ counterStore.doubleCount }}</span>
        </p>

        <button @click="counterStore.increment">숫자 1 증가 (actions)</button>
  
    </div>
</template>

<script setup>
// 정의한 카운터 스토어 플러그인 import
import { useCounterStore } from '@/stores/counter';

// 스토어 인스턴스 가동 (전역 저장소)
const counterStore = useCounterStore()
</script>

