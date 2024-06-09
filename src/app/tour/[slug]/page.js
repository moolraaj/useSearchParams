import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
 
const loadPost = async () => {
    let response = await fetch('https://staging.trackitinerary.com/apis/packages/index')
    let data = await response.json()
    return data.data
  }

  const TourPage=dynamic(  
    ()=> import  ("./component/singlepost"),
    {
      ssr:true
    }
  )
 
  
function page({params}) {
    let {slug}=params
    console.log(slug)
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <TourPage/>
    </Suspense>
   
    </>
  )
}

export default page

export async function generateStaticParams(){
  let resp=await loadPost()
  return resp.map((ele)=>{
    return{
      slug:ele.place,
      slug:ele.id.toString(),
      slug:ele.key
    }

  })
}