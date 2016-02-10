import { Tabs, Tab, Textfield, Grid} from 'react-mdl';

import React from 'react';
let {nlp_compromise} = window;

let Sentences = React.createClass({
  getInitialState: function () {
    return {
      word: "Mr. Homer J. Simpson, the price is 4.59 for the Ph.Ds.",
      result: []
    };
  },
  componentDidMount: function () {
    this.update();
  },
  update: function (el) {
    let word = this.state.word;
    if (el && el.target) {
      word = el.target.value || '';
    }
    this.state.word = word;
    let t = nlp_compromise.text(word);
    this.state.result = t.sentences.map(function(s) {
      return s.text();
    });
    this.setState(this.state);
  },
  render: function () {
    let state = this.state;
    let css = {
      part: {
        padding: 15,
        fontSize: 20
      },
      title: {
        fontSize: 20
      },
      code: {
        color: 'grey'
      },
      input:{
        height:40,
        margin:5,
        width:550,
        fontSize:30,
        color:"grey",
        borderRadius:5
      },
      result:{
        color:"steelblue",
        fontSize:23,
      }
    };
    let code = 'nlp.text(\'\').sentences';
    let result = state.result.map(function(a, i) {
      return <li key={i} style={css.part}>{a}</li>;
    });
    return (
      <div style={{padding:40}}>
        <div>
          <div md={2} xs={2} style={css.title}>
            {'Sentence tokenization'}
          </div>
          <div md={10} xs={10} style={css.code}>
            {code}
          </div>
        </div>
        <div>
            <input type="text" style={css.input} value={this.state.word} onChange={this.update} />
        </div>
        <div style={css.result}>
            {result}
        </div>
      </div>
      );
  }
});

module.exports = Sentences;
