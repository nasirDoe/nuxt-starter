<script lang="ts" setup>
import type { NewsParams } from '~/types'

const { listNews } = useApi()

const params: NewsParams = reactive({
  page: 1,
  limit: 3,
  q: '',
  category_id: '',
})

const { data, isLoading, refetch } = useQuery({
  queryKey: ['news', params.page],
  queryFn: () => listNews(params),
})

watch(() => params.q, async (val) => {
  await handleSearch(val)
})

const dataResult = computed(() => data.value?.data)

const handleSearch = useDebounceFn(async (query: string) => {
  params.q = query
  await refetch()
}, 250)
</script>

<template>
  <div max-w-5xl mx-a>
    <h1 v-if="isLoading" text-3xl font-bold>Loading...</h1>
    <div v-else>
      <input
        v-model="params.q"
        type="text"
        p="x2 y2"
        class="border border-emerald rounded border-solid outline-none"
        placeholder="Pencarian"
      />
      <template v-for="item in dataResult" :key="item.id">
        <h2 text="2xl emerald">
          <NuxtLink :to="`/${item.slug}`">
            {{ item.title }}
          </NuxtLink>
        </h2>
      </template>
    </div>
  </div>
</template>

<style></style>
