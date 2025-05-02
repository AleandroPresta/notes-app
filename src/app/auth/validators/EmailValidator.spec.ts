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
});
