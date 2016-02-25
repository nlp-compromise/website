const {nlp_compromise} = window;
import React from 'react';
import Doc from './doc.jsx';

let docs=[
  {
    title: 'Install',
    code: 'npm i nlp_compromise',
    about: '',
    href: '#',
    callback: function(str) {
    }
  },
]

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
    let rows=docs.map((o)=>{
      return <Doc {...o}/>
    })
    return (
      <div key="docs" style={{height: '100%', position: 'relative'}}>
        {rows}
      </div>
      );
  }
}
module.exports=Docs