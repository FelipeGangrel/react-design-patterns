import { useCallback, useEffect, useReducer } from 'react'
import { paginationReducer } from '../reducers'
import { parseLinkHeader } from '../utils'
import { User } from '../types'

const ENDPOINT = 'http://localhost:3001/users'

export const useUsers = () => {
  const [pagination, paginationDispatch] = useReducer(paginationReducer, {
    page: 1,
    search: '',
    users: [],
    hasNextPage: false,
  })

  const handleLoadMore = useCallback(() => {
    paginationDispatch({
      type: 'LOAD_MORE',
    })
  }, [])

  const handleSearch = useCallback((search: string) => {
    paginationDispatch({
      type: 'SEARCH',
      payload: search,
    })
  }, [])

  const fetchUsers = useCallback((): AbortController => {
    const url = `${ENDPOINT}?_sort=name&_page=${pagination.page}&name_like=${pagination.search}`

    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((response) => {
        const linkHeader = parseLinkHeader(response.headers.get('link') ?? '')
        paginationDispatch({
          type: 'SET_HAS_NEXT_PAGE',
          payload: !!linkHeader.next,
        })
        return response.json()
      })
      .then((users: User[]) => {
        paginationDispatch({
          type: 'SET_USERS',
          payload: users,
        })
      })

    return controller
  }, [pagination.page, pagination.search])

  useEffect(() => {
    const controller = fetchUsers()

    return () => {
      controller.abort()
    }
  }, [fetchUsers])

  return {
    ...pagination,
    handleLoadMore,
    handleSearch,
  }
}
