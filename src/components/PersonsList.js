
import {  Col, Row  } from "react-bootstrap";

  
    const PersonsList=(props)=>{
        return (
            <Row className="justify-content-center">
                <Col sm="8">
                    <div className="App-rectangle p-2">
        
                        { props.data.length ? props.data.map( (item) =>
                                                                    {
                                                                    return(
                                                                            <div key={item.id} className="d-flex border-bottom mx-3 my-3" >
                                                                              <img className="img-avatar" src={ item.img } alt={ item.name }/>
                                                                                <div className="px-3">
                                                                                    <p className="d-inline fs-5">{ item.name }</p>
                                                                                    <p className="fs-10">{ item.date }</p>
                                                                                </div>
                                                                            </div>
                                                                          )
                                                                    }
                                                        )
                        : <h2 className="text-center p-5"> No Persons Dates </h2> 
                        }
                    
                    </div>
                </Col>
            </Row>
        )

       
       
   
} 
    export default PersonsList;