import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button className="w-full py-3 text-lg rounded-lg bg-[#088F8F] text-white hover:bg-[black] shadow-md transition-all duration-300 ease-in-out" {...props}>{children}</button>;
};
