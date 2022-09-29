import {  Col, Row  } from "react-bootstrap";
import React from "react";


const ButtonAction = ({deletedDate ,viewdData }) => {
    
    return(
        <Row className="justify-content-center">
          <Col sm="8" className="d-flex justify-content-between">
             <button onClick={ deletedDate } className="btn-sm App-button p-2 mt-2">Remove All</button>
             <button onClick= { viewdData }  className="btn-sm App-button p-2 mt-2">Display All</button>
          </Col>
        </Row>
    )
}
 
export default ButtonAction ;