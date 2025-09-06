/**
 * @ref https://gist.github.com/nandorojo/c93f00c2a378264addfea3777174ccfe
 * { @nandorojo } = props
 */
import type { SWRInfiniteConfiguration } from 'swr/infinite'

import _get from 'lodash/get'
import _last from 'lodash/last'
import { useCallback, useMemo, useRef } from 'react'
import useSWRInfinite from 'swr/infinite'

type PageKeyMaker<Page, Key extends any[]> = (
  index: number,
  previousPageData?: Page,
  /**
   * Mutable ref object. Set this to `true` before the request and `false` afterwards if the request is fetching more.
   *
   * For example, if the request has a `lastDocId`, it should set it to `true` before fetching.
   *
   * This prevents multiple page increases at once.
   */
) => Key

export type UseSWRInfinitePagesConfig<Page extends object> =
  SWRInfiniteConfiguration<Page> & {
    dataPath: keyof Page | string[]
    limit?: number
  }

type PageFetcher<Page, Key extends any[]> = (...params: Key) => Page | Promise<Page>

const useSWRInfinitePages = <
  Page extends object,
  Data,
  /**
   * Path to your list data
   */
  Key extends any[] = any[],
>(
  key: PageKeyMaker<Page, Key>,
  fetcher: PageFetcher<Page, Key>,
  { dataPath: path, limit = 20, ...options }: UseSWRInfinitePagesConfig<Page>,
) => {
  const isFetching = useRef(false)
  const dataPath = Array.isArray(path) ? path.join('.') : path

  const { data, error, isValidating, mutate, setSize, size } = useSWRInfinite<Page>(
    (index, previousPage) => {
      const previousPageData = _get(previousPage, dataPath)
      // we've reached the last page, no more fetching
      if (previousPageData?.length === 0) return null
      // @todo(swr) is this correct?
      // this means we haven't fetched the previous page yet, so don't fetch multiple at once.
      // if (index > 0 && !previousPageData) return null
      if (isFetching.current && index) return null
      if (previousPageData && previousPageData.length < limit) {
        return null
      }

      return key(index, previousPageData)
    },
    async (...key: Key) => {
      let val: Page
      try {
        isFetching.current = true
        val = await fetcher(...key)
        if (isFetching.current) {
          isFetching.current = false
        }
      } catch (e) {
        if (isFetching.current) {
          isFetching.current = false
        }
        throw e
      }

      return val
    },
    { revalidateAll: false, revalidateFirstPage: false, ...options },
  )

  const firstPageData = _get(data?.[0], dataPath)
  const lastPage = _last(data)
  const lastPageData = _get(lastPage, dataPath)
  const canFetchMore = lastPageData?.length && lastPageData.length === limit

  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (isValidating && size > 1 && data && typeof data[size - 1] === 'undefined')

  const isRefreshing = isValidating && data?.length === size
  const isEmpty = firstPageData?.length === 0

  const fetchMore = useCallback(() => {
    if (isLoadingMore || isFetching.current) return null

    void setSize((size) => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      return size + 1
    })
  }, [isLoadingMore, setSize])

  const flat = useMemo(() => {
    return data?.flatMap((page) => _get(page, dataPath) as Data).filter(Boolean) as
      | (Data extends readonly (infer InnerArr)[] ? InnerArr : Data)[]
      | undefined
  }, [data, dataPath])

  return {
    canFetchMore,
    data: flat,
    error,
    fetchMore,
    isEmpty,
    isFetchingMore: !!isLoadingMore,
    isLoadingInitialData,
    isLoadingMore,
    isRefreshing,
    isValidating,
    lastPage,
    mutate,
    pages: data,
    size,
  }
}

export default useSWRInfinitePages
