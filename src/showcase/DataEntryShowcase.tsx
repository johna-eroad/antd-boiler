import { UploadOutlined } from '@ant-design/icons'
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from 'antd'
import type { TransferProps } from 'antd'
import { useState } from 'react'
import Section from './Section'

const cascaderOptions = [
  {
    value: 'newZealand',
    label: 'New Zealand',
    children: [
      {
        value: 'aucklandRegion',
        label: 'Auckland Region',
        children: [{ value: 'auckland', label: 'Auckland' }],
      },
    ],
  },
]

const treeSelectData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      { title: 'Child Node1', value: '0-0-0', key: '0-0-0' },
      { title: 'Child Node2', value: '0-0-1', key: '0-0-1' },
    ],
  },
  { title: 'Node2', value: '0-1', key: '0-1' },
]

const transferData: TransferProps['dataSource'] = Array.from({ length: 6 }).map((_, i) => ({
  key: `item-${i}`,
  title: `Item ${i + 1}`,
}))

/** Data Entry: AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input,
 * InputNumber, Mentions, Radio, Rate, Select, Slider, Switch, TimePicker, Transfer,
 * TreeSelect, Upload */
function DataEntryShowcase() {
  const [transferKeys, setTransferKeys] = useState<string[]>(['item-0'])

  return (
    <>
      <Section title="AutoComplete">
        <AutoComplete
          style={{ width: 240 }}
          options={[{ value: 'ant design' }, { value: 'ant design pro' }, { value: 'antd' }]}
          placeholder="Try typing 'ant'"
        />
      </Section>

      <Section title="Cascader">
        <Cascader style={{ width: 240 }} options={cascaderOptions} placeholder="Please select" />
      </Section>

      <Section title="Checkbox">
        <Checkbox defaultChecked>Single checkbox</Checkbox>
        <div style={{ marginTop: 12 }}>
          <Checkbox.Group
            options={['Apple', 'Pear', 'Orange']}
            defaultValue={['Apple']}
          />
        </div>
      </Section>

      <Section title="ColorPicker">
        <ColorPicker defaultValue="#1677ff" showText />
      </Section>

      <Section title="DatePicker">
        <DatePicker />
      </Section>

      <Section title="Form">
        <Form
          layout="vertical"
          style={{ maxWidth: 320 }}
          onFinish={(values) => console.log('Form values:', values)}
        >
          <Form.Item label="Username" name="username" rules={[{ required: true }]}>
            <Input placeholder="Enter username" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Enter password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Section>

      <Section title="Input">
        <Input placeholder="Basic Input" style={{ width: 240, marginBottom: 8 }} />
        <br />
        <Input.Password placeholder="Password" style={{ width: 240, marginBottom: 8 }} />
        <br />
        <Input.Search placeholder="Search" style={{ width: 240, marginBottom: 8 }} />
        <br />
        <Input.TextArea placeholder="TextArea" rows={2} style={{ width: 240 }} />
      </Section>

      <Section title="InputNumber">
        <InputNumber min={0} max={100} defaultValue={10} />
      </Section>

      <Section title="Mentions">
        <Mentions
          style={{ width: 240 }}
          placeholder="Type @ to mention someone"
          options={[
            { value: 'afc163', label: 'afc163' },
            { value: 'zombieJ', label: 'zombieJ' },
          ]}
        />
      </Section>

      <Section title="Radio">
        <Radio.Group defaultValue="a">
          <Radio value="a">Option A</Radio>
          <Radio value="b">Option B</Radio>
          <Radio value="c">Option C</Radio>
        </Radio.Group>
      </Section>

      <Section title="Rate">
        <Rate defaultValue={3} />
      </Section>

      <Section title="Select">
        <Select
          style={{ width: 240 }}
          defaultValue="lucy"
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
        />
      </Section>

      <Section title="Slider">
        <Slider defaultValue={30} style={{ width: 240 }} />
      </Section>

      <Section title="Switch">
        <Switch defaultChecked />
      </Section>

      <Section title="TimePicker">
        <TimePicker />
      </Section>

      <Section title="Transfer">
        <Transfer
          dataSource={transferData}
          targetKeys={transferKeys}
          onChange={(nextTargetKeys) => setTransferKeys(nextTargetKeys as string[])}
          render={(item) => item.title ?? ''}
        />
      </Section>

      <Section title="TreeSelect">
        <TreeSelect style={{ width: 240 }} treeData={treeSelectData} placeholder="Please select" />
      </Section>

      <Section title="Upload">
        <Upload beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Section>
    </>
  )
}

export default DataEntryShowcase
