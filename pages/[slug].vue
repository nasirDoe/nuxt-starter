<script setup lang="ts">
import type { NewDetailResponse } from '~/types'

const slug = useRouteParam<string>('slug')

const { pending, data } = usePxData<NewDetailResponse>(`/post/${slug.value}`, {
  cache: false,
})
</script>

<template>
  <div max-w-5xl mx-a>
    <template v-if="pending">
      <h1 text="3xl emerald" animate-pulse>Loading...</h1>
    </template>
    <template v-else>
      <h1 text="3xl amber">
        {{ data.data.title }}
      </h1>
      <div v-html="data.data.content " />
    </template>
  </div>
</template>
