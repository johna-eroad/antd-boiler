import DataDisplayShowcase from './DataDisplayShowcase'
import DataEntryShowcase from './DataEntryShowcase'
import FeedbackShowcase from './FeedbackShowcase'
import GeneralShowcase from './GeneralShowcase'
import LayoutShowcase from './LayoutShowcase'
import NavigationShowcase from './NavigationShowcase'
import OtherShowcase from './OtherShowcase'

export interface ShowcaseCategory {
  key: string
  label: string
  component: React.ComponentType
}

/** Registry of every Ant Design component category, grouped the same way as the
 * official Ant Design docs (https://ant.design/components/overview/). Add new
 * component demos to the relevant *Showcase.tsx file, or add a new category here. */
export const showcaseCategories: ShowcaseCategory[] = [
  { key: 'general', label: 'General', component: GeneralShowcase },
  { key: 'layout', label: 'Layout', component: LayoutShowcase },
  { key: 'navigation', label: 'Navigation', component: NavigationShowcase },
  { key: 'data-entry', label: 'Data Entry', component: DataEntryShowcase },
  { key: 'data-display', label: 'Data Display', component: DataDisplayShowcase },
  { key: 'feedback', label: 'Feedback', component: FeedbackShowcase },
  { key: 'other', label: 'Other', component: OtherShowcase },
]
