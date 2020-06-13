import React, { Component } from 'react';
import Header from './HeaderCoponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom'
import AnimalComponent1 from './AnimalComponentA';
import AnimalComponent2 from './AnimaComponentB';
import AnimalComponent3 from './AnimalComponetC';
import {Jumbotron} from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';





class Main extends Component {
  
constructor(props){
super(props);

this.state={
animalname:'Animal 1'
}


}
    


  render()
  {
  
    const homepage=()=>{
      return(
        <div>
          <div>
          <Jumbotron>
              <div className="container">
                  <div className="text">
                      <div className="text">
                          <p className="size" >ANIMAL CARE</p>
                          <p>We at ANIMAL CARE are introducing technology that takes care of animals health</p>
                      </div>
                  </div>
              </div>
          </Jumbotron>
        </div>
        <div className="detail">
          <br></br>
          <br></br>
            <h2>Click On below links to get details of Animals Health</h2>
            <br></br>
              <li><a href="/animal1">Animals 1</a></li>
              <br></br>
              <li><a href="/animal2">Animals 2</a></li>
              <br></br>
              <li><a href="/animal3">Animals 3</a></li>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        </div>
      );
    }

    return (
          <React.Fragment>
            <Header/>
            <TransitionGroup>
            <CSSTransition  classNames="page" timeout={300}>
              <Switch >
                  <Route path='/home' component={homepage}/>
                  <Route exact path='/animal1' component={()=><AnimalComponent1 />} />
                  <Route exact path='/animal2'  component={()=><AnimalComponent2 />}  />
                  <Route exact path='/animal3'  component={()=><AnimalComponent3 />}  />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer/>
          </React.Fragment>
      
    );
  }
}

export default Main;
