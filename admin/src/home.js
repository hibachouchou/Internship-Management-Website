import { Component } from "react";



export default class Home2 extends Component{
constructor(props){
    super(props)
    console.log("Constructor")
    this.state={
        x:0
    }
}
componentDidMount() {
    
    console.log("componentDidMount")
  }

  componentDidUpdate(PrevProps,PrevState,snapshot){
    console.log(PrevState)
    console.log("componentDidUpdate")
  }
  shouldComponentUpdate(NextProps,NextState){
  
    if(this.state.x==NextState.x){
        return false
    }else{
      console.log("shouldcomponentUpdate")
    console.log(NextState)
    return true  
    }
    
  }
  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
    render(){
        console.log("Render")
        return(
<div>
  
    <h1>Welcome to Home Page</h1>
    <h3>{this.state.x}</h3>
    <button style={{margin:"5px"}} className="btn btn-success" onClick={()=>{this.setState({x:this.state.x+1})}}>Incrementer</button>
    <button style={{margin:"5px"}} className="btn btn-secondary" onClick={()=>{this.setState({x:this.state.x-1})}}>Decrementer</button>
    <button style={{margin:"5px"}} className="btn btn-primary" onClick={()=>{this.setState({x:0})}}>Reset</button>
</div>

        )
    }
}