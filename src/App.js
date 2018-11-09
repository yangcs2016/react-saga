import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment} from './actions/counter'
import {incrementAsync} from './actions/counter'
import {getUser} from './actions/user'

class App extends Component {
  render() {
    const {isFetching,error,user} =this.props.user
    let data;
    if(error){
      data=error
    }else if(isFetching){
      data='Loading...'
    }else{
      data=user&&user.data[0].name
    }
   return(    
    <div>
      <p>
        {this.props.counter}
      </p>
      <p>
        <button onClick={this.props.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.props.incrementAsync}>Async +</button>&nbsp;&nbsp;
        <button onClick={this.props.getUser}>GetUser</button>
      </p>
      <p>{data}</p>
    </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    counter:state.counter,
    user:state.user
  }
}

export default connect(mapStateToProps,{increment,incrementAsync,getUser})(App);