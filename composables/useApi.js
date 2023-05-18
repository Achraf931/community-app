import { useAuthStore } from '@/stores/AuthStore'
export const useApi = (path, options = {}) => {
  const config = useRuntimeConfig()
  // modify options as needed
  options.baseURL = config.public.strapi.url
  options.headers = {
    Authorization: `Bearer ${useAuthStore().jwt}`
  }
  return useFetch(`api/${path}`, options)
}
