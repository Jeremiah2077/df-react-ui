import React, { useState } from 'react';
import { Button, Pagination, Modal, Navbar, Tabs, Card, NewsCardList, SkillCardList, Input } from './index';
import './App.css';
import logoImg from './assets/logo.png';
import news1Img from './assets/news1.jpg';
import news2Img from './assets/news2.jpg';
import news3Img from './assets/news3.jpg';
import ico1Img from './assets/p4_ico1.png';
import ico2Img from './assets/p4_ico2.png';
import ico3Img from './assets/p4_ico3.png';

/**
 * DF React UI 示例应用
 * 展示所有组件的使用方法
 */
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="app">
      {/* Hero 主视觉区域 */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">DF React UI</h1>
          <p className="hero-subtitle">Delta Force Style Component Library</p>
          <p className="hero-desc">基于《三角洲行动》军事科技风格的 React 组件库</p>
        </div>
      </div>

      <main className="app-main">
        {/* 导航栏示例 */}
        <section className="demo-section">
          <h2>Navbar 导航栏</h2>
          <div className="demo-content">
            <Navbar
              logo={logoImg}
              items={[
                { label: '首页', labelEn: 'HOME', href: '#' },
                { label: '资讯', labelEn: 'NEWS', href: '#news' },
                { label: '组件', labelEn: 'COMPONENTS', href: '#components' },
              ]}
              downloadHref="#"
              downloadText="下载游戏"
              showLogin
              onLoginClick={() => console.log('登录点击')}
            />
          </div>
        </section>

        {/* 按钮示例 */}
        <section className="demo-section">
          <h2>Buttons 按钮</h2>
          <div className="button-showcase">
            <div className="button-group">
              <div className="button-label">下载按钮 / Download Button</div>
              <Button variant="down" href="#">下载游戏</Button>
              <p className="button-desc">主要操作按钮，用于下载、启动等重要行为</p>
            </div>

            <div className="button-group">
              <div className="button-label">弹窗按钮 / Popup Button</div>
              <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button variant="pop" onClick={() => setModalVisible(true)}>打开弹窗</Button>
                <Button variant="pop" onClick={() => console.log('确认')}>确认</Button>
                <Button variant="pop" onClick={() => console.log('取消')}>取消</Button>
              </div>
              <p className="button-desc">次要操作按钮，用于弹窗确认、取消等辅助操作</p>
            </div>
          </div>
        </section>

        {/* 输入框示例 */}
        <section className="demo-section">
          <h2>Input 输入框</h2>
          <div className="button-showcase">
            <div className="button-group">
              <div className="button-label">全宽输入框 / Full Width Input</div>
              <Input type="text" placeholder="请输入用户名" />
              <Input type="password" placeholder="请输入密码" />
              <Input type="email" placeholder="请输入邮箱" />
              <p className="button-desc">标准输入框，宽度5.5rem，用于用户名、密码等信息输入</p>
            </div>

            <div className="button-group">
              <div className="button-label">验证码输入框 / Code Input</div>
              <Input type="text" variant="code" placeholder="验证码" maxLength={6} />
              <p className="button-desc">验证码专用输入框，宽度4rem，适合短文本输入</p>
            </div>
          </div>
        </section>

        {/* 分页示例 */}
        <section className="demo-section">
          <h2>Pagination 分页</h2>
          <div className="demo-content">
            <Pagination
              current={currentPage}
              total={100}
              pageSize={10}
              showJumper
              onChange={(page) => {
                setCurrentPage(page);
                console.log('当前页:', page);
              }}
            />
            <p style={{ marginTop: '0.3rem', textAlign: 'center', color: '#0ff796', fontSize: '0.3rem' }}>
              当前页码: {currentPage}
            </p>
          </div>
        </section>

        {/* 模态框示例 */}
        <section className="demo-section">
          <h2>Modal 模态框</h2>
          <div className="demo-content">
            <Button variant="pop" onClick={() => setModalVisible(true)}>
              打开模态框
            </Button>

            <Modal
              visible={modalVisible}
              title="系统提示"
              onClose={() => setModalVisible(false)}
              footer={
                <>
                  <Button variant="pop" onClick={() => setModalVisible(false)}>
                    确认
                  </Button>
                </>
              }
            >
              <p>这是一个基于《三角洲行动》风格的模态框组件。</p>
              <p>采用军事科技美学设计，荧光绿边框配合深色背景。</p>
              <p>
                设计理念：<strong style={{ color: '#0ff796' }}>克制、精准、现代</strong>
              </p>
            </Modal>
          </div>
        </section>

        {/* 标签页示例 */}
        <section className="demo-section">
          <h2>Tabs 标签页</h2>
          <div className="demo-content">
            <Tabs
              items={[
                {
                  key: 'tab1',
                  label: '最新资讯',
                  content: (
                    <div style={{ padding: '0.3rem', color: '#e1e1e1' }}>
                      <p>这是最新资讯的内容区域</p>
                      <p>可以放置任何 React 组件</p>
                    </div>
                  ),
                },
                {
                  key: 'tab2',
                  label: '游戏攻略',
                  content: (
                    <div style={{ padding: '0.3rem', color: '#e1e1e1' }}>
                      <p>这是游戏攻略的内容区域</p>
                    </div>
                  ),
                },
                {
                  key: 'tab3',
                  label: '更新公告',
                  content: (
                    <div style={{ padding: '0.3rem', color: '#e1e1e1' }}>
                      <p>这是更新公告的内容区域</p>
                    </div>
                  ),
                },
              ]}
              activeKey={activeTab}
              onChange={(key) => {
                setActiveTab(key);
                console.log('切换标签:', key);
              }}
            />
          </div>
        </section>

        {/* 新闻卡片示例 */}
        <section className="demo-section" id="news">
          <h2>News Cards 新闻卡片</h2>
          <div className="demo-content">
            <NewsCardList>
              <Card
                type="news"
                image={news1Img}
                title="《三角洲行动》全新版本上线"
                date="2025-01-15"
                href="#"
                onClick={() => console.log('卡片1点击')}
              />
              <Card
                type="news"
                image={news2Img}
                title="新地图「都市突袭」震撼来袭"
                date="2025-01-14"
                href="#"
                onClick={() => console.log('卡片2点击')}
              />
              <Card
                type="news"
                image={news3Img}
                title="战术装备系统全面升级"
                date="2025-01-13"
                href="#"
                onClick={() => console.log('卡片3点击')}
              />
            </NewsCardList>
          </div>
        </section>

        {/* 技能卡片示例 */}
        <section className="demo-section">
          <h2>Skill Cards 技能卡片</h2>
          <div className="demo-content">
            <SkillCardList>
              <Card type="skill" icon={ico1Img} title="战术部署" href="#" />
              <Card type="skill" icon={ico2Img} title="火力支援" href="#" />
              <Card type="skill" icon={ico3Img} title="侦察追踪" href="#" />
            </SkillCardList>
          </div>
        </section>

        {/* 设计理念 */}
        <section className="demo-section">
          <h2>Design Philosophy / 设计理念</h2>
          <div className="design-philosophy">
            <div className="philosophy-item">
              <h3>[ 01 ] 军事科技风</h3>
              <p>灵感来源于现代军事装备的HUD界面</p>
            </div>
            <div className="philosophy-item">
              <h3>[ 02 ] 荧光绿主色</h3>
              <p>夜视仪绿色，象征高科技与精准</p>
            </div>
            <div className="philosophy-item">
              <h3>[ 03 ] 极简交互</h3>
              <p>减法设计，每个元素都有明确目的</p>
            </div>
            <div className="philosophy-item">
              <h3>[ 04 ] 克制美学</h3>
              <p>不用花哨装饰，专注功能性第一</p>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="app-footer">
        <p>DF React UI Component Library</p>
        <p>基于《三角洲行动》官网样式 · 军事科技美学</p>
      </footer>
    </div>
  );
}

export default App;
