import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'user' };
    expect(loginReducer(state as LoginSchema, loginActions.setUserName('name')))
      .toEqual({ username: 'name' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234')))
      .toEqual({ password: '1234' });
  });
});
