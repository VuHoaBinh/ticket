import { createSlice, current } from '@reduxjs/toolkit'
import danhSachGhe from '../danhSachGhe.json'

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    danhSachGhe,
    total: 0,
  },
  reducers: {
    confirm(state, action) {
      const info = current(state.danhSachGhe).find((item) =>
        item.danhSachGhe.find((ghe) => ghe.soGhe === action.payload)
      )
      if (info) {
        const index = info.danhSachGhe.findIndex((ghe) => ghe.soGhe === action.payload)
        const newInfo = JSON.parse(JSON.stringify(info))
        newInfo.danhSachGhe[index].daDat = !newInfo.danhSachGhe[index].daDat

        Object.assign(
          state.danhSachGhe,
          state.danhSachGhe.map((item) => (item.hang === info.hang ? newInfo : item))
        )

        if (newInfo.danhSachGhe[index].daDat) {
          state.total += newInfo.danhSachGhe[index].gia
        } else {
          state.total -= newInfo.danhSachGhe[index].gia
        }
      }

      return state
    },

    calculate(state, action) {
      current(state.danhSachGhe).forEach((item) => {
        for (let i = 0; i < item.danhSachGhe.length; i++) {
          let newInfo = JSON.parse(JSON.stringify(item.danhSachGhe[i]))
          if (item.danhSachGhe[i].daDat) {
            newInfo.daThanhToan = true
          }

          //
        }
      })

      return state
    },
  },
})
const { actions, reducer } = ticketSlice
export const { confirm, calculate } = actions
export default reducer
