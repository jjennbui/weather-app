import React, { useState, useEffect } from "react";
import Searchbar from "@/components/searchBar";
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function Weather(){
  return (
    <div className={`flex flex-col items-center p-4`}>
<Header/>
      <div className={`text-center, mt-32`}><Searchbar/></div>
      <Footer/>
    </div>
    
  );
}



