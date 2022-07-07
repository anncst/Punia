import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ServerMessage = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getServerData = async () => {
      const response = await axios.get('/hello')
      setData(response.data)
    }

    getServerData()
  }, [])

  return <>Server data: {JSON.stringify(data)}</>
}
