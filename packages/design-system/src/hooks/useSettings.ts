import useSWR, { mutate } from 'swr'

const key = 'settings'
const initialStore = { foo: 'bar' }

function useSettings() {
  const { data, error } = useSWR(key, {
    fallbackData: initialStore,
  })

  return {
    settings: data,
    isError: error,
    isLoading: !error && !data,
    key,
  }
}

const setSettings = async (data, value) => {
  await mutate(key, { ...data, foo: value }, false)
}

export { setSettings }
export default useSettings
