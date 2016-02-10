const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell } from 'react-mdl';
import Sentences from "./sentences.jsx"
import Pos from "./pos.jsx"
import Conjugation from "./conjugation.jsx"

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tabId:0
    };
    this.css={};
  }

  render() {
    let {state}=this
    return (
      <div style={{width:"99%", height:"90%"}}>
        <Sentences/>
        <Pos/>
        <Conjugation/>
      </div>
      );
  }
}
module.exports=Docs