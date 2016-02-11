const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from "react-dom";
import { Layout, Drawer, Tabs, Tab, Navigation, Content, Header, Textfield} from 'react-mdl';

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
      <div key="docs" style={{height: '100%', position: 'relative'}}>
        Docs
      </div>
      );
  }
}
module.exports=Docs