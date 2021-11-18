import React , {Component} from 'react';
import './form.css';
class Form extends Component{
    render(){
        return(

            <form className="form" onSubmit = {this.props.getWeather} >
                <input type="text" name="country" placeholder="Country"/>
                <input type="text" name="city" placeholder="City"/>
                <button>Get Weather</button>
            </form>
        )
    }
}


export default Form