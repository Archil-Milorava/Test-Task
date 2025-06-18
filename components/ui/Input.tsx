import { InputHTMLAttributes, forwardRef, ReactNode } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <label className="text-sm font-medium text-white">{label}</label>}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white pointer-events-none">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            {...props}
            className={clsx(
              "w-full bg-[#1C2E3D] border border-[#2C3E50] rounded-[5px] px-3 py-2 text-sm text-white placeholder:text-[#999] focus:outline-none focus:ring-0 focus:border-[#6B7280] transition",
              icon && "pl-10",
              error && "border-red-500",
              className
            )}
          />
        </div>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
