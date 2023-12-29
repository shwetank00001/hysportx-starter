import React, { useEffect } from "react"
import { Spinner } from "reactstrap";

const Preloader = ({ text }) => {

    
    return (
        <React.Fragment>
            <div className='position-absolute top-0 start-0 end-0 bottom-0' style={{
                background:"transparent",
                backdropFilter:"blur(3px)",
                display:"flex",
                position:"absolute",
                zIndex:"9999",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <div className="text-center">
                    <Spinner color="danger" className="mb-3" />
                    <h4 className="text-primary"> {text ? text : "Please Wait ...."}</h4> 
                </div>
            </div>
        </React.Fragment>
    )
}

export default Preloader;