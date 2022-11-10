import React from "react";
import './App.css';
import Counter from "./counter"; 
import Picture from "./Ha.jpeg"; 

function App()  {
  return (
  state = {
    fullName: 'Hana Rachdi',
    bio: 'Groupe GoMyCode',
    imgSrc: 'Picture',
    profession: 'Student',
    show: false
  }
 Show = () => {
    this.setState({
      show: !this.state.show
    })
  }
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <img src={this.state.imgSrc} alt="failed" />
            <h1>{this.state.profession}</h1>
          </>
        ) :
         (
          <h1>Show the profile</h1>
        )
        }
        <button onClick={this.Show}>{!this.state.show ? "show" : "hide"}</button>
        <>
        <Counter />
        </>
      </div>
    );
  }


export default App;