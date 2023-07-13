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

  const fetchUsers = useCallback(() => {
    const url = `${ENDPOINT}?_sort=name&_page=${pagination.page}&name_like=${pagination.search}`

    fetch(url)
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
  }, [pagination.page, pagination.search])

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

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return {
    ...pagination,
    handleLoadMore,
    handleSearch,
  }
}
