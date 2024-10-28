import React from 'react'
import { notFound } from 'next/navigation'
export default function page({params}) {
  if(parseInt(params.postId)>1000){
    notFound()}

  return (


    <div>Datails about Post{params.postId}</div>
  )
}
