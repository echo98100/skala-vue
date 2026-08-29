import { defineStore } from 'pinia'

// 4. 본인만의 추가 Store: 즐겨찾기 도시 id 목록을 전역 상태로 관리.
// 기존에는 WeatherFavoritesView 안에서만 쓰이던 로컬 ref였는데,
// 여러 View(Home / Favorites / WeatherCard)에서 공유해야 하는 상태라 Pinia store로 분리했다.
export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favoriteCityIds: ['city_01', 'city_03'],
  }),

  getters: {
    favoriteCount: (state) => state.favoriteCityIds.length,
    // getter가 함수를 반환하는 패턴: isFavorite('city_01') 형태로 호출
    isFavorite: (state) => (cityId) => state.favoriteCityIds.includes(cityId),
  },

  actions: {
    addFavorite(cityId) {
      if (!this.favoriteCityIds.includes(cityId)) {
        this.favoriteCityIds.push(cityId)
      }
    },

    removeFavorite(cityId) {
      this.favoriteCityIds = this.favoriteCityIds.filter((id) => id !== cityId)
    },

    toggleFavorite(cityId) {
      if (this.favoriteCityIds.includes(cityId)) {
        this.removeFavorite(cityId)
      } else {
        this.addFavorite(cityId)
      }
    },
  },
})
