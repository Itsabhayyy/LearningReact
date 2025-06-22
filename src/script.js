import React from "react"
import ReactDOM from "react-dom/client"
import { useState } from "react"
import Header from "./components/Header"
import data from "./utilities"
import SearchBar from "./components/SearchBar"
import Restaurantcard from "./components/RestaurantCard"
const App=()=>{
  let [list,setlist]=useState(data)
  let [count ,setcount]= useState(0)
  function increment(){
    setcount(count++)
  }
  return <>
  <Header />
  <SearchBar />
  <button onClick={()=>{
    let filterlist=list.filter(val=>val.rating>4
    );
    setlist(filterlist)
  
  }}>4+Rated Restaurant</button>
  <div className="rescardrender">
    {list.map(val=>(
      <Restaurantcard key={val.id} data={val} />
    ))}
    
  </div>
  </>
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)