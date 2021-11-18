import React, { Component } from "react";
import "./App.css";
import Form from "./components/formComponent/form";
import Data from "./components/dataComponent/data";
class App extends Component {
  //initial state
  state = {
    pressure: "",
    temp: "",
    humidity: "",
    desc: "",
    error: "",
  };

  //this method will bring the data from the API
  getWeather = async (e) => {
    e.preventDefault();
    let myCountry = e.target.elements.country.value; //will target my country  input
    let myCity = e.target.elements.city.value; //will target my city  input
    //making the api dynamic by applying the city and country
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${myCity}%2C${myCountry}&appid=e36ed364400282e43250b6c4c0274d44`
    );
    //converting data into json
    const data = await api.json();
    console.log(data);

    if (myCountry && myCity) {
      this.setState({
        pressure: data.main.pressure,
        temp: data.main.temp,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        error: "",
      });
      console.log(this.state);
    } else {
      this.setState({
        pressure: "",
        temp: "",
        humidity: "",
        desc: "",
        error: "Please Enter a Valid Data",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1> Weathe App  </h1>
        <div className="holder">
          
          <Form getWeather={this.getWeather} />

          <Data
            pressure={this.state.pressure}
            temp={this.state.temp}
            humidity={this.state.humidity}
            desc={this.state.desc}
            error={this.state.error}
          />

        </div>
      </div>
    );
  }
}

export default App;
