import { createReducer } from '@reduxjs/toolkit'
import { ALL_PROJECTS, COMMUNITY, FLOOR_PRICE, HYPE, MARKET_CAP, SUPPLY, UPCOMING_PROJECTS, CATEGORY } from '../actions/actions'

const initialState = {
    category: "repuestos y accesorios",
}

export const clientReducer = createReducer(initialState, (callback) => {
    callback.addCase(CATEGORY.fulfilled, (state, action)=>{       
        state.category = action.payload
    })

    callback.addCase(UPCOMING_PROJECTS.fulfilled, (state, action)=>{
        state.upcomingProjects = action.payload.ok ? action.payload.projects : ""
    })

   
})