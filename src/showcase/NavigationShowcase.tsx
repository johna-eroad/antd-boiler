import { DownOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Anchor, Breadcrumb, Button, Dropdown, Menu, Pagination, Steps, Tabs } from 'antd'
import Section from './Section'

/** Navigation: Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs */
function NavigationShowcase() {
  return (
    <>
      <Section title="Anchor">
        <Anchor
          direction="horizontal"
          items={[
            { key: 'general', href: '#general', title: 'General' },
            { key: 'layout', href: '#layout', title: 'Layout' },
            { key: 'navigation', href: '#navigation', title: 'Navigation' },
          ]}
        />
      </Section>

      <Section title="Breadcrumb">
        <Breadcrumb
          items={[{ title: <HomeOutlined /> }, { title: 'Application' }, { title: 'Components' }]}
        />
      </Section>

      <Section title="Dropdown">
        <Dropdown
          menu={{
            items: [
              { key: '1', label: 'First option' },
              { key: '2', label: 'Second option' },
              { type: 'divider' },
              { key: '3', label: 'Danger option', danger: true },
            ],
          }}
        >
          <Button>
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </Section>

      <Section title="Menu">
        <Menu
          mode="horizontal"
          selectedKeys={['1']}
          items={[
            { key: '1', label: 'Home', icon: <HomeOutlined /> },
            { key: '2', label: 'Profile', icon: <UserOutlined /> },
            {
              key: '3',
              label: 'More',
              children: [
                { key: '3-1', label: 'Option A' },
                { key: '3-2', label: 'Option B' },
              ],
            },
          ]}
        />
      </Section>

      <Section title="Pagination">
        <Pagination defaultCurrent={1} total={100} />
      </Section>

      <Section title="Steps">
        <Steps
          current={1}
          items={[
            { title: 'Finished', content: 'Step 1 description' },
            { title: 'In Progress', content: 'Step 2 description' },
            { title: 'Waiting', content: 'Step 3 description' },
          ]}
        />
      </Section>

      <Section title="Tabs">
        <Tabs
          items={[
            { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
            { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
            { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
          ]}
        />
      </Section>
    </>
  )
}

export default NavigationShowcase
