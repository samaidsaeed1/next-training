import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store';


const initialState: any = {
  auctions: []
}

export const homeSlice = createSlice({
  name: 'home',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addAuctions: (state, action) => {
      state.auctions = action.payload
    }
  }
})

export const { addAuctions } = homeSlice.actions

export const selectAuctions = (state: any) => state.auctions

export default homeSlice.reducer