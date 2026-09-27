import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import styles from './Tabs.module.css'

export type TabItem = {
  id: string
  label: ReactNode
  content: ReactNode
  disabled?: boolean
}

type TabsProps = {
  items: TabItem[]
  /** Controlled active tab id */
  value?: string
  defaultValue?: string
  onChange?: (id: string) => void
  /** Accessible name for the tab list */
  label: string
}

/** WAI-ARIA tabs: arrow keys, Home and End move between tabs */
function Tabs({ items, value, defaultValue, onChange, label }: TabsProps) {
  const baseId = useId()
  const [internalValue, setInternalValue] = useState(defaultValue ?? items[0]?.id)
  const activeId = value ?? internalValue
  const tabRefs = useRef(new Map<string, HTMLButtonElement>())

  const select = (id: string) => {
    if (value === undefined) setInternalValue(id)
    onChange?.(id)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const enabled = items.filter((item) => !item.disabled)
    const index = enabled.findIndex((item) => item.id === activeId)
    const nextIndex = {
      ArrowRight: (index + 1) % enabled.length,
      ArrowLeft: (index - 1 + enabled.length) % enabled.length,
      Home: 0,
      End: enabled.length - 1,
    }[event.key]
    if (nextIndex === undefined) return

    event.preventDefault()
    const next = enabled[nextIndex]
    select(next.id)
    tabRefs.current.get(next.id)?.focus()
  }

  const activeItem = items.find((item) => item.id === activeId)

  return (
    <div className={styles.tabs}>
      <div role="tablist" aria-label={label} className={styles.list} onKeyDown={handleKeyDown}>
        {items.map((item) => {
          const selected = item.id === activeId
          return (
            <button
              key={item.id}
              ref={(node) => {
                if (node) tabRefs.current.set(item.id, node)
                else tabRefs.current.delete(item.id)
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              className={styles.tab}
              onClick={() => select(item.id)}
            >
              {item.label}
            </button>
          )
        })}
      </div>
      {activeItem ? (
        <div
          role="tabpanel"
          id={`${baseId}-panel-${activeItem.id}`}
          aria-labelledby={`${baseId}-tab-${activeItem.id}`}
          tabIndex={0}
          className={styles.panel}
        >
          {activeItem.content}
        </div>
      ) : null}
    </div>
  )
}

export default Tabs
