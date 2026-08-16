import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog_/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog_/"!</div>
}
