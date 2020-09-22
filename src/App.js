import React from 'react';
import Navbar from './components/nav/navbar';
import {setUser} from './reducer/action';

import {  connect } from "react-redux";



import Skills from './components/skills/Skills';
import './App.css';
import 'tachyons';
import Projects from './components/project/Projects';
import Main from './components/main/Main';
import About from './components/about/About';
import Particle from './particles';
import Footer from './components/footer/footer';

import Spinner from './Spinner';





class App extends React.Component {
  componentDidMount() {
    
    setTimeout(() => {this.props.setUser()}, 5000);
  }

  render(){
  return this.props.isLoading ?
 <Spinner/> :  ( 
    <div  className='app'>
    <Particle/>
     <Navbar/>
<Main/>
<Skills/>
<Projects/>
<About/>
<Footer/>
    </div>
  );
}
}
const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
});

const mapDispatch = dispatch => ({
  setUser: () => dispatch(setUser())
});
export default connect(mapStateFromProps , mapDispatch)(App);
