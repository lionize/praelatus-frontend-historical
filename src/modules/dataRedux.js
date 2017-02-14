import { createActions } from 'reduxsauce'

const { Types: types, Creators: creators } = createActions({
  fetchSuccess: ['response'],
})

export const dataTypes = types
export default creators
