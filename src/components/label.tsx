import { FC, LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> { }

export const Label: FC<LabelProps> = ({ children, ...props }) => {
  return <label className="block text-sm font-medium" {...props}>{children}</label>;
};
