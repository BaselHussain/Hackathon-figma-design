import SanityProductList from '@/components/SanityProductList'
import React from 'react'

interface ShopProps{
  searchParams:{[key:string]:string | undefined}
}

export default function page({searchParams}:ShopProps) {
  console.log(searchParams)
  return (
    <div>
      <SanityProductList searchParams={searchParams}/>
    </div>
  )
}
