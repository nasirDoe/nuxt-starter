<script lang="ts" setup>
import type { NewsParams } from '~/types'

const { listNews } = useApi()

const params: NewsParams = reactive({
  limit: 4,
  page: 1,
  q: '',
  category_id: '',
})

const { data, isLoading } = useQuery({
  queryKey: ['news', params.page],
  queryFn: () => listNews(params),
})

const dataResult = computed(() => data.value?.data)
</script>

<template>
  <div max-w-5xl mx-a>
    <h1 v-if="isLoading" text-3xl font-bold>Loading...</h1>
    <div v-else>
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
