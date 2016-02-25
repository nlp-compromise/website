const {nlp_compromise, nlpSyllables, nlpLocale, nlpNgram} = window;
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Drawer, Tabs, Tab, Navigation, Content, Header, Textfield } from 'react-mdl';
import Demos from './demos/demos.jsx';
import Docs from './docs/docs.jsx';
import Join from './join/join.jsx';

//apply plugins
nlp_compromise.plugin(nlpSyllables);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabId: 0
    };
    this.css = {};
  }

  render() {
    let {state} = this;
    let main = [
      <Demos/>,
      <Docs/>,
      <Join/>
    ];
    let heading_css={
      position:'absolute',
      left:15,
      top:7,
      color: '#596692',
      fontSize: 20,
      fontWeight: 500
    }
    return (
      <div style={{
        height: '100%',
        position: 'relative'
      }}>

      <div style={heading_css}>
        nlp_compromise
      </div>

      <Tabs activeTab={state.tabId} onChange={(tabId) => {
        this.setState({
          tabId: tabId
        });
      }} ripple>
            <Tab>Demos</Tab>
            <Tab>Docs</Tab>
            <Tab>Join</Tab>
        </Tabs>
        <section>
            <div className="content">
              {main[state.tabId]}
            </div>
        </section>
      </div>
      );
  }
}

window.setTimeout(function () {
  ReactDOM.render(
    <Home/>,
    document.getElementById('main')
  );
}, 500);
