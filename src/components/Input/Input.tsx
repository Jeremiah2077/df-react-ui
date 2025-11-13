import React, { InputHTMLAttributes, forwardRef } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 输入框宽度类型
   * - full: 全宽 (5.5rem)
   * - code: 验证码宽度 (4rem)
   */
  variant?: 'full' | 'code';

  /**
   * 自定义类名
   */
  className?: string;
}

/**
 * Input 输入框组件
 * 完全复刻《三角洲行动》官网输入框样式
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'full', className = '', ...props }, ref) => {
    const inputClass = `df-input ${variant === 'code' ? 'pop_codebox' : ''} ${className}`.trim();

    return (
      <div className="pop3_con">
        <input ref={ref} className={inputClass} {...props} />
      </div>
    );
  }
);

Input.displayName = 'Input';
