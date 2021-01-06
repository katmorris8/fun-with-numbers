import { useEffect, useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({
    data: null,
    status: 'idle'
  })

  useEffect(() => {
    setState({data: null, status: 'pending'})
    fetch(url)
      .then(data => data.text())
      .then(fact => setState({data: fact, status: 'resolved'}))

  }, [url])

  return state
}