import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/blog_')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog_"!</div>
}
