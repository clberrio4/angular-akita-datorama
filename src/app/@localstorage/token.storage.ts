import { SessionState } from "../auth/state/session.store";


export class SessionStorage {
    private sessionKey: string;
    constructor() {
        this.sessionKey = "session";
    }
    getSession(): SessionState {
        const session = localStorage.getItem(this.sessionKey);

        return session.length > 0 ? JSON.parse(session) : {};
    }

    setSession(session) {
        localStorage.setItem(this.sessionKey, JSON.stringify(session));
    }

    clearSession() {
        localStorage.removeItem(this.sessionKey);
    }
}
