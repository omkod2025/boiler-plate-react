import { useState, type ReactNode } from 'react'
import Alert from '@/components/Alert/Alert'
import Avatar from '@/components/Avatar/Avatar'
import Badge from '@/components/Badge/Badge'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Checkbox from '@/components/Checkbox/Checkbox'
import Input from '@/components/Input/Input'
import Modal from '@/components/Modal/Modal'
import RadioGroup from '@/components/Radio/RadioGroup'
import Select from '@/components/Select/Select'
import Skeleton from '@/components/Skeleton/Skeleton'
import Spinner from '@/components/Spinner/Spinner'
import Switch from '@/components/Switch/Switch'
import Tabs from '@/components/Tabs/Tabs'
import Textarea from '@/components/Textarea/Textarea'
import Tooltip from '@/components/Tooltip/Tooltip'
import styles from './ComponentsPage.module.css'

// Demo data is static, so it lives at module level
const roleOptions = [
  { value: 'designer', label: 'Designer' },
  { value: 'developer', label: 'Developer' },
  { value: 'manager', label: 'Product manager' },
]

const planOptions = [
  { value: 'free', label: 'Free', hint: 'Up to 3 projects' },
  { value: 'pro', label: 'Pro', hint: 'Unlimited projects' },
  { value: 'team', label: 'Team', hint: 'Coming soon', disabled: true },
]

const tabItems = [
  { id: 'overview', label: 'Overview', content: <p>Project summary and recent activity.</p> },
  { id: 'members', label: 'Members', content: <p>People who can view and edit this project.</p> },
  { id: 'settings', label: 'Settings', content: <p>Name, visibility and danger zone.</p> },
  { id: 'billing', label: 'Billing', content: null, disabled: true },
]

function Showcase({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.showcase}>
      <h2 className={styles.showcaseTitle}>{title}</h2>
      {children}
    </section>
  )
}

function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [showAlert, setShowAlert] = useState(true)
  const [plan, setPlan] = useState('free')
  const [email, setEmail] = useState('')
  const emailError = email && !email.includes('@') ? 'Enter an email address, like name@example.com' : undefined

  const save = () => {
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setModalOpen(false)
    }, 1000)
  }

  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <h1>Components</h1>
        <p>
          Shared building blocks from <code>src/components</code>. Use them on any page.
        </p>
      </header>

      <Showcase title="Button">
        <div className={styles.row}>
          <Button>Primary</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Delete</Button>
        </div>
        <div className={styles.row}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button loading>Saving</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Showcase>

      <Showcase title="Form controls">
        <div className={styles.grid}>
          <Input
            label="Email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            required
          />
          <Input label="Display name" hint="Shown on your public profile" />
          <Select label="Role" options={roleOptions} placeholder="Choose a role" defaultValue="" />
          <Input label="Workspace" value="acme" disabled readOnly />
          <div className={styles.span2}>
            <Textarea label="Bio" hint="Up to 160 characters" maxLength={160} />
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.stack}>
            <Checkbox label="Email me about product updates" defaultChecked />
            <Checkbox label="Share usage data" hint="Helps us find and fix problems" />
            <Checkbox label="Beta features" disabled />
          </div>
          <RadioGroup label="Plan" options={planOptions} value={plan} onChange={setPlan} />
          <div className={styles.stack}>
            <Switch label="Dark mode follows system" defaultChecked />
            <Switch label="Notifications" />
            <Switch label="Two-factor authentication" disabled />
          </div>
        </div>
      </Showcase>

      <Showcase title="Badge and Avatar">
        <div className={styles.row}>
          <Badge>Draft</Badge>
          <Badge tone="accent">New</Badge>
          <Badge tone="success">Paid</Badge>
          <Badge tone="warning">Pending</Badge>
          <Badge tone="danger">Overdue</Badge>
        </div>
        <div className={styles.row}>
          <Avatar name="Somchai Jaidee" size="sm" />
          <Avatar name="Malee Srisuk" />
          <Avatar name="Ada Lovelace" size="lg" />
          <Avatar name="Broken Image" src="/does-not-exist.png" />
        </div>
      </Showcase>

      <Showcase title="Alert">
        <div className={styles.stack}>
          <Alert title="New version available">Refresh the page to get the latest features.</Alert>
          <Alert tone="success" title="Changes saved" />
          <Alert tone="warning" title="Your trial ends in 3 days">
            Add a payment method to keep your projects.
          </Alert>
          {showAlert ? (
            <Alert tone="danger" title="Payment failed" onDismiss={() => setShowAlert(false)}>
              Your card was declined. Update your card details and try again.
            </Alert>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className={styles.alignStart}
              onClick={() => setShowAlert(true)}
            >
              Show dismissed alert
            </Button>
          )}
        </div>
      </Showcase>

      <Showcase title="Card">
        <div className={styles.grid}>
          <Card
            title="Website redesign"
            description="Updated 2 hours ago"
            action={<Badge tone="success">Active</Badge>}
            footer={
              <>
                <Button variant="ghost" size="sm">Archive</Button>
                <Button size="sm">Open</Button>
              </>
            }
          >
            12 tasks left before launch.
          </Card>
          <Card title="Loading state">
            <div className={styles.stack}>
              <div className={styles.row}>
                <Skeleton shape="circle" width={40} />
                <div className={styles.grow}>
                  <Skeleton width="60%" />
                </div>
              </div>
              <Skeleton />
              <Skeleton width="80%" />
              <Spinner size="sm" />
            </div>
          </Card>
        </div>
      </Showcase>

      <Showcase title="Tabs">
        <Tabs label="Project sections" items={tabItems} />
      </Showcase>

      <Showcase title="Modal and Tooltip">
        <div className={styles.row}>
          <Button onClick={() => setModalOpen(true)}>Edit project</Button>
          <Tooltip content="Copies the link to your clipboard">
            <Button variant="outline">Share</Button>
          </Tooltip>
        </div>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Edit project"
          description="Changes are visible to everyone on the project."
          footer={
            <>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button loading={saving} onClick={save}>Save changes</Button>
            </>
          }
        >
          <Input label="Project name" defaultValue="Website redesign" />
        </Modal>
      </Showcase>
    </div>
  )
}

export default ComponentsPage
