import React from 'react';

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

const FormInput = ({ label, name, type, placeholder }: Props) => {
  return (
    <div>
      <label htmlFor={name} className='block text-gray-700 font-semibold mb-2'>
        {label}
      </label>
      <input
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
