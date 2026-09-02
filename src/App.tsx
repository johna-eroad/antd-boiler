import { SmileOutlined } from '@ant-design/icons'
import { Button, Space, Typography } from 'antd'
import { useState } from 'react'
import './App.css'

const { Title, Paragraph } = Typography

function App() {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <Title level={1}>antd-boiler</Title>
      <Paragraph>A test bed for AntD and Claude Design.</Paragraph>
      <Space>
        <Button type="primary" icon={<SmileOutlined />} onClick={() => setCount((c) => c + 1)}>
          Count is {count}
        </Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </Space>
    </section>
  )
}

export default App
