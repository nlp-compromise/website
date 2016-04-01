'use strict';
// import React from 'react';
const React = require('react');
const Radium = require('radium');
const Style = Radium.Style;

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      ignore_hover: false
    };
    this.colors = {
      Infinitive: '#e74c3c',
      PastTense: '#c0392b',
      Verb: '#d35400',

      Adverb: '#e67e22',
      Adjective: '#f1c40f',

      Person: '#3498db',
      Noun: '#2980b9',

      Date: '#c0392b',
      Value: '#c0392b',

      Conjunction: '#16a085',
      Preposition: '#16a085',
      Determiner: '#27ae60',
      Term: '#2c3e50',
    };
    this.css = {
      term: {
        display: 'inline-block',
        height: 80,
        cursor: 'pointer',
        position: 'relative'
      },
      word: {
        margin: 6,
        fontSize: 26,
        color: 'white',
        minWidth: 40,
        padding: 5,
        textAlign: 'center',
        backgroundColor: 'steelblue'
      },
      pos: {
        textAlign: 'center',
        position: 'absolute',
        minHeight: 100,
        maxHeight: 100,
        height: 100,
        top: 40,
        zIndex: 3,
        overflow: 'hidden'
      }
    };
    this.makeTerm = this.makeTerm.bind(this);
    this.findColor = this.findColor.bind(this);
  }

  findColor(t) {
    let {colors} = this;
    let keys = Object.keys(colors);
    for(let i = 0; i < keys.length; i++) {
      if (t.pos[keys[i]]) {
        return colors[keys[i]];
      }
    }
    return null;
  };

  hoverTerm(key) {
    if (!this.state.ignore_hover) {
      this.state.show = key;
      this.setState(this.state);
    }
  }

  clickTerm(key) {
    this.state.ignore_hover = true;
    this.state.show = key;
    this.setState(this.state);
  }

  makeTerm(t, key) {
    let {colors, css, findColor, state} = this;
    let color = {
      backgroundColor: findColor(t)
    };
    let posList = Object.keys(t.pos).map((k, i) => {
      return <span key={i} style={{padding:10}}>{k}</span>;
    });
    if (this.state.show !== key) {
      posList = null;
    }
    return (
      <span key={key} style={css.term} onMouseOver={this.hoverTerm.bind(this,key)} onClick={this.clickTerm.bind(this,key)}>
        <span title={t.tag} style={[css.word, color]}>
          {t.text}
        </span>
        <div style={css.pos}>
          {posList}
        </div>
      </span>
    );
  }

  render() {
    let {colors, props} = this;
    let text = nlp_compromise.text(props.str);
    let all = text.sentences.map((s, i) => {
      let terms = s.terms.map((t, o) => {
        let key = o + '-' + i;
        return this.makeTerm(t, key);
      });
      return <div key={i}>{terms}</div>;
    });
    return <div>{all}</div>;
  }
}
Pos = Radium(Pos);
module.exports = Pos;
