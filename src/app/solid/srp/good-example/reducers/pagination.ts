import type { User } from '../types'

type PaginationState = {
  page: number
  search: string
  users: User[]
  hasNextPage: boolean
}

type PaginationAction =
  | {
      type: 'LOAD_MORE'
    }
  | {
      type: 'SEARCH'
      payload: string
    }
  | {
      type: 'SET_USERS'
      payload: User[]
    }
  | {
      type: 'SET_HAS_NEXT_PAGE'
      payload: boolean
    }

type PaginationReducer = (
  state: PaginationState,
  action: PaginationAction,
) => PaginationState

export const paginationReducer: PaginationReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_MORE':
      return { ...state, page: state.page + 1 }
    case 'SEARCH':
      return { ...state, page: 1, search: action.payload }
    case 'SET_USERS':
      if (state.page === 1) {
        return { ...state, users: action.payload }
      } else {
        return { ...state, users: [...state.users, ...action.payload] }
      }
    case 'SET_HAS_NEXT_PAGE':
      return { ...state, hasNextPage: action.payload }
    default:
      return state
  }
}
