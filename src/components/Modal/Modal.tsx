import React, { ReactNode, useEffect } from 'react';
import './Modal.css';

export interface ModalProps {
  /**
   * 是否显示
   */
  visible: boolean;

  /**
   * 标题
   */
  title?: string;

  /**
   * 关闭回调
   */
  onClose?: () => void;

  /**
   * 底部内容
   */
  footer?: ReactNode;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 子元素
   */
  children?: ReactNode;
}

/**
 * Modal 组件
 * 完全复刻《三角洲行动》官网模态框样式
 *
 * @example
 * ```tsx
 * const [visible, setVisible] = useState(false);
 *
 * <Modal
 *   visible={visible}
 *   title="系统提示"
 *   onClose={() => setVisible(false)}
 * >
 *   <p>这是一个提示弹窗</p>
 * </Modal>
 * ```
 */
export const Modal: React.FC<ModalProps> = ({
  visible,
  title,
  onClose,
  footer,
  className = '',
  children,
}) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div className="popupOverlay" onClick={onClose} />

      {/* 模态框 */}
      <div className={`pop1 ${className}`}>
        {/* 关闭按钮 */}
        {onClose && (
          <a href="javascript:;" className="pop-close" onClick={(e) => { e.preventDefault(); onClose(); }} title="点击关闭" />
        )}

        {/* 标题 */}
        {title && <div className="pop-title">{title}</div>}

        {/* 内容 */}
        <div className="pop3_con">{children}</div>

        {/* 底部 */}
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </>
  );
};
