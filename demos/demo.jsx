const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell, Textfield } from 'react-mdl';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state={
      text: this.props.text || '',
      about:true,
    };
    this.css={
      container:{
        width:"100%",
        height:400,
        padding:50,
        border:"1px solid lightgrey"
      },
      input:{
        fontSize:23,
        color:"grey",
        width:"80%",
        margin:"10px 10px 10px 45px"
      },
      code:{
        backgroundColor:"#ebe6e6",
        color:"#484754",
        fontFamily:"Courier",
        display:"inline-block",
        padding:8,
        margin:"8px 8px 8px 90px",
        position:"relative",
        fontSize:11,
        cursor:"pointer"
      },
      source:{
        color:"steelblue",
        position:"relative",
        display:"inline-block",
        padding:10,
        cursor:"pointer"
      },
      title:{
        color:"grey",
        fontSize:30,
        padding:4
      },
      about:{
        fontSize:15,
        marginLeft:60,
        color:"lightgrey"
      },
      result:{
        marginLeft:120,
        color:"grey"
      }
    };
    if(this.props.i % 2===1){
      this.css.container.backgroundColor="#f6f5f5"
    }
    this.doNlp= this.doNlp.bind(this)
  }
  componentDidMount(){
    this.doNlp()
  }

  doNlp(e){
    let {state, props}= this
    if(e && e.target && e.target.value){
      state.value= e.target.value
    }else{
      state.value=state.text
    }
    state.result= props.callback(state.value)
    this.setState(state)
  }

  render() {
    let {state, css, props}=this
    return (
      <div key={props.title} style={css.container}>
        <div style={css.title}>
          {props.title}
        </div>
        <div style={css.about}>
          {props.about}
        </div>
        <div onClick={()=>{window.location.href=props.href}} >
          <span style={css.code} >
            {props.code}
          </span>
          <span style={css.source}>
            {"source >"}
          </span>
        </div>
        <Textfield
          expandable={false}
          onChange={this.doNlp}
          label=""
          value={state.text}
          style={css.input}
        />
        <div style={css.result}>
          {state.result}
        </div>
      </div>
      );
  }
}
module.exports=Demo