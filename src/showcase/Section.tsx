import { Typography } from 'antd'
import type { ReactNode } from 'react'

const { Title } = Typography

interface SectionProps {
  title: string
  children: ReactNode
}

/** Consistent heading + spacing wrapper for a single component demo. */
function Section({ title, children }: SectionProps) {
  return (
    <div style={{ marginBottom: 40 }}>
      <Title level={4}>{title}</Title>
      <div>{children}</div>
    </div>
  )
}

export default Section
