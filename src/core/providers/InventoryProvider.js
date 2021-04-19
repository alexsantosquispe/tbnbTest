import React, { createContext, useState, useContext } from 'react'

const InventoryContext = createContext({})

const factoryContext = (context) => {
  const globalContext = useContext(context)
  if (globalContext) {
    return globalContext
  }
  throw new Error('ContextProvider')
}

export const useInventoryContext = () => factoryContext(InventoryContext)

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  return (
    <InventoryContext.Provider
      value={{
        products,
        setProducts
      }}>
      {children}
    </InventoryContext.Provider>
  )
}
