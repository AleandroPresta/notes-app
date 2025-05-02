export class EmptyEmailException extends Error {
  constructor(message: string = 'Empty email') {
    super(message);
    this.name = 'EmptyEmailException';
  }
}

export class InvalidEmailException extends Error {
    constructor(message: string = 'Invalid email') {
      super(message);
      this.name = 'InvalidEmailException';
    }
  }

export class EmailValidator {
  validate(email: string): void {
    if (this.isEmpty(email)) {
      throw new EmptyEmailException('Email cannot be empty');
    }
    // Additional email validation logic can be added here
  }

  isEmpty(email: string): boolean {
    return !email || email.trim() === ''
  }

  isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
