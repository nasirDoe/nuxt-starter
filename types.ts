export interface NewsParams {
  q: string
  page: number
  limit: number
  category_id: number | string
}

export interface Category {
  id: number
  name: string
  slug: string
}

export interface News {
  id: number
  title: string
  slug: string
  publish_date: string
  total_views: number
  image_url: string
  content: string
  category: Category
}

export interface Links {
  first: string
  last: string
  prev: string | null
  next: string | null
}

export interface LinkItem {
  url: string | null
  label: string
  active: boolean
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: LinkItem[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface NewsResponse {
  data: News[]
  links: Links
  meta: Meta
}

export interface NewsDetail {
  id: number
  title: string
  slug: string
  image_url: string
  total_views: number
  publish_date: string
  meta_keyword: string | null
  meta_description: string | null
  content: string
  category: Category
}

export interface NewDetailResponse {
  data: NewsDetail
}
