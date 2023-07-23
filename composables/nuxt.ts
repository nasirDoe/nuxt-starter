export function useRouteParam<T>(name: string, init?: T): ComputedRef<T> {
  const route = useRoute()
  return computed(() => (route.params as any)[name] ?? init)
}

export function useRouteQuery<T>(name: string, init?: T): ComputedRef<T> {
  const route = useRoute()
  return computed(() => (route.query[name] as any) ?? init)
}
