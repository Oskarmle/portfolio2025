import { createFileRoute } from '@tanstack/react-router'

import styles from './what-have-i-done.module.css'

export const Route = createFileRoute('/what-have-i-done/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/what-have-i-done/"!</div>
}
