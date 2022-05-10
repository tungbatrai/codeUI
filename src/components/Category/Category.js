/** @format */

import ProductContent from "../Home/ProductContent";
import TopViews from "../Home/TopViews";
import { Routes, Route, useParams } from "react-router-dom";
import React ,{useState,useEffect} from "react";
export default function Category() {
  const [status,setStatus] = useState(false)
  let params = useParams()
  useEffect(()=> {
        // console.log(params.name)
        setStatus(true)
        
  },[])
  return (
    <div className="mt-108p">
      <div className="container">
        <div className="product pb-250p ">
          <div className="row">
            <div className="col-lg-8">
              <ProductContent status={true} />
            </div>
            <div className="col-lg-4">
              <TopViews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
