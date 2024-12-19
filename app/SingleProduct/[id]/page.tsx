"use client";
import Footer from "@/components/Footer";
import SingleProduct from "@/components/SingleProduct";
import SingleProductSecondSection from "@/components/SingleProductSecondSection";
import SingleProductThirdSection from "@/components/SingleProductThirdSection";

export default function page({params}:{params:{id:string}}) {
    

  return (
    <>
  <SingleProduct id={params.id}/>
  <SingleProductSecondSection/>
  <SingleProductThirdSection/>
  <Footer/>
  </>
  )
}
