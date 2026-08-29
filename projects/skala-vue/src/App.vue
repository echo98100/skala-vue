<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import VueBind from './components/practices/basic/day1/VueBind.vue'
import VueBindStyle from './components/practices/basic/day1/VueBindStyle.vue'
import VueBindClass from './components/practices/basic/day1/VueBindClass.vue'
import VueHtml from './components/practices/basic/day1/VueHtml.vue'
import VueHtmlXSS from './components/practices/basic/day1/VueHtmlXSS.vue'
import VueText from './components/practices/basic/day1/VueText.vue'
import VueBindShorthand from './components/practices/basic/day1/VueBindShorthand.vue'
import VueIf from './components/practices/basic/day1/VueIf.vue'
import VueShow from './components/practices/basic/day1/VueShow.vue'
import VueFor from './components/practices/basic/day1/VueFor.vue'
import VuePre from './components/practices/basic/day1/VuePre.vue'
import VueOnce from './components/practices/basic/day1/VueOnce.vue'
import VueCloak from './components/practices/basic/day1/VueCloak.vue'
import VueMemo from './components/practices/basic/day1/VueMemo.vue'
import SampleOne from './components/practices/basic/SampleOne.vue'
import SampleTwo from './components/practices/basic/SampleTwo.vue'
import EventBasic from './components/practices/basic/day2/EventBasic.vue'
import EventObject from './components/practices/basic/day2/EventObject.vue'
import EventModifier from './components/practices/basic/day2/EventModifier.vue'
import ModelBasic from './components/practices/basic/day2/ModelBasic.vue'
import ModelForm from './components/practices/basic/day2/ModelForm.vue'
import ModelModifier from './components/practices/basic/day2/ModelModifier.vue'
import StyleScoped from './components/practices/basic/day2/StyleScoped.vue'
import WeatherMockup from './components/exercise/WeatherMockup.vue'
import ReactiveRef from './components/practices/basic/day2/ReactiveRef.vue'
import ReactiveReactive from './components/practices/basic/day2/ReactiveReactive.vue'
import ComputedBasic from './components/practices/basic/day2/ComputedBasic.vue'
import WatchersBasic from './components/practices/basic/day2/WatchersBasic.vue'
import WatchersMulti from './components/practices/basic/day2/WatchersMulti.vue'
import WatchersDeep from './components/practices/basic/day2/WatchersDeep.vue'
import WatchersReactive from './components/practices/basic/day2/WatchersReactive.vue'
import WatchersRefArray from './components/practices/basic/day2/WatchersRefArray.vue'
import WatchersReactiveArray from './components/practices/basic/day2/WatchersReactiveArray.vue'
import WatchersWatchEffect from './components/practices/basic/day2/WatchersWatchEffect.vue'
import WeatherComposition from './components/exercise/WeatherComposition.vue'
import LifeCycleParent from './components/practices/basic/day3/LifeCycleParent.vue'
import PropsEmitsParent from './components/practices/basic/day3/PropsEmitsParent.vue'
import SlotDefaultParent from './components/practices/basic/day3/SlotDefaultParent.vue'
import SlotNamedParent from './components/practices/basic/day3/SlotNamedParent.vue'
import SlotScopedParent from './components/practices/basic/day3/SlotScopedParent.vue'
import WeatherParent from './components/exercise/day3/WeatherParent.vue'
import StoreCounter from './components/practices/basic/day4/StoreCounter.vue'
import AxiosWeather from './components/practices/basic/day4/AxiosWeather.vue'
import UnitToggler from './components/exercise/UnitToggler.vue'

const activeTab = ref('day1')
</script>

<template>
  <div class="app-shell">
    <header class="app-shell-header">
      <h1 class="app-title">Hello Skala-Vue</h1>

      <!-- 탭: 커리큘럼 성격이 다른 두 갈래(학습 진행 / 과제 제출)를 시각적으로 구분 -->
      <div class="tab-groups">
        <div class="tab-group">
          <span class="tab-group-label">실습</span>
          <div class="tab-row">
            <button
              class="tab-btn"
              :class="{ active: activeTab === 'day1' }"
              @click="activeTab = 'day1'"
            >
              Day1
            </button>
            <button
              class="tab-btn"
              :class="{ active: activeTab === 'day2' }"
              @click="activeTab = 'day2'"
            >
              Day2
            </button>
            <button
              class="tab-btn"
              :class="{ active: activeTab === 'day3' }"
              @click="activeTab = 'day3'"
            >
              Day3
            </button>
            <button
              class="tab-btn"
              :class="{ active: activeTab === 'day4' }"
              @click="activeTab = 'day4'"
            >
              Day4
            </button>
          </div>
        </div>

        <div class="tab-group">
          <span class="tab-group-label tab-group-label--accent">과제</span>
          <div class="tab-row">
            <button
              class="tab-btn tab-btn--accent"
              :class="{ active: activeTab === 'exercise1' }"
              @click="activeTab = 'exercise1'"
            >
              과제1
            </button>
            <button
              class="tab-btn tab-btn--accent"
              :class="{ active: activeTab === 'exercise2' }"
              @click="activeTab = 'exercise2'"
            >
              과제2
            </button>
            <button
              class="tab-btn tab-btn--accent"
              :class="{ active: activeTab === 'exercise3' }"
              @click="activeTab = 'exercise3'"
            >
              과제3
            </button>
            <button
              class="tab-btn tab-btn--accent"
              :class="{ active: activeTab === 'exercise4' }"
              @click="activeTab = 'exercise4'"
            >
              과제4
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="app-shell-main">
      <!-- Day1 -->
      <div class="day-panel" v-if="activeTab === 'day1'">
        <h1>Day1</h1>
        <hr />
        <h1>1. 학습환경 구성</h1>
        <hr />
        <SampleOne />
        <SampleTwo />
        <h1>2. Vue Directive</h1>
        <hr />
        <VueHtml />
        <VueHtmlXSS />
        <VueText />
        <VueBind />
        <VueBindClass />
        <VueBindStyle />
        <VueBindShorthand />
        <VueIf />
        <VueShow />
        <VueFor />
        <VuePre />
        <VueOnce />
        <VueCloak />
        <VueMemo />
      </div>

      <!-- Day2 -->
      <div class="day-panel" v-if="activeTab === 'day2'">
        <h1>Day2</h1>
        <hr />
        <h1>3. Vue Event Handling</h1>
        <hr />
        <EventBasic />
        <EventObject />
        <EventModifier />
        <h1>4. Vue Form Handling</h1>
        <hr />
        <ModelBasic />
        <ModelForm />
        <ModelModifier />
        <h1>5. Vue Style Handling</h1>
        <hr />
        <StyleScoped />
        <h1>6. Reactive State</h1>
        <hr />
        <ReactiveRef />
        <ReactiveReactive />
        <h1>7. Computed & Watchers</h1>
        <hr />
        <ComputedBasic />
        <WatchersBasic />
        <WatchersMulti />
        <WatchersDeep />
        <WatchersReactive />
        <WatchersRefArray />
        <WatchersReactiveArray />
        <WatchersWatchEffect />
      </div>

      <!-- Day3 -->
      <div class="day-panel" v-if="activeTab === 'day3'">
        <h1>Day3</h1>
        <hr />
        <h1>8. Component Lifecycle</h1>
        <hr />
        <LifeCycleParent />
        <h1>9. Props & Emits</h1>
        <hr />
        <PropsEmitsParent />
        <h1>10. Component Slot</h1>
        <hr />
        <SlotDefaultParent />
        <SlotNamedParent />
        <SlotScopedParent />
      </div>

      <!-- Day4 -->
      <div class="day-panel" v-if="activeTab === 'day4'">
        <h1>Day4</h1>
        <hr />
        <h1>11. Store</h1>
        <hr />
        <StoreCounter />
        <h1>12. Axios</h1>
        <hr />
        <AxiosWeather />
      </div>

      <!-- 과제 1 Mockup -->
      <div class="exercise-panel" v-if="activeTab === 'exercise1'">
        <WeatherMockup />
      </div>

      <!-- 과제 2 Composition-->
      <div class="exercise-panel" v-if="activeTab === 'exercise2'">
        <WeatherComposition />
      </div>

      <!-- 과제 3 Component -->
      <div class="exercise-panel" v-if="activeTab === 'exercise3'">
        <WeatherParent />
      </div>

      <!-- 과제 4, 5 Router + Pinia -->
      <div class="exercise-panel exercise-panel--router" v-if="activeTab === 'exercise4'">
        <div class="weather-router-shell">
          <!-- 네비게이션 영역 -->
          <div class="router-topbar">
            <nav class="router-nav">
              <RouterLink to="/" class="router-nav-link">홈</RouterLink>
              <RouterLink to="/favorites" class="router-nav-link">즐겨찾기</RouterLink>
              <RouterLink to="/about" class="router-nav-link">소개</RouterLink>
            </nav>

            <UnitToggler />
          </div>

          <!-- 콘텐츠 영역 -->
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>

<style>
html,
body {
  display: block !important;
  place-items: unset !important;
  margin: 0;
  padding: 0;
  width: 100%;
}

#app {
  display: block !important;
  max-width: none;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: initial;
}
</style>

<style scoped>
/* ------------------------------------------------------------------ */
/* 디자인 토큰                                                          */
/* ------------------------------------------------------------------ */
.app-shell {
  --paper: #f5f7fb;
  --paper-line: #dfe6f2;
  --ink: #1b2436;
  --sub: #5b6b82;
  --accent: #2f5fae;
  --accent-soft: #e7eefc;
  --accent-line: #c3d4f2;
  --highlight: #e08a2b;
  --highlight-soft: #fdf0e0;
  --card-bg: #ffffff;

  width: 100%;
  min-height: 100vh;
  background: var(--paper);
  color: var(--ink);
  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
}

/* ------------------------------------------------------------------ */
/* 헤더 / 탭 바                                                         */
/* ------------------------------------------------------------------ */
.app-shell-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(245, 247, 251, 0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--paper-line);
  padding: 24px 48px 18px;
  width: 100%;
  box-sizing: border-box;
}

.app-title {
  margin: 0 0 18px;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.tab-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}

.tab-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tab-group-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--sub);
}

.tab-group-label--accent {
  color: var(--highlight);
}

.tab-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--paper-line);
  background: #fff;
  color: var(--sub);
  font-size: 13px;
  font-weight: 700;
  padding: 7px 16px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.12s ease, color 0.12s ease, border-color 0.12s ease;
}

.tab-btn:hover {
  background: var(--accent-soft);
  border-color: var(--accent-line);
  color: var(--accent);
}

.tab-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.tab-btn--accent:hover {
  background: var(--highlight-soft);
  border-color: #f0cfa0;
  color: var(--highlight);
}

.tab-btn--accent.active {
  background: var(--highlight);
  border-color: var(--highlight);
  color: #fff;
}

/* ------------------------------------------------------------------ */
/* 본문 레이아웃                                                        */
/* ------------------------------------------------------------------ */
.app-shell-main {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 28px 48px 80px;
  box-sizing: border-box;
}

/* Day 패널: 실습 컴포넌트를 감싸는 노트북 카드 */
.day-panel {
  background: var(--card-bg);
  border: 1px solid var(--paper-line);
  border-radius: 16px;
  padding: 28px 32px 36px;
}

/* 이 패널의 h1은 전부 "제목"이거나 "회차 구분선"인데,
   맨 앞 h1(Day1 / 11.Store 등의 대제목)만 크게, 나머지는 회차 칩 스타일로 구분한다. */
.day-panel h1 {
  margin: 28px 0 4px;
  font-size: 14px;
  font-weight: 800;
  color: var(--accent);
  background: var(--accent-soft);
  display: inline-block;
  padding: 6px 14px;
  border-radius: 8px;
}

.day-panel > h1:first-of-type {
  margin-top: 0;
  font-size: 22px;
  font-weight: 800;
  color: var(--ink);
  background: none;
  padding: 0;
  border-radius: 0;
}

.day-panel hr {
  margin: 10px 0 20px;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, var(--paper-line), transparent 80%);
}

/* 실습 컴포넌트끼리 살짝 숨 쉴 공간 */
.day-panel > * + * {
  margin-top: 4px;
}

/* 과제 패널: 과제1~3은 자체 스타일을 가진 컴포넌트를 그대로 담는 얇은 래퍼,
   과제4(Router+Pinia)는 이미 자체 카드 UI가 있어 추가 여백만 부여 */
.exercise-panel {
  display: flex;
  justify-content: center;
}

.exercise-panel--router {
  display: block;
}

@media (max-width: 640px) {
  .app-shell-header {
    padding: 20px 18px 16px;
  }

  .app-shell-main {
    padding: 20px 16px 60px;
  }

  .day-panel {
    padding: 20px 18px 28px;
  }

  .tab-groups {
    gap: 16px;
  }
}

/* ------------------------------------------------------------------ */
/* 과제4(Router+Pinia) 영역: 기존 스타일 유지                            */
/* ------------------------------------------------------------------ */
.weather-router-shell {
  --sky-1: #eef4fb;
  --sky-2: #dbe9f8;
  --card-bg: #ffffff;
  --border: #d9e3f0;

  max-width: 800px;
  margin: 0 auto;
  padding: 24px 20px 60px;
  border-radius: 20px;
  background: linear-gradient(160deg, var(--sky-1), var(--sky-2) 70%);
}

.router-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.router-nav {
  display: flex;
  gap: 6px;
}

.router-nav-link {
  font-size: 13px;
  font-weight: 700;
  color: var(--sub);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid var(--border);
  transition:
    background 0.12s ease,
    color 0.12s ease;
}

.router-nav-link:hover {
  background: var(--sky-1);
  color: var(--accent);
}

.router-nav-link.router-link-exact-active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
</style>