'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const loadPost = async () => {
  let response = await fetch('https://staging.trackitinerary.com/apis/packages/index')
  let data = await response.json()
  return data.data
}

const ToursPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    loadPost().then(setData)
  }, [])

  return (
    <div>
      {data.map((ele) => (
        <div key={ele.key}>
          <Link href={`/tour/place?id=${ele.id}&key=${ele.key}`}>
            {ele.package_name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ToursPage
