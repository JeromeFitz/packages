import useSWR from 'swr'

type TimeRange = 'long_term' | 'medium_term' | 'short_term'
interface InitialStoreProps {
  limit: number
  time_range: TimeRange
}

const key = 'spotify'
const initialStore: InitialStoreProps = {
  limit: 10,
  time_range: 'short_term',
}

function useSpotify() {
  const { data, error, mutate } = useSWR(key, {
    fallbackData: initialStore,
  })

  const setSpotifyLimit = async (data: any, value: number) => {
    await mutate({ ...data, limit: value })
  }

  const setSpotifyTimeRange = async (data: any, value: TimeRange) => {
    await mutate({ ...data, time_range: value })
  }

  return {
    data,
    isError: error,
    isLoading: !error && !data,
    key,
    setSpotifyLimit,
    setSpotifyTimeRange,
  }
}

export default useSpotify
