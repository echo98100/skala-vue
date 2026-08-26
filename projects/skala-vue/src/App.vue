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

const activeTab = ref('day1')
</script>

<template>
  <h1>Hello Skala-Vue</h1>

  <div style="padding: 20px">
    <!-- 탭 -->
    <div class="tabs">
      <button :class="{ active: activeTab === 'day1' }" @click="activeTab = 'day1'">Day1</button>
      <button :class="{ active: activeTab === 'day2' }" @click="activeTab = 'day2'">Day2</button>
      <button :class="{ active: activeTab === 'day3' }" @click="activeTab = 'day3'">Day3</button>
      <button :class="{ active: activeTab === 'exercise1' }" @click="activeTab = 'exercise1'">
        과제1
      </button>
      <button :class="{ active: activeTab === 'exercise2' }" @click="activeTab = 'exercise2'">
        과제2
      </button>
      <button :class="{ active: activeTab === 'exercise3' }" @click="activeTab = 'exercise3'">
        과제3
      </button>
      <button :class="{ active: activeTab === 'exercise4' }" @click="activeTab = 'exercise4'">
        과제4
      </button>
    </div>

    <!-- Day1 -->
    <div v-if="activeTab === 'day1'">
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
    <div v-if="activeTab === 'day2'">
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
    <div v-if="activeTab === 'day3'">
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

    <!-- 과제 1-->
    <div v-if="activeTab === 'exercise1'">
      <WeatherMockup />
    </div>

    <!-- 과제 2-->
    <div v-if="activeTab === 'exercise2'">
      <WeatherComposition />
    </div>

    <!-- 과제 3-->
    <div v-if="activeTab === 'exercise3'">
      <WeatherParent />
    </div>

    <!-- 과제 4 Router 활용 -->
    <div v-if="activeTab === 'exercise4'">
      <div class="weather-router-shell">
        <!-- 네비게이션 영역 -->
        <nav class="router-nav">
          <RouterLink to="/" class="router-nav-link">홈</RouterLink>
          <RouterLink to="/favorites" class="router-nav-link">즐겨찾기</RouterLink>
          <RouterLink to="/about" class="router-nav-link">소개</RouterLink>
        </nav>

        <!-- 콘텐츠 영역 -->
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.weather-router-shell {
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

  max-width: 800px;
  margin: 0 auto;
  padding: 24px 20px 60px;
  border-radius: 20px;
  background: linear-gradient(160deg, var(--sky-1), var(--sky-2) 70%);
}

.router-nav {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
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
