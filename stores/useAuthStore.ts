interface User {
  id: number
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  return {
    user,
    isLoggedIn,
  }
})
