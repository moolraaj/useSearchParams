'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const loadPostDetails = async (id, key) => {
  let response = await fetch(`https://staging.trackitinerary.com/apis/packages/details/${id}/${key}`)
  let data = await response.json()
  return data.data
}
 

const TourPage = () => {
  
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const key = searchParams.get('key')
  const [post, setPost] = useState(null)


  const fetchPageDetails=async()=>{
    let data=await loadPostDetails(id,key)
    setPost(data)
  }

  useEffect(()=>{
    fetchPageDetails()
  },[])

  console.log(post)
 

   

  

   
  return (
     <>
   {
    post&&post.map((ele)=>{
        return <div key={ele.key}>

            <h1>{ele.id}</h1>
            <h1>{ele.key}</h1>
            <h1>{ele.package_routing}</h1>
            <Link href={`tour/${ele.id}`}>{ele.id}</Link>
        </div>

    })
   }
     </>
  )
}

export default TourPage


 