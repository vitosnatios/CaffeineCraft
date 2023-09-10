import React from 'react';

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: (name: string, value: string) => void;
  value: string;
};

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
}: Props) => {
  const handleChange = (e: any) => {
    if (onChange) onChange(name, e.currentTarget.value);
  };
  return (
    <div>
      <label htmlFor={name} className='block text-gray-700 font-semibold mb-2'>
        {label}
      </label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        id={name}
        name={name}
        className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none'
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;
