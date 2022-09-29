import {  Container } from "react-bootstrap";
import './App.css'
import data  from '../data.js'

import  PersonsCount from './PersonsCount.js' ;
import PersonsList from './PersonsList.js';
import ButtonAction from "./ButtonAction";
import { useEffect, useState } from "react";


const App=()=> {
 
  const [resultData, setDataState] = useState(data);
  
  
  const deleteFunction = () =>{
                              setDataState([])           
  }
   

  const viewFunction = () =>{
                             setDataState(data)
  }

 useEffect(()=>{
                setDataState([]) 
 },[])


  return (
    <div className="App_font  App-backend-color">
      <Container className="p-5">

          <PersonsCount data= {resultData} />

          <PersonsList data= {resultData} />

          <ButtonAction  deletedDate={deleteFunction}  viewdData={viewFunction}/>

      </Container>
    </div>
  );
}

export default App;
