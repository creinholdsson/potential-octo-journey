export class AuthenticationEvent {
    isLoggedIn: boolean;
    constructor(isLoggedIn: boolean) {
        this.isLoggedIn = isLoggedIn;
    }
}
