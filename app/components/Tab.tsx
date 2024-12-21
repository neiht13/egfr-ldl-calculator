// components/Tab.tsx
import React from 'react';
import classNames from 'classnames';

interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  return (
    <div
      className={classNames(
        "flex-1 text-center py-2 cursor-pointer font-semibold text-gray-800 border-b-2 transition-colors duration-300",
        {
          "border-b-red-500 text-red-500": active,
          "border-b-gray-300 hover:text-gray-700": !active,
        }
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Tab;