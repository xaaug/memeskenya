import React from "react";

type Variant = "primary" | "secondary" | "ghost";

interface CarbonButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantClasses: Record<Variant, string> = {
  primary: `
    bg-[#0f62fe] 
    text-white 
    hover:bg-[#0353e9] 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-[#0f62fe] 
    active:bg-[#002d9c]
  `,
  secondary: `
    bg-[#e0e0e0] 
    text-[#161616] 
    hover:bg-[#d5d5d5] 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-[#8d8d8d] 
    active:bg-[#8d8d8d]
  `,
  ghost: `
    bg-transparent 
    text-[#0f62fe] 
    hover:bg-[#e5f0ff] 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-[#0f62fe] 
    active:bg-[#cce4ff]
  `,
};

const baseClasses = `
  font-['IBM_Plex_Sans',sans-serif]
  text-[14px]
  font-semibold 
  leading-[16px]
  px-[16px] 
  py-[10px]
  transition-colors 
  duration-150 
  rounded-none 
  disabled:bg-[#c6c6c6] 
  disabled:text-[#8d8d8d] 
  disabled:cursor-not-allowed
  outline-none
  border-none
`;

const Button: React.FC<CarbonButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
}) => {
  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={classes} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
