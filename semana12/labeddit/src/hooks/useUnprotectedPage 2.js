import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToPostsFeed } from '../routes/Coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToPostsFeed(history)
    }
  }, [history])
}

export default useUnprotectedPage;