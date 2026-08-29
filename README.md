# Vue 학습 정리

Vue 학습 내용과 과제를 한 프로젝트에 모아두었다.
App.vue 상단 탭으로 실습과 과제를 눌러서 넘겨볼 수 있게 구성했다.

## 사용 기술

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Vue Router 4
- Pinia
- Axios

## 실행 방법

```bash
npm install
npm run dev
```

빌드는 아래 명령어로 한다.

```bash
npm run build
```

배포는 Vercel로 진행했다.

## 구현 기능

### Day1 ~ Day4 (실습)

- Day1 : v-bind, v-if/v-show, v-for, v-once, v-cloak, v-pre, v-memo 등 기본 디렉티브를 하나씩 실습
- Day2 : 이벤트 핸들링(수식어 포함), v-model, ref/reactive 차이, computed, watch/watchEffect 여러 케이스
- Day3 : 컴포넌트 라이프사이클, props/emits, slot(기본/named/scoped)
- Day4 : Pinia로 카운터 스토어 구현, Axios로 실제 날씨 API 연동

### 과제1 - 날씨 카드 Mockup

- 배열 데이터를 v-for로 카드 렌더링 (key는 id로 바인딩)
- 기온 25도를 기준으로 v-if/v-else 조건부 라벨 처리 (더움/선선함)
- input에 :value / @input으로 직접 양방향 바인딩을 구현해 도시 검색 기능 처리
- 카드를 클릭하면 상태바에 "○○이 선택되었습니다" 표시
- 상세보기 버튼은 @click.stop으로 버블링을 막고 alert로 결과 표시

### 과제2 - Composition 적용

- 과제1 mockup을 computed / watch / watchEffect로 리팩토링
- 검색어로 필터링한 리스트를 computed로 관리 (filteredWeatherList)
- 선택된 도시가 바뀔 때마다 watch로 콘솔 로그를 남기고 상태바 갱신
- 검색어 입력마다 watchEffect로 값 추적
- 추가로 정렬 기능(sortOrder)과 평균 기온 computed를 하나 더 구현

### 과제3 - 컴포넌트 분리

기능은 그대로 유지한 채 컴포넌트만 분리했다.

- WeatherParent.vue : 전체 상태를 보유한 부모 컴포넌트
- BaseDashboardCard.vue : 검색박스/리스트박스 공통 껍데기, slot으로 내용을 받음
- SearchBar.vue : props로 검색어를 전달받고 update-query 이벤트를 emit
- WeatherCard.vue : props로 도시 객체를 전달받고 select-card / click-detail 이벤트를 emit
- 정렬 컨트롤(SortControl.vue)도 별도 컴포넌트로 분리해 추가

### 과제4 - Vue Router + Pinia

- router/index.js에 모든 라우트를 lazy loading으로 등록 (`() => import(...)`)
- 정의되지 않은 경로는 `/:pathMatch(.*)*`로 처리해 404 페이지로 연결
- 라우트 구성
  - `/` : WeatherHomeView (메인 대시보드)
  - `/about` : WeatherAboutView (서비스 소개)
  - `/weather/:cityId` : WeatherDetailView (도시 상세, mount 시점에 mock 데이터에서 id로 조회)
  - `/favorites` : WeatherFavoritesView (직접 추가한 즐겨찾기 페이지)
  - 그 외 경로 : NotFoundView
- 상세보기 클릭 시 alert 대신 `router.push('/weather/' + id)`로 페이지 이동하도록 변경
- Pinia
  - configStore : 섭씨/화씨 단위 상태를 관리하며 카드와 상세 페이지의 온도 표시에 적용
  - favoriteStore : 즐겨찾기 도시 id를 관리 (홈 화면 카드의 별표 버튼과 즐겨찾기 페이지에서 함께 사용)
- UnitToggler.vue를 만들어 네비게이션 바 옆에 배치, 클릭 시 전역으로 단위가 전환되도록 구현

## 배포

Vercel로 배포했다. GitHub 저장소와 연동해 main 브랜치에 push하면 자동으로 빌드되도록 설정했다.
Router history 모드를 사용 중이라 새로고침 시 404가 발생하는 문제가 있었는데, vercel.json에 rewrite 설정을 추가해 해결했다.

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## AI 도구 사용 관련

CSS 스타일링 부분에서 AI 도움을 받았다.

방식은 다음과 같다. 원하는 방향(예: 검색박스와 리스트박스 디자인 통일, 단위 토글 버튼의 형태 등)을 설명하면 AI가 CSS 코드를 제시했고, 이를 그대로 적용하지 않고 브라우저에서 직접 확인한 뒤 수정이 필요한 부분은 다시 요청하거나, 마진/패딩/색상 같은 세부 값은 직접 조정했다. 예를 들어 카드 간격이 좁아 보여 gap 값을 늘리거나, 버튼 색상이 마음에 들지 않아 accent 색상값을 변경하는 식으로 수정했다.

화면을 넓혔을 때 콘텐츠가 왼쪽으로 쏠리는 레이아웃 문제가 있었는데, 원인을 파악하기 어려워 AI에게 확인을 요청했다. Vite 기본 템플릿에 포함된 body의 flex 관련 스타일이 원인이라는 답을 받아 해당 부분을 찾아 수정했다.
