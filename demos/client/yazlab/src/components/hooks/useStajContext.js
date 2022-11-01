import { StajContext } from '../context/StajContext'
import { useContext } from 'react'

export const useStajContext = () => {
  const context = useContext(StajContext)

  if (!context) {
    throw Error('useTodosContext must be used inside an TodosContextProvider')
  }

  return context
}