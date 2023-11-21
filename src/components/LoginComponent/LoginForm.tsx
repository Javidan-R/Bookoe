// LoginForm.tsx
import React from 'react';

interface LoginFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    {/* Your input fields and submit button go here */}
  </form>
);

export default LoginForm;
