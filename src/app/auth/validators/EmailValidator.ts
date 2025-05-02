export class EmptyEmailException extends Error {
    constructor(message: string = 'Empty email') {
        super(message);
        this.name = 'EmptyEmailException';
    }
}

export class InvalidEmailException extends Error {
    constructor(message: string = 'Invalid email format') {
        super(message);
        this.name = 'InvalidEmailException';
    }
}

export class EmailValidator {
    validate(email: string): void {
        if (this.isEmpty(email)) {
            throw new EmptyEmailException();
        }
        this.isValid(email); // Call the isValid method to validate email format
    }

    isEmpty(email: string): boolean {
        return !email || email.trim() === '';
    }

    isValid(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email)
            ? true
            : (() => {
                  throw new InvalidEmailException();
              })();
    }
}
