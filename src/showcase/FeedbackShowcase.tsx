import { App, Alert, Button, Drawer, Popconfirm, Progress, Result, Skeleton, Space, Spin, Watermark } from 'antd'
import { useState } from 'react'
import Section from './Section'

/** Feedback: Alert, Drawer, Message, Modal, Notification, Popconfirm, Progress, Result,
 * Skeleton, Spin, Watermark
 *
 * Message / Modal / Notification use antd's `App` component context (App.useApp())
 * rather than the static antd.message / antd.Modal / antd.notification methods, which
 * is the recommended pattern in modern Ant Design apps (see src/main.tsx for the
 * top-level <App> provider).
 */
function FeedbackShowcase() {
  const { message, modal, notification } = App.useApp()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Section title="Alert">
        <Space orientation="vertical" style={{ width: '100%', maxWidth: 480 }}>
          <Alert type="success" title="Success Text" showIcon />
          <Alert type="info" title="Info Text" showIcon />
          <Alert type="warning" title="Warning Text" showIcon closable />
          <Alert type="error" title="Error Text" showIcon />
        </Space>
      </Section>

      <Section title="Drawer">
        <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
        <Drawer title="Drawer title" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <p>Drawer content</p>
        </Drawer>
      </Section>

      <Section title="Message">
        <Button onClick={() => message.success('This is a success message')}>Show Message</Button>
      </Section>

      <Section title="Modal">
        <Button
          onClick={() =>
            modal.confirm({
              title: 'Confirm action',
              content: 'Are you sure you want to continue?',
            })
          }
        >
          Open Modal
        </Button>
      </Section>

      <Section title="Notification">
        <Button
          onClick={() =>
            notification.open({
              title: 'Notification title',
              description: 'This is the content of the notification.',
            })
          }
        >
          Open Notification
        </Button>
      </Section>

      <Section title="Popconfirm">
        <Popconfirm title="Delete this item?" onConfirm={() => message.success('Deleted')}>
          <Button danger>Delete</Button>
        </Popconfirm>
      </Section>

      <Section title="Progress">
        <Space size="large">
          <Progress type="line" percent={60} style={{ width: 200 }} />
          <Progress type="circle" percent={75} size={64} />
          <Progress type="dashboard" percent={90} size={64} />
        </Space>
      </Section>

      <Section title="Result">
        <Result status="success" title="Successfully Completed" subTitle="Order number: 2017182818828182881" />
      </Section>

      <Section title="Skeleton">
        <Skeleton active />
      </Section>

      <Section title="Spin">
        <Spin description="Loading">
          <div style={{ padding: 24, border: '1px solid #e5e4e7', minHeight: 60 }} />
        </Spin>
      </Section>

      <Section title="Watermark">
        <Watermark content="antd-boiler">
          <div style={{ height: 120, border: '1px solid #e5e4e7' }} />
        </Watermark>
      </Section>
    </>
  )
}

export default FeedbackShowcase
