import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm')
//   .then((module) => ({ default: module.LoginForm })));

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./LoginForm')), 1000);
}));

export default LoginFormAsync;
