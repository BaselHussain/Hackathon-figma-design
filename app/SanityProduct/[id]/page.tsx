
import SanitySingleProduct from '@/components/SanitySingleProduct'
import { client } from '@/sanity/lib/client'
import React from 'react'


export async function generateStaticParams(){
  const query=`
   *[_type=='product' ] {
     "id":_id
   }
  `
  const ids=await client.fetch(query)
  const idRoutes:string[]=ids.map((id:{id:string})=>(id.id))
  return idRoutes.map((id:string)=>({id}))
  }
export default function page({params:{id}}:{params:{id:string}}) {
  
  return (
    <div>
      <SanitySingleProduct id={id}/>
    </div>
  )
}
