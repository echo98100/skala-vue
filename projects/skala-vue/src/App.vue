<script setup>
import SampleOne from './components/practices/basic/SampleOne.vue'
import SampleTwo from './components/practices/basic/SampleTwo.vue'
import VueBind from './components/practices/basic/VueBind.vue'
import VueBindStyle from './components/practices/basic/VueBindStyle.vue'
import VueBindClass from './components/practices/basic/VueBindClass.vue'
import VueHtml from './components/practices/basic/VueHtml.vue'
import VueHtmlXSS from './components/practices/basic/VueHtmlXSS.vue'
import VueText from './components/practices/basic/VueText.vue'
import VueBindShorthand from './components/practices/basic/VueBindShorthand.vue'
import VueIf from './components/practices/basic/VueIf.vue'
import VueShow from './components/practices/basic/VueShow.vue'
import VueFor from './components/practices/basic/VueFor.vue'
import VuePre from './components/practices/basic/VuePre.vue'
import VueOnce from './components/practices/basic/VueOnce.vue'
import VueCloak from './components/practices/basic/VueCloak.vue'
import VueMemo from './components/practices/basic/VueMemo.vue'
</script>

<template>
  <h1>Hello Skala-Vue</h1>

  <div style="padding: 20px">
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
    <hr />
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
</style>
