import { FC, SVGProps } from 'react';

export const EyeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.2.662-.462 1.302-.781 1.909M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const EyeSlashIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3l18 18M9.464 9.464A3 3 0 0112 12m2.536 2.536A3 3 0 0112 12m0 0a3 3 0 01-2.536-2.536M12 12a3 3 0 002.536 2.536M12 12a3 3 0 01-2.536-2.536M12 12a3 3 0 002.536 2.536M19.293 14.707A11.962 11.962 0 0021.542 12M12 5c4.477 0 8.268 2.943 9.542 7-.2.662-.462 1.302-.781 1.909"
    />
  </svg>
);
