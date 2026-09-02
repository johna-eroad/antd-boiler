import { Divider, Flex, Layout, Space, Splitter, Typography, Col, Row } from 'antd'
import Section from './Section'

const { Header, Sider, Content, Footer } = Layout
const { Text } = Typography

const box: React.CSSProperties = {
  padding: 16,
  background: '#f5f5f5',
  border: '1px solid #e5e4e7',
  textAlign: 'center',
}

/** Layout: Divider, Flex, Grid (Row/Col), Layout, Space, Splitter */
function LayoutShowcase() {
  return (
    <>
      <Section title="Divider">
        <Text>Above</Text>
        <Divider />
        <Text>Below (plain)</Text>
        <Divider titlePlacement="left">Left Text</Divider>
        <Text>Content</Text>
        <Divider dashed />
        <Space>
          <Text>Vertical</Text>
          <Divider vertical />
          <Text>Divider</Text>
        </Space>
      </Section>

      <Section title="Flex">
        <Flex gap="middle" wrap>
          <div style={box}>Item 1</div>
          <div style={box}>Item 2</div>
          <div style={box}>Item 3</div>
        </Flex>
      </Section>

      <Section title="Grid (Row / Col)">
        <Row gutter={16}>
          <Col span={8}>
            <div style={box}>span=8</div>
          </Col>
          <Col span={8}>
            <div style={box}>span=8</div>
          </Col>
          <Col span={8}>
            <div style={box}>span=8</div>
          </Col>
        </Row>
      </Section>

      <Section title="Layout">
        <Layout style={{ height: 220 }}>
          <Header style={{ color: '#fff', textAlign: 'center' }}>Header</Header>
          <Layout>
            <Sider width={120} style={{ background: '#e6e6e6' }}>
              <div style={{ padding: 16 }}>Sider</div>
            </Sider>
            <Content style={{ padding: 16, background: '#fafafa' }}>Content</Content>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Section>

      <Section title="Space">
        <Space orientation="vertical">
          <Space>
            <div style={box}>A</div>
            <div style={box}>B</div>
            <div style={box}>C</div>
          </Space>
          <Text type="secondary">Space orientation="vertical" wraps horizontal Space groups</Text>
        </Space>
      </Section>

      <Section title="Splitter">
        <Splitter style={{ height: 120, border: '1px solid #e5e4e7' }}>
          <Splitter.Panel defaultSize="40%" min="20%" max="70%">
            <div style={{ padding: 16 }}>Panel 1</div>
          </Splitter.Panel>
          <Splitter.Panel>
            <div style={{ padding: 16 }}>Panel 2</div>
          </Splitter.Panel>
        </Splitter>
      </Section>
    </>
  )
}

export default LayoutShowcase
