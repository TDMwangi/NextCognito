import { FC, InputHTMLAttributes, useState } from 'react';

import { EyeSlashIcon, EyeIcon } from './eye-icon';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  showToggle?: boolean;
}

export const PasswordInput: FC<PasswordInputProps> = ({ type, showToggle, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        type={showToggle && showPassword ? 'text' : type}
        className="w-full rounded-md border border-gray-300 p-2 text-black"
        {...props}
      />
      {showToggle && (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleToggleClick}
        >
          {showPassword ? <EyeSlashIcon className="h-6 w-6 text-gray-500" /> : <EyeIcon className="h-6 w-6 text-gray-500" />}
        </div>
      )}
    </div>
  );
};
