'use strict';
// import React from 'react';
const React = require('react');
const Radium = require('radium');
const Style = Radium.Style;

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        margin: 6,
        fontSize: 26,
        color: 'white',
        minWidth: 20,
        padding: 5,
        backgroundColor: 'blue' //findColor(t)
      }
    };
    this.makeTerm = this.makeTerm.bind(this);
    this.showTerm = this.showTerm.bind(this);
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

  showTerm(el) {}

  makeTerm(t, key) {
    let {colors, css, findColor} = this;
    let color = {
      backgroundColor: findColor(t)
    };
    return (
      <span>
        <span key={key} title={t.tag} style={[css.term, color]}>
          {t.text}
        </span>
      </span>
    );
  }

  render() {
    let {colors, props} = this;
    let text = nlp_compromise.text(props.str);
    let terms = [];
    text.sentences.forEach((s, i) => {
      s.terms.forEach((t, o) => {
        terms.push(this.makeTerm(t, o + i));
      });
    });
    return <div>{terms}</div>;
  }
}
Pos = Radium(Pos);
module.exports = Pos;
