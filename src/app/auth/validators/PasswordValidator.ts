export class EmptyPasswordException extends Error {
    constructor(message: string = 'Empty password') {
        super(message);
        this.name = 'EmptyEmailException';
    }
}

export class InvalidPasswordException extends Error {
    constructor(message: string = 'Invalid password') {
        super(message);
        this.name = 'InvalidPasswordException';
    }
}

export class PasswordValidator {
    static isValid(password: string): boolean {
        if (this.isEmpty(password)) {
            throw new EmptyPasswordException();
        }
        return this.isValidFormat(password); // Call the isValid method to validate email format
    }

    static isEmpty(password: string): boolean {
        return !password || password.trim() === '';
    }

    static isValidFormat(password: string): boolean {
        // Password must be at least 8 characters and contain at least one:
        // - lowercase letter
        // - uppercase letter
        // - number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password)
            ? true
            : (() => {
                  throw new InvalidPasswordException();
              })();
    }
}
