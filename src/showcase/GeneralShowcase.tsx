import {
  DownloadOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  SmileOutlined,
} from '@ant-design/icons'
import { Button, FloatButton, Space, Typography } from 'antd'
import Section from './Section'

const { Title, Paragraph, Text, Link } = Typography

/** General: Button, FloatButton, Icon, Typography */
function GeneralShowcase() {
  return (
    <>
      <Section title="Button">
        <Space orientation="vertical" size="middle">
          <Space wrap>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
          </Space>
          <Space wrap>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            <Button type="primary" loading>
              Loading
            </Button>
            <Button danger>Danger</Button>
            <Button disabled>Disabled</Button>
          </Space>
          <Space wrap>
            <Button size="large">Large</Button>
            <Button size="middle">Middle</Button>
            <Button size="small">Small</Button>
          </Space>
        </Space>
      </Section>

      <Section title="FloatButton">
        <div style={{ position: 'relative', height: 120, border: '1px dashed #d9d9d9' }}>
          <FloatButton
            icon={<QuestionCircleOutlined />}
            tooltip="FloatButton (static position for demo)"
            style={{ position: 'absolute', insetInlineEnd: 24, insetBlockEnd: 24 }}
          />
          <FloatButton.Group
            shape="circle"
            style={{ position: 'absolute', insetInlineEnd: 80, insetBlockEnd: 24 }}
          >
            <FloatButton icon={<PlusOutlined />} />
            <FloatButton icon={<SmileOutlined />} />
          </FloatButton.Group>
        </div>
      </Section>

      <Section title="Icon (@ant-design/icons)">
        <Space size="large">
          <SmileOutlined style={{ fontSize: 24 }} />
          <DownloadOutlined style={{ fontSize: 24 }} />
          <SearchOutlined style={{ fontSize: 24 }} />
          <QuestionCircleOutlined style={{ fontSize: 24 }} />
        </Space>
      </Section>

      <Section title="Typography">
        <Title level={1}>Heading 1</Title>
        <Title level={2}>Heading 2</Title>
        <Title level={3}>Heading 3</Title>
        <Paragraph>
          This is a <Text strong>Typography.Paragraph</Text> with <Text type="secondary">secondary</Text>,{' '}
          <Text type="danger">danger</Text>, <Text mark>marked</Text>, <Text code>code</Text> and{' '}
          <Text underline>underline</Text> text variants.
        </Paragraph>
        <Link href="https://ant.design" target="_blank">
          Typography.Link to ant.design
        </Link>
      </Section>
    </>
  )
}

export default GeneralShowcase
