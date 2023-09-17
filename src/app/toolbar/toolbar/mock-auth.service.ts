import { BehaviorSubject } from 'rxjs';


export class MockAuthService {
    private user = new BehaviorSubject<User | null>(null);
    user$ = this.user.asObservable();

    login(data: User) {
        this.user.next(data);
    }

    logout() {
        this.user.next(null);
    }
}

interface User {
    name: string;
    role: string;
}
