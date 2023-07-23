import type { NewDetailResponse, NewsParams, NewsResponse } from '~/types'

export default function useApi() {
  const config = useRuntimeConfig()
  const apiUrl = config.public.apiUrl

  async function listNews(params: NewsParams): Promise<NewsResponse> {
    return await $fetch(`${apiUrl}/posts`, {
      params,
    })
  }

  async function findOne(slug: string): Promise<NewDetailResponse> {
    return await $px(`${apiUrl}/post/${slug}`)
  }

  return {
    listNews,
    findOne,
  }
}
