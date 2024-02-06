import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { isEmail } from 'validator';
import { Form } from './styled';
import * as actions from '../../redux/modules/auth/actions';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = false;

    if (!isEmail(email)) {
      errors = true;
      toast.error('invalid email');
    }
    if (password.length < 3 || password.length > 50) {
      errors = true;
      toast.error('invalid password');
    }
    if (errors) return;
    dispatch(actions.loginSuccess({ email, password, prevPath }));
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="your password"
        />
        <button type="submit">Send</button>
      </Form>
    </>
  );
}
