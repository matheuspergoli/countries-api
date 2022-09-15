import React from 'react'

function useFetch() {
  const [data, setData] = React.useState<null | Array<{}>>(null)
  const [error, setError] = React.useState<null | string>(null)
  const [loading, setLoading] = React.useState(false)

  const request = React.useCallback(async (url: string) => {
    let response: Response | null = null
    let json: null | Array<{}> = null
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url)
      json = await response.json()
      if (response.ok === false) throw new Error('Não foi possível acessar')
    } catch (errorMessage) {
      if (errorMessage instanceof Error) {
        json = null
        setError(errorMessage.message)
      }
    } finally {
      setData(json)
      setLoading(false)
      return { response, json }
    }
  }, [])

  return {
    data,
    error,
    loading,
    request
  }
}

export default useFetch
