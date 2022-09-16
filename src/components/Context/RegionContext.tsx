import React from 'react'

export const RegionContext = React.createContext<any>({})

export function RegionContextProvider({ children }: any) {
  const [value, setValue] = React.useState('')

  return (
    <RegionContext.Provider value={{ value, setValue }}>
      {children}
    </RegionContext.Provider>
  )
}
