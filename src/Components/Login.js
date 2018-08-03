import React, { Component } from 'react';
import {connect} from 'react-redux';
import {search} from '../ducks/reducer';
import Slider from 'react-slick';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      inputValue: '' 
    }
  }
  handleInput(e){
    this.setState({
      inputValue: e
    })
  }
  handleEnter(key){
    if(key === 'Enter'){
      this.props.search(this.state.inputValue)
    }
  }
  render() {
    const {REACT_APP_LOGIN} = process.env

    /////Map over search results//////////
    let slides = this.props.recipes.map(recipe => {
      return(
        <div className="slide" >
          <img src={recipe.recipe.image} alt="not available"/>
          {recipe.recipe.label}
        </div>
      )
    })
    //////////Settings fot slick//////////////
    let settings = {
      className:"slider",
      adaptiveHeight: true,
      arrows: false,
      centerMode:true,
      centerPadding: '10px',
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className="Login_Container">
        <p className="login_button">
            <a href={REACT_APP_LOGIN}>
                LOGIN
            </a>
        </p>
        <div className="welcome" >
          <h1>Welcome To Meal Plan it</h1>
          <div className="login_search" >
            <input className="search_input" type="text" onChange={(e) => this.handleInput(e.target.value)} onKeyPress={(e) => this.handleEnter(e.key)} />
            <button className="search_button" onClick={() => this.props.search(this.state.inputValue)} >
              Find Recipes
            </button>
          </div>
        </div>
        <div className="recipes">
          <Slider {...settings}>
            {slides}
          </Slider>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, {search})(Login);