import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: {
    id: null,
    role: null,
    isLogged: false,
    accessTokenExp: null,
    refreshTokenExp: null
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    info: initialState.info
  },
  reducers: {
    updateInfo: (state, action) => {
      state.info = {
        ...state.info,
        ...action.payload
      }
    },
    setInfo: (state, action) => {
      state.info = action.payload
    },
    clearInfo: (state) => {
      state.info = initialState.info
    }
  }
})

export const { setInfo, clearInfo, updateInfo } = authSlice.actions

export default authSlice.reducer
