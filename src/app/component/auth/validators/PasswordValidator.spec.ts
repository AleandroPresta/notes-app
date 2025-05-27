import {
    PasswordValidator,
    EmptyPasswordException,
    InvalidPasswordException,
} from './PasswordValidator';

describe('PasswordValidator', () => {
    it('should throw an exception when the password is empty', () => {
        const emptyPassword: string = '';
        expect(() => {
            PasswordValidator.isValid(emptyPassword);
        }).toThrowError(EmptyPasswordException);
    });

    it('should throw an exception when the password is null or undefined', () => {
        expect(() => {
            PasswordValidator.isValid(null as unknown as string);
        }).toThrowError(EmptyPasswordException);

        expect(() => {
            PasswordValidator.isValid(undefined as unknown as string);
        }).toThrowError(EmptyPasswordException);
    });

    it('should throw an exception when the password contains only whitespace', () => {
        const invalidPassword = '   ';
        expect(() => {
            PasswordValidator.isValid(invalidPassword);
        }).toThrowError(EmptyPasswordException);
    });

    it('should throw an exception when the password is too short (less than 8 characters)', () => {
        const shortPassword = 'Abc123';
        expect(() => {
            PasswordValidator.isValid(shortPassword);
        }).toThrowError(InvalidPasswordException);
    });

    it('should throw an exception when the password lacks lowercase letters', () => {
        const invalidPassword = 'ABCDEF123';
        expect(() => {
            PasswordValidator.isValid(invalidPassword);
        }).toThrowError(InvalidPasswordException);
    });

    it('should throw an exception when the password lacks uppercase letters', () => {
        const invalidPassword = 'abcdef123';
        expect(() => {
            PasswordValidator.isValid(invalidPassword);
        }).toThrowError(InvalidPasswordException);
    });

    it('should throw an exception when the password lacks numbers', () => {
        const invalidPassword = 'AbcdEfgh';
        expect(() => {
            PasswordValidator.isValid(invalidPassword);
        }).toThrowError(InvalidPasswordException);
    });

    it('should return true for valid passwords', () => {
        const validPasswords = [
            'Password123',
            'SecureP4ssw0rd',
            'MyP@ssw0rd123',
            'Abcdefg1',
            'aBcDeFgH1234',
        ];

        validPasswords.forEach((password) => {
            expect(PasswordValidator.isValid(password)).toBe(true);
        });
    });
});
