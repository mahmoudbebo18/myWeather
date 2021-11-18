import React , {Component} from 'react';
import './data.css';
class Data extends Component{
    
    render(){
        let pressure = this.props.pressure;
        let temp = this.props.temp;
        let humidity = this.props.humidity;
        let desc = this.props.desc;
        let error = this.props.error
        if(pressure && temp && humidity && desc){
            return(
                <div className="data">
                    {pressure && <p> <b>Pressure : </b> {pressure} </p>}
                    {temp && <p> <b>Temperature : </b> {temp} </p>}
                    {humidity && <p> <b>Humidity : </b> {humidity} </p>}
                    {desc && <p> <b>Description : </b> {desc} </p>}
                </div>
            )
        }else if (error){
            return (
                <p className="error"> {error} </p>
            ) 
        }else {
            return null 
        }
       
    }
}


export default Data