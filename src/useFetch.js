import { useState } from 'react';

export const useFetch = url => {
  const [state, setState] = useState({
    data: null,
    status: 'idle'
  })

  return state
}