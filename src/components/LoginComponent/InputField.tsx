// InputField.tsx
import React from 'react';

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
}

const   InputField: React.FC<InputFieldProps> = ({ name, type, placeholder }) => (
  <input name={name} type={type} placeholder={placeholder} />
);
export default InputField;
