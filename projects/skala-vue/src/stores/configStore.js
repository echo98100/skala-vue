import { defineStore } from 'pinia'

// 대시보드 전역에서 사용할 온도 단위 설정 store.
// - state: 현재 선택된 단위
// - getters: 화면 표시에 필요한 파생 값들 (기호, 라벨, 화씨 여부)
// - actions: 단위를 바꾸는 동작 + 섭씨 값을 현재 단위에 맞게 변환하는 유틸 동작
export const useConfigStore = defineStore('config', {
  state: () => ({
    unit: 'celsius', // 'celsius' | 'fahrenheit'
  }),

  getters: {
    isFahrenheit: (state) => state.unit === 'fahrenheit',
    unitSymbol: (state) => (state.unit === 'fahrenheit' ? '°F' : '°C'),
    unitLabel: (state) => (state.unit === 'fahrenheit' ? '화씨' : '섭씨'),
  },

  actions: {
    // 버튼 하나로 단위를 토글할 때 사용
    toggleUnit() {
      this.unit = this.unit === 'celsius' ? 'fahrenheit' : 'celsius'
    },

    // 특정 단위로 직접 지정할 때 사용 (UnitToggler의 개별 버튼용)
    setUnit(unit) {
      if (unit === 'celsius' || unit === 'fahrenheit') {
        this.unit = unit
      }
    },

    // 4. 추가 action: Mock Data는 항상 섭씨 기준이므로,
    //    화면에 뿌릴 때는 현재 설정 단위에 맞게 변환해서 보여준다.
    convertTemp(celsiusValue) {
      if (this.unit === 'fahrenheit') {
        return Math.round((celsiusValue * 9) / 5 + 32)
      }
      return celsiusValue
    },
  },
})
