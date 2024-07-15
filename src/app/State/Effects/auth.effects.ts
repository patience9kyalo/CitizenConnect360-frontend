import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../Services/auth.service";
import { authActions } from "../Actions/auth.actions";
import { catchError, concatMap, exhaustMap, map, of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

  constructor(private action$: Actions, private router: Router, private as: AuthService) {}

  // Effect to handle user registration
  registerUser$ = createEffect(() => {

    return this.action$.pipe(

      // Listen for the 'register' action

      ofType(authActions.register),

      // Handle the action by calling the AuthService.registerUser method

      concatMap(req => this.as.registerUser(req.user).pipe(

        // On success, dispatch 'registerSuccess' action and navigate to login

        map(res => {
          this.router.navigate(['/login']);
          return authActions.registerSuccess({ response: res });
        }),

        // On failure, dispatch 'registerFailure' action with the error message

        catchError(error => of(authActions.registerFailure({ Message: error })))
      ))
    );
  });

  // Effect to handle user login

  loginUser$ = createEffect(() => {

    return this.action$.pipe(

      // Listen for the 'login' action

      ofType(authActions.login),

      // Handle the action by calling the AuthService.loginUser method

      exhaustMap(({ user }) => this.as.loginUser(user).pipe(

        // On success, set role and payload in localStorage and navigate based on role

        map(res => {
          localStorage.setItem('Role', res.payload.Role);
          localStorage.setItem('Payload', JSON.stringify(res.payload));

          // Navigate to appropriate route based on role

          if (res.Role === 'admin') {
            console.log("User is an admin");
            this.router.navigate(['/adminhome']).then(() => {
              window.location.reload();
            });
          } else if (res.Role === 'gvn') {
            console.log("User is an official");
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          } else {
            console.log("User is a citizen");
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }

          return authActions.loginSuccess({ response: res });
        }),

        // On failure, dispatch 'loginFailure' action with the error message
        
        catchError(error => of(authActions.loginFailure({ message: error.message })))
      ))
    );
  });
}
