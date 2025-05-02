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
    static isValid(email: string): boolean {
        if (this.isEmpty(email)) {
            throw new EmptyEmailException();
        }
        return this.isValidFormat(email); // Call the isValid method to validate email format
    }

    static isEmpty(email: string): boolean {
        return !email || email.trim() === '';
    }

    static isValidFormat(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email)
            ? true
            : (() => {
                  throw new InvalidEmailException();
              })();
    }
}
