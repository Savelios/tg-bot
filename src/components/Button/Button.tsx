import React from 'react';
import './Button.css'

interface ButtonProps {
  className?: string;
  children: React.ReactNode; 
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={'button ' + props.className}>
      {props.children}
    </button>
  );
};

export default Button;
