import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import {
  Avatar,
  Badge,
  Button,
  Calendar,
  Card,
  Carousel,
  Collapse,
  Descriptions,
  Empty,
  Image,
  Listy,
  Popover,
  QRCode,
  Segmented,
  Space,
  Statistic,
  Table,
  Tag,
  Timeline,
  Tooltip,
  Tour,
  Tree,
} from 'antd'
import type { TableColumnsType, TourProps } from 'antd'
import { useRef, useState } from 'react'
import Section from './Section'

const DEMO_IMAGE =
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'

interface Person {
  key: string
  name: string
  age: number
  address: string
}

const tableColumns: TableColumnsType<Person> = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
]

const tableData: Person[] = [
  { key: '1', name: 'John Doe', age: 32, address: '10 Downing St' },
  { key: '2', name: 'Jane Smith', age: 28, address: '221B Baker St' },
]

const listData = ['Racing car sprays burning fuel', 'Japanese princess to wed', 'Australian walks 100km']

/** Data Display: Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty,
 * Image, Listy, Popover, QRCode, Segmented, Statistic, Table, Tag, Timeline, Tooltip,
 * Tour, Tree */
function DataDisplayShowcase() {
  const [tourOpen, setTourOpen] = useState(false)
  const tourRef = useRef<HTMLButtonElement>(null)

  const tourSteps: TourProps['steps'] = [
    {
      title: 'Tour step',
      description: 'This button was the target of the Tour step.',
      target: () => tourRef.current!,
    },
  ]

  return (
    <>
      <Section title="Avatar">
        <Space size="middle">
          <Avatar icon={<UserOutlined />} />
          <Avatar src={DEMO_IMAGE} />
          <Avatar style={{ backgroundColor: '#87d068' }}>AB</Avatar>
          <Avatar.Group max={{ count: 2 }}>
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
            <Avatar icon={<UserOutlined />} />
          </Avatar.Group>
        </Space>
      </Section>

      <Section title="Badge">
        <Space size="large">
          <Badge count={5}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
          <Badge dot>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
          <Badge status="success" text="Success" />
        </Space>
      </Section>

      <Section title="Calendar">
        <div style={{ border: '1px solid #e5e4e7', maxWidth: 320 }}>
          <Calendar fullscreen={false} />
        </div>
      </Section>

      <Section title="Card">
        <Card title="Card title" style={{ maxWidth: 320 }} extra={<a href="#navigation">More</a>}>
          Card content
        </Card>
      </Section>

      <Section title="Carousel">
        <Carousel style={{ maxWidth: 480 }}>
          {['#364d79', '#4a5b8c', '#5c6ba0'].map((color) => (
            <div key={color}>
              <div style={{ height: 120, color: '#fff', textAlign: 'center', lineHeight: '120px', background: color }}>
                Slide
              </div>
            </div>
          ))}
        </Carousel>
      </Section>

      <Section title="Collapse">
        <Collapse
          items={[
            { key: '1', label: 'Panel 1', children: <p>Content for panel 1</p> },
            { key: '2', label: 'Panel 2', children: <p>Content for panel 2</p> },
          ]}
        />
      </Section>

      <Section title="Descriptions">
        <Descriptions
          bordered
          items={[
            { key: '1', label: 'Name', children: 'John Doe' },
            { key: '2', label: 'Age', children: 32 },
            { key: '3', label: 'Address', children: '10 Downing St' },
          ]}
        />
      </Section>

      <Section title="Empty">
        <Empty />
      </Section>

      <Section title="Image">
        <Image width={120} src={DEMO_IMAGE} />
      </Section>

      <Section title="Listy">
        <Listy
          items={listData}
          rowKey={(item) => item}
          itemRender={(item) => (
            <div style={{ padding: '8px 12px', borderBottom: '1px solid #e5e4e7' }}>{item}</div>
          )}
          style={{ maxWidth: 480, border: '1px solid #e5e4e7' }}
        />
      </Section>

      <Section title="Popover">
        <Popover content="This is popover content" title="Popover title">
          <Button>Hover me</Button>
        </Popover>
      </Section>

      <Section title="QRCode">
        <QRCode value="https://ant.design" />
      </Section>

      <Section title="Segmented">
        <Segmented options={['Daily', 'Weekly', 'Monthly']} />
      </Section>

      <Section title="Statistic">
        <Space size="large">
          <Statistic title="Active Users" value={11280} />
          <Statistic title="Growth" value={9.3} suffix="%" precision={1} />
        </Space>
      </Section>

      <Section title="Table">
        <Table columns={tableColumns} dataSource={tableData} pagination={false} />
      </Section>

      <Section title="Tag">
        <Space>
          <Tag color="blue">Blue</Tag>
          <Tag color="green">Green</Tag>
          <Tag color="volcano">Volcano</Tag>
          <Tag closeIcon={<CloseOutlined />}>Closable</Tag>
        </Space>
      </Section>

      <Section title="Timeline">
        <Timeline
          items={[
            { content: 'Create a services site 2015-09-01' },
            { content: 'Solve initial network problems 2015-09-01' },
            { content: 'Technical testing 2015-09-01', color: 'green' },
          ]}
        />
      </Section>

      <Section title="Tooltip">
        <Tooltip title="Prompt text">
          <Button>Hover for Tooltip</Button>
        </Tooltip>
      </Section>

      <Section title="Tour">
        <Button ref={tourRef} onClick={() => setTourOpen(true)}>
          Begin Tour
        </Button>
        <Tour open={tourOpen} onClose={() => setTourOpen(false)} steps={tourSteps} />
      </Section>

      <Section title="Tree">
        <Tree
          defaultExpandAll
          treeData={[
            {
              title: 'parent',
              key: '0-0',
              children: [
                { title: 'child 1', key: '0-0-0' },
                { title: 'child 2', key: '0-0-1' },
              ],
            },
          ]}
        />
      </Section>
    </>
  )
}

export default DataDisplayShowcase
