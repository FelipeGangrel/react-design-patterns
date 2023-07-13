/**
 * This hook is responsible for fetching users from the API.
 *
 * It uses the pagination reducer to manage the state of the users.
 * It also uses the parseLinkHeader function to parse the link header
 * from the API response.
 *
 * The fetchUsers function is responsible for fetching the users from the API.
 * It uses the AbortController to abort the fetch request when the component
 * is unmounted.
 */

import { useCallback, useEffect, useReducer } from 'react'
import { paginationReducer } from '../reducers'
import { parseLinkHeader } from '../utils'
import { User } from '../types'

const ENDPOINT = 'http://localhost:3001/users'

export const useUsers = () => {
  const [pagination, dispatch] = useReducer(paginationReducer, {
    page: 1,
    search: '',
    users: [],
    hasNextPage: false,
  })

  const handleLoadMore = useCallback(() => {
    dispatch({
      type: 'LOAD_MORE',
    })
  }, [])

  const handleSearch = useCallback((search: string) => {
    dispatch({
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
        dispatch({
          type: 'SET_HAS_NEXT_PAGE',
          payload: !!linkHeader.next,
        })
        return response.json()
      })
      .then((users: User[]) => {
        dispatch({
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
