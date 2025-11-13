import React, { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮变体
   * - 'down': 下载按钮 (nav_btn.jpg背景, 5.25rem x 1.4rem)
   * - 'pop': 弹窗按钮 (pop_btn.png背景, 1.86rem x 0.37rem)
   */
  variant?: 'down' | 'pop';
  /**
   * 是否作为链接渲染
   */
  href?: string;
  /**
   * 加载状态
   */
  loading?: boolean;
}

/**
 * Button 按钮组件
 * 完全复刻《三角洲行动》官网按钮样式
 *
 * @example
 * ```tsx
 * <Button variant="down" href="#">下载游戏</Button>
 * <Button variant="pop">确认提交</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'down',
      href,
      loading = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const buttonClass = `${variant === 'down' ? 'down_btn' : 'pop_btn'} ${loading ? 'loading' : ''} ${className}`.trim();

    if (href) {
      return (
        <a
          href={href}
          className={buttonClass}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={buttonClass}
        disabled={disabled || loading}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
