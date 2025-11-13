import React, { ReactNode } from 'react';
import './Card.css';

export interface NewsCardProps {
  /**
   * 卡片类型
   */
  type: 'news';

  /**
   * 图片地址
   */
  image: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 日期
   */
  date?: string;

  /**
   * 链接
   */
  href?: string;

  /**
   * 点击回调
   */
  onClick?: () => void;
}

export interface SkillCardProps {
  /**
   * 卡片类型
   */
  type: 'skill';

  /**
   * 图标地址
   */
  icon: string;

  /**
   * 标题
   */
  title: string;

  /**
   * 链接
   */
  href?: string;

  /**
   * 点击回调
   */
  onClick?: () => void;
}

export type CardProps = NewsCardProps | SkillCardProps;

/**
 * Card 卡片组件
 * 完全复刻《三角洲行动》官网卡片样式
 *
 * 支持两种类型：
 * - news: 新闻卡片
 * - skill: 技能卡片
 */
export const Card: React.FC<CardProps> = (props) => {
  if (props.type === 'news') {
    const { image, title, date, href = 'javascript:;', onClick } = props;
    return (
      <li>
        <a
          href={href}
          onClick={(e) => {
            if (!href || href === 'javascript:;') {
              e.preventDefault();
            }
            onClick?.();
          }}
        >
          <img src={image} alt={title} />
          <h2>{title}</h2>
          {date && <span>{date}</span>}
        </a>
      </li>
    );
  }

  if (props.type === 'skill') {
    const { icon, title, href = 'javascript:;', onClick } = props;
    return (
      <div className="p4-sk-box">
        <a
          href={href}
          onClick={(e) => {
            if (!href || href === 'javascript:;') {
              e.preventDefault();
            }
            onClick?.();
          }}
        >
          <img src={icon} alt={title} />
          <p>{title}</p>
        </a>
      </div>
    );
  }

  return null;
};

/**
 * NewsCardList 新闻卡片列表容器
 */
export const NewsCardList: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="newsbox">
      <ul>{children}</ul>
    </div>
  );
};

/**
 * SkillCardList 技能卡片列表容器
 */
export const SkillCardList: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="skill-card-list">{children}</div>;
};
