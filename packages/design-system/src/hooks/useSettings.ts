import useSWR, { mutate } from 'swr'

const key = 'settings'
const initialStore = { foo: 'bar' }

function useSettings() {
  const { data, error } = useSWR(key, {
    fallbackData: initialStore,
  })

  return {
    isError: error,
    isLoading: !error && !data,
    key,
    settings: data,
  }
}

const setSettings = async (data, value) => {
  await mutate(key, { ...data, foo: value }, false)
}

export { setSettings }
export default useSettings
