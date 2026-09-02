import { Layout, Menu, Typography } from 'antd'
import { useState } from 'react'
import './App.css'
import { showcaseCategories } from './showcase'

const { Header, Sider, Content } = Layout
const { Title } = Typography

function App() {
  const [selectedKey, setSelectedKey] = useState(showcaseCategories[0].key)
  const ActiveShowcase =
    showcaseCategories.find((category) => category.key === selectedKey)?.component ??
    showcaseCategories[0].component

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>
          antd-boiler
        </Title>
      </Header>
      <Layout>
        <Sider width={200} theme="light">
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={({ key }) => setSelectedKey(key)}
            items={showcaseCategories.map((category) => ({ key: category.key, label: category.label }))}
            style={{ height: '100%', borderInlineEnd: 0 }}
          />
        </Sider>
        <Content style={{ padding: 24, background: '#fff' }}>
          <ActiveShowcase />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
