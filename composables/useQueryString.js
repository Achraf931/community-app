import qs from 'qs'
export const useQueryString = (query) => {
  return qs.stringify(query, { encodeValuesOnly: true })
}
