import { Affix, Button, ConfigProvider, Typography } from 'antd'
import Section from './Section'

const { Paragraph, Text } = Typography

/** Other: Affix, App, ConfigProvider */
function OtherShowcase() {
  return (
    <>
      <Section title="Affix">
        <div style={{ height: 160, overflow: 'auto', border: '1px solid #e5e4e7', padding: 8 }}>
          <Affix offsetTop={8}>
            <Button type="primary">Affixed while scrolling</Button>
          </Affix>
          <div style={{ height: 400, paddingTop: 16 }}>Scroll inside this box to see the Affix in action.</div>
        </div>
      </Section>

      <Section title="App">
        <Paragraph>
          The <Text code>App</Text> component wraps the whole application (see{' '}
          <Text code>src/main.tsx</Text>) and provides context so <Text code>message</Text>,{' '}
          <Text code>Modal</Text> and <Text code>notification</Text> can be consumed via the{' '}
          <Text code>App.useApp()</Text> hook, as demonstrated in the Feedback category.
        </Paragraph>
      </Section>

      <Section title="ConfigProvider">
        <Paragraph>
          <Text code>ConfigProvider</Text> lets you scope theme tokens, locale, and component
          defaults to part of the tree. Example below overrides <Text code>colorPrimary</Text>{' '}
          for a single nested Button:
        </Paragraph>
        <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
          <Button type="primary">Themed Button (green)</Button>
        </ConfigProvider>
      </Section>
    </>
  )
}

export default OtherShowcase
