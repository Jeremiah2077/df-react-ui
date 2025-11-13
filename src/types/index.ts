import { ReactNode, CSSProperties } from 'react';

/**
 * 基础组件属性
 */
export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * 按钮类型
 */
export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * 分页配置
 */
export interface PaginationProps extends BaseProps {
  current: number;
  total: number;
  pageSize?: number;
  onChange?: (page: number) => void;
  showJumper?: boolean;
}

/**
 * 模态框配置
 */
export interface ModalProps extends BaseProps {
  visible: boolean;
  title?: string;
  onClose?: () => void;
  footer?: ReactNode;
  width?: number | string;
}

/**
 * 标签页配置
 */
export interface TabItem {
  key: string;
  label: string;
  content?: ReactNode;
}

export interface TabsProps extends BaseProps {
  items: TabItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
}
