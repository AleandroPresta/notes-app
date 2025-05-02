import {
    EmailValidator,
    EmptyEmailException,
    InvalidEmailException,
} from './EmailValidator';

describe('EmailValidator', () => {
    let validator: EmailValidator;

    beforeEach(() => {
        validator = new EmailValidator();
    });

    it('should throw an exception when the email is empty', () => {
        const emptyEmail: string = '';
        expect(() => {
            validator.validate(emptyEmail);
        }).toThrowError(EmptyEmailException);
    });

    it('should throw an exception when the input lacks a @ symbol', () => {
        const invalidEmail: string = 'invalidemail.com';
        expect(() => {
            validator.validate(invalidEmail);
        }).toThrowError(InvalidEmailException);
    });

    it('should throw an exception when the input lacks a domain', () => {
        const invalidEmail: string = 'invalidemail@';
        expect(() => {
            validator.validate(invalidEmail);
        }).toThrowError(InvalidEmailException);
    });

    it('should throw an exception when the input lacks a username', () => {
        const invalidEmail: string = '@domain.com';
        expect(() => {
            validator.validate(invalidEmail);
        }).toThrowError(InvalidEmailException);
    });

    it('should throw an exception when the input lacks a top-level domain', () => {
        const invalidEmail: string = 'invalidemail@domain';
        expect(() => {
            validator.validate(invalidEmail);
        }).toThrowError(InvalidEmailException);
    });

    it('should return true for valid emails', () => {
        const validEmails = [
            'test@example.com',
            'user.name@domain.com',
            'user-name@domain.co.uk',
            'user123@domain.org',
            'user+tag@domain.net',
        ];

        validEmails.forEach((email) => {
            expect(validator.validate(email)).toBe(true);
        });
    });

    it('should throw an exception when email has invalid characters', () => {
        const invalidEmails = [
            'user name@domain.com', // space not allowed
            'user"name@domain.com', // quotes not allowed
        ];

        invalidEmails.forEach((email) => {
            expect(() => {
                validator.validate(email);
            }).toThrowError(InvalidEmailException);
        });
    });

    it('should throw an exception when email has multiple @ symbols', () => {
        const invalidEmail = 'user@name@domain.com';
        expect(() => {
            validator.validate(invalidEmail);
        }).toThrowError(InvalidEmailException);
    });

    it('should throw an exception when email contains only whitespace', () => {
        const invalidEmail = '   ';
        expect(() => {
            validator.validate(invalidEmail);
        }).toThrowError(EmptyEmailException);
    });

    it('should throw an exception for null or undefined emails', () => {
        expect(() => {
            validator.validate(null as unknown as string);
        }).toThrowError(EmptyEmailException);

        expect(() => {
            validator.validate(undefined as unknown as string);
        }).toThrowError(EmptyEmailException);
    });
});
