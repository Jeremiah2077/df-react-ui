import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './Pagination.css';

export interface PaginationProps {
  /**
   * 当前页码
   */
  current: number;

  /**
   * 总条目数
   */
  total: number;

  /**
   * 每页条数
   */
  pageSize?: number;

  /**
   * 页码改变的回调
   */
  onChange?: (page: number) => void;

  /**
   * 是否显示快速跳转
   */
  showJumper?: boolean;

  /**
   * 自定义类名
   */
  className?: string;
}

/**
 * Pagination 组件
 * 完全复刻《三角洲行动》官网分页样式
 *
 * 设计特点：
 * - 极简数字页码（无背景）
 * - 短下划线激活状态（20px固定宽度）
 * - 精准的跳转按钮（17.5x13.08px）
 *
 * @example
 * ```tsx
 * <Pagination
 *   current={1}
 *   total={100}
 *   pageSize={10}
 *   showJumper
 *   onChange={(page) => console.log(page)}
 * />
 * ```
 */
export const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  total,
  pageSize = 10,
  onChange,
  showJumper = true,
  className = '',
}) => {
  const [jumpValue, setJumpValue] = useState<string>('');

  const totalPages = Math.ceil(total / pageSize);

  // 生成页码数组
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (current > 3) {
        pages.push('...');
      }

      const start = Math.max(2, current - 1);
      const end = Math.min(totalPages - 1, current + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (current < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === current) return;
    onChange?.(page);
  };

  const handleJump = () => {
    const page = parseInt(jumpValue);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      handlePageChange(page);
      setJumpValue('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleJump();
    }
  };

  return (
    <div className={`news_page news_page1 ${className}`}>
      {/* 上一页 */}
      <a
        href="javascript:;"
        className="page_prev"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(current - 1);
        }}
        style={{ opacity: current === 1 ? 0.3 : 1, cursor: current === 1 ? 'not-allowed' : 'pointer' }}
        aria-label="上一页"
      />

      {/* 页码 */}
      <div className="page_a">
        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <span
              key={index}
              className={page === current ? 'on' : ''}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </span>
          ) : (
            <span key={index} style={{ cursor: 'default' }}>
              {page}
            </span>
          )
        )}
      </div>

      {/* 下一页 */}
      <a
        href="javascript:;"
        className="page_next"
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(current + 1);
        }}
        style={{ opacity: current === totalPages ? 0.3 : 1, cursor: current === totalPages ? 'not-allowed' : 'pointer' }}
        aria-label="下一页"
      />

      {/* 快速跳转 */}
      {showJumper && (
        <div className="page_change">
          <p>跳转到</p>
          <input
            type="number"
            min={1}
            max={totalPages}
            value={jumpValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setJumpValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <p>页</p>
          <a
            href="javascript:;"
            className="page_num"
            onClick={(e) => {
              e.preventDefault();
              handleJump();
            }}
            aria-label="跳转"
          />
        </div>
      )}
    </div>
  );
};
