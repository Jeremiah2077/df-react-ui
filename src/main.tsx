import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

/**
 * 响应式rem计算脚本
 * 与原HTML完全一致
 */
(function () {
  var resizeWidth = function () {
    var ww = window.innerWidth;
    const html = document.documentElement;

    // 移除所有类名
    html.className = '';

    // 根据宽度添加对应的类名
    if (ww > 1024) {
      // 大屏幕，不添加类名
    } else if (ww > 750 && ww <= 1024) {
      html.className = 'medium';
    } else if (ww <= 750) {
      html.className = 'small';
    }
  };

  resizeWidth();
  window.addEventListener('DOMContentLoaded', resizeWidth);
  window.addEventListener('load', resizeWidth);
  window.addEventListener('resize', resizeWidth);
})();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
