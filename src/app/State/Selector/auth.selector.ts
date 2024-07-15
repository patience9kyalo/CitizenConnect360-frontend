import { createFeatureSelector, createSelector } from "@ngrx/store"
import { authInterface } from "../Reducers/auth.reducers"

const authSelectorFeature = createFeatureSelector<authInterface>('auth')

export const errorSelector = createSelector(authSelectorFeature, (state)=>state.loginErrorMessage)

