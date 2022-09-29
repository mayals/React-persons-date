
  import {  Col, Row  } from "react-bootstrap";
  // eslint-disable-next-line no-unused-vars

  
    const PersonsCount =(props)=>{
        return (
                <Row className="justify-content-center mb-4">
                    <Col sm="8">
                        <p>They are <b>{ props.data.length } appointments</b> today ..!</p>
                    </Col>
                </Row>
        )

       
       
   
} 
    export default PersonsCount;