import { EmailValidator, EmptyEmailException } from './EmailValidator';

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

  
});
