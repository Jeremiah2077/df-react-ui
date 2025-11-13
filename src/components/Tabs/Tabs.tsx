import React, { useState, ReactNode } from 'react';
import './Tabs.css';

export interface TabsProps {
  /**
   * 标签项
   */
  items: Array<{
    key: string;
    label: string;
    content?: ReactNode;
  }>;

  /**
   * 当前激活的标签key
   */
  activeKey?: string;

  /**
   * 标签切换回调
   */
  onChange?: (key: string) => void;

  /**
   * 自定义类名
   */
  className?: string;
}

/**
 * Tabs 标签页组件
 * 完全复刻《三角洲行动》官网标签页样式
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  activeKey,
  onChange,
  className = '',
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(items[0]?.key || '');

  const currentActiveKey = activeKey !== undefined ? activeKey : internalActiveKey;

  const handleTabClick = (key: string) => {
    if (activeKey === undefined) {
      setInternalActiveKey(key);
    }
    onChange?.(key);
  };

  const activeItem = items.find((item) => item.key === currentActiveKey);

  return (
    <div className={`df-tabs ${className}`}>
      <div className="p2_title2">
        <div className="p2_nav">
          {items.map((item) => (
            <a
              key={item.key}
              href="javascript:;"
              className={`p2_tab p2_tab3 ${currentActiveKey === item.key ? 'on' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick(item.key);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {activeItem?.content && (
        <div className="df-tabs__content">{activeItem.content}</div>
      )}
    </div>
  );
};
