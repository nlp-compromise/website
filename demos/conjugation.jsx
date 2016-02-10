import React from 'react';
import { Tabs, Tab, Textfield, Grid, Cell} from 'react-mdl';

let {nlp_compromise} = window;

let Conjugation = React.createClass({

  getInitialState: function () {
    return {
      words: {},
      word: 'walk',
    };
  },
  componentDidMount: function () {
    this.update();
  },

  update: function (el) {
    let word = this.state.word || '';
    if (el) {
      word = el.target.value || '';
    }
    let v = nlp_compromise.verb(word);
    this.state.words = v.conjugate();
    // this.state.word = word;
    this.setState(this.state);
  },

  result: function() {
    let cmp = this;
    return Object.keys(this.state.words).map(function(k, i) {
      let negated = nlp_compromise.verb(cmp.state.words[k]).negate();
      return (
        <Grid key={i}>
          <Cell col={4}>
            {k + ':'}
          </Cell>
          <Cell col={4}>
            <b>{cmp.state.words[k]}</b>
          </Cell>
          <Cell col={4}>
            {negated}
          </Cell>
        </Grid>
        );
    });
  },
  newWord: function() {
    let keys = Object.keys(window.nlp_conjugate.Lexicon);
    keys = keys.filter(function(k) {
      if (!window.nlp.Lexicon[k]) {
        console.log(k);
      }
      return window.nlp_conjugate.Lexicon[k] === 'Infinitive';
    });
    let l = keys.length;
    let r = parseInt(Math.random() * l, 10);
    this.state.word = keys[r];
    this.setState(this.state);
    this.update();
  },
  render: function () {
    let css = {
      grid: {},
      top: {
        height: 200,
        display: 'block'
      },
      input:{
        height:40,
        margin:5,
        width:550,
        fontSize:30,
        color:"grey",
        borderRadius:5
      }
    };
    return (
      <Grid flex={true} style={css.grid}>
          <Cell col={12} style={css.top}>
            {'Verb conjugation - nlp_compromise '}
            {'v2'}
          </Cell>

          <Cell col={2}/>
          <Cell col={8}>
            <input type="text" style={css.input} value={this.state.word} onKeyUp={this.update}/>
          </Cell>
          <Cell col={2}/>

          <Cell col={3} />
          <Cell col={6} >
            {this.result()}
          </Cell>

      </Grid>
      );
  }

});

module.exports = Conjugation;
