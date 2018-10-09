import React, { Component } from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';
import {search} from '../ducks/reducer';
import Slider from 'react-slick';


class Dashboard extends Component {
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
  handleClick(e){
    console.log(e);
  }
  render() {
    /////Map over search results//////////
    let slides = this.props.recipes.map(recipe => {
      return(
        <div className="slide"
         onClick={() => this.handleClick(recipe.recipe.ingredientLines)}
         >
          <img src={recipe.recipe.image} alt="not available"/>
          {recipe.recipe.label}
        </div>
      )
    })
    //////////Settings for slick//////////////
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
        <div className="welcome" >
          <h1>Search for Recipes</h1>
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
        <div>
          <Nav/>
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

export default connect(mapStateToProps, {search})(Dashboard);