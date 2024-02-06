import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';
import { get } from 'lodash';
import axios from '../../services/axios';
import { Form } from './styled';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = false;

    if (name.length < 3 || name.length > 50) {
      errors = true;
      toast.error('name error');
    }

    if (!isEmail(email)) {
      errors = true;
      toast.error('email error');
    }

    if (password.length < 3 || password.length > 50) {
      errors = true;
      toast.error('password error');
    }

    if (errors) return;

    try {
      await axios.post('/users/', {
        name,
        password,
        email,
      });
      toast.success('success');
      navigate('/login');
    } catch (err) {
      const error = get(err, 'response.data.errors', []);
      error.map((e) => toast.error(e));
    }
  };

  return (
    <>
      <h1>Create your account</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </label>
        <button type="submit">Send</button>
      </Form>
    </>
  );
}
