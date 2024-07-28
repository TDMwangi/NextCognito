import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input: FC<InputProps> = (props) => {
  return <input className="w-full rounded-md border border-gray-300 p-2 text-black" {...props} />;
};
