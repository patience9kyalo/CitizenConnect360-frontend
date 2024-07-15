import { createReducer, on } from "@ngrx/store"
import { authActions } from "../Actions/auth.actions"

export interface authInterface{

    loginSuccessMessage: string
    loginErrorMessage: string
    loginLoading: boolean

    registerSuccessMessage: string
    registerErrorMessage: string
    registerLoading: boolean
   
}

const initialState: authInterface = {
  
    
    loginSuccessMessage: '',
    loginErrorMessage: '',
    loginLoading: false,

    registerSuccessMessage: '',
    registerErrorMessage: '',
    registerLoading: false

}

export const authReducer = createReducer(

    initialState,

    on(authActions.login,(state) => {

        return{
            ...state,
            loginErrorMessage:'',
            loginSuccessMessage:'',
            loginLoading:true

        }
    }),

    on(authActions.loginSuccess,(state, action) => {
        return{
            ...state,
            loginErrorMessage:'',
            loginSuccessMessage:action.response.message,
            loginLoading:false
        }
    }),

    on(authActions.loginFailure,(state, {message}) => {
        return{
            ...state,
            loginErrorMessage:message,
            loginSuccessMessage:'',
            loginLoading:false
        }
    }),
    
    on(authActions.register,(state) => {
        return{
            ...state,
            registerErrorMessage:'',
            registerSuccessMessage:'',
            registerLoading:true
        }
    }),

    on(authActions.registerSuccess,(state, action) => {
        return{
            ...state,
            registerErrorMessage:'',
            registerSuccessMessage:action.response.Message,
            registerLoading:false
        }
    }),

    on(authActions.registerFailure,(state, {Message}) => {
        return{
            ...state,
            registerErrorMessage:Message,
            registerSuccessMessage:'',
            registerLoading:false
        }
    })

)
