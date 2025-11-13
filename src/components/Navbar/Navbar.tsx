import React, { useState } from 'react';
import './Navbar.css';

export interface NavbarProps {
  /**
   * Logo图片路径
   */
  logo?: string;

  /**
   * 导航项
   */
  items?: Array<{
    label: string;
    labelEn: string;
    href?: string;
    onClick?: () => void;
  }>;

  /**
   * 下载按钮链接
   */
  downloadHref?: string;

  /**
   * 下载按钮文本
   */
  downloadText?: string;

  /**
   * 是否显示登录按钮
   */
  showLogin?: boolean;

  /**
   * 登录点击回调
   */
  onLoginClick?: () => void;
}

/**
 * Navbar 导航栏组件
 * 完全复刻《三角洲行动》官网导航栏样式
 */
export const Navbar: React.FC<NavbarProps> = ({
  logo,
  items = [
    { label: '首页', labelEn: 'HOME' },
    { label: '按钮', labelEn: 'BUTTONS' },
    { label: '表单', labelEn: 'FORMS' },
    { label: '卡片', labelEn: 'CARDS' },
    { label: '列表', labelEn: 'LIST' },
  ],
  downloadHref = '#',
  downloadText = '下载游戏',
  showLogin = true,
  onLoginClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="nav">
      <a href="/">
        {logo && <img className="logo" src={logo} alt="Logo" />}
      </a>

      <div className="nav_tab">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href || 'javascript:;'}
            className={`nav_li ${activeIndex === index ? 'on' : ''}`}
            onClick={(e) => {
              if (!item.href || item.href === 'javascript:;') {
                e.preventDefault();
              }
              setActiveIndex(index);
              item.onClick?.();
            }}
          >
            <span>
              {item.label}
              <span className="en">{item.labelEn}</span>
            </span>
          </a>
        ))}
      </div>

      {showLogin && (
        <div className="login">
          <a
            href="javascript:;"
            className="in"
            onClick={(e) => {
              e.preventDefault();
              onLoginClick?.();
            }}
          >
            <i></i>
            <span>登录</span>
          </a>
        </div>
      )}

      <a href={downloadHref} className="down_btn">
        {downloadText}
      </a>
    </div>
  );
};
