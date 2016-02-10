const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from "react-dom";
import { Layout, Drawer, Tabs, Tab, Navigation, Content, Header, Textfield} from 'react-mdl';

class Source extends React.Component {
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
      <div style={{height: '100%', position: 'relative'}}>
        source
      </div>
      );
  }
}
module.exports=Source