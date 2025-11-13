/**
 * DF React UI - 主题系统
 * 基于《三角洲行动》军事科技风格
 */

export const theme = {
  colors: {
    // 主色调 - 荧光绿（夜视仪绿）
    primary: '#0ff796',
    primaryHover: '#00c278',
    primaryLight: 'rgba(15, 247, 150, 0.1)',

    // 强调色 - 橙红（警告色）
    accent: '#ff6b00',
    accentHover: '#ff8533',

    // 背景色
    bgDark: '#000000',
    bgCard: '#0f0f0f',
    bgHover: '#1a1a1a',

    // 文字颜色
    textPrimary: '#ffffff',
    textSecondary: '#dee9e0',
    textMuted: '#999999',

    // 边框颜色
    border: '#222222',
    borderLight: 'rgba(15, 247, 150, 0.1)',
    borderActive: '#0ff796',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
  },

  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },

  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.15)',
    md: '0 4px 15px rgba(15, 247, 150, 0.3)',
    lg: '0 6px 20px rgba(15, 247, 150, 0.5)',
    glow: '0 0 20px rgba(15, 247, 150, 0.5)',
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
} as const;

export type Theme = typeof theme;
