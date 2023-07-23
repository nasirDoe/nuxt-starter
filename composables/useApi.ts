import type { NewsParams, NewsResponse } from '~/types'

export default function useApi() {
  async function listNews(params: NewsParams): Promise<NewsResponse> {
    return await $px('posts', {
      params,
    })
  }

  return {
    listNews,
  }
}
