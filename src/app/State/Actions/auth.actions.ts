import { createActionGroup, props } from "@ngrx/store";
import { LoginReq, LoginResponse, RegisterResponse, User } from "../../Models/users";

export const authActions = createActionGroup({
    source : 'AUTH API',
    events : {
        'login': props <{user:LoginReq}>(),
        'login success': props <{response:LoginResponse}>(),
        'login failure': props <{message:string}>(),


        'register': props <{user:User}>(),
        'register success': props <{response:RegisterResponse}>(),
        'register failure': props <{Message:string}>()

    }

})