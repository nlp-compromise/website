const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell } from 'react-mdl';
import LongText from "./longText.jsx"
import Demo from './demo.jsx';

import colors from '../colors';

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabId: 0
    };
    this.css = {};
  }

  render() {
    let {state} = this;

    let demos = [
      {
        text: 'Franklin Delano Roosevelt could walk the walk.',
        title: 'Part-of-Speech tagging',
        code: 'nlp.text(\'\').tags()',
        about: 'assigns the particular used grammar for each term',
        href: './browse/tagger.html',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          let pos = {
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
          let findColor = function(t) {
            let keys = Object.keys(pos);
            for(let i = 0; i < keys.length; i++) {
              if (t.pos[keys[i]]) {
                return pos[keys[i]];
              }
            }
          };
          let terms = [];
          t.sentences.forEach(function(s,i) {
            s.terms.forEach(function(t,o) {
              let css = {
                margin: 6,
                fontSize: 26,
                color: 'white',
                minWidth: 20,
                padding: 5,
                backgroundColor: findColor(t)
              };
              terms.push(<span key={i+o} title={t.tag} style={css}>{t.text}</span>);
            });
          });
          return terms;
        }
      },
      {
        text: 'swim',
        title: 'Verb Conjugation',
        code: 'nlp.verb(\'\').conjugate()',
        about: 'Turns a verb into its various forms',
        href: './browse/conjugate.html',
        callback: function(str) {
          let v = nlp_compromise.verb(str);
          let obj = v.conjugate();
          let keys = Object.keys(obj);
          let css = {
            row: {
              margin: 8,
              fontSize: 20,
              winWidth: 300
            },
            key: {
              color: '#596692',
            },
            value: {
              margin: 9,
              color: '#2c3e50'
            },
            td: {
              width: 300
            }
          };

          let left = keys.slice(0, 5).map(function(k, i) {
            return (
              <div key={i}>
                <span style={css.key}>{k + ': '}</span>
                <span style={css.value}>{obj[k]}</span>
              </div>
              );
          });
          let right = keys.slice(5, keys.length).map(function(k, i) {
            return (
              <div key={i}>
                <span style={css.key}>{k + ': '}</span>
                <span style={css.value}>{obj[k]}</span>
              </div>
              );
          });
          return (<table style={css.row}>
            <tbody>
            <tr>
              <td style={css.td}>
                {left}
              </td>
              <td>
                {right}
              </td>
            </tr>
            </tbody>
          </table>);
        }
      },
      {
        text: 'Mr. Homer J. Simpson, the price is 4.59 for the Ph.Ds. Please R.S.V.P. by tues evening.',
        title: 'Sentence segmentation',
        code: 'nlp.text(\'\').sentences',
        about: 'This chops a piece of text into it\'s component sentences.',
        href: './browse/sentence_parser.html',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          let css = {
            color: '#596692',
            padding: 12,
            fontSize: 16,
            fontWeight: 500
          };
          return t.sentences.map(function(s,i) {
            return <li key={i} style={css}>{s.text()}</li>;
          });
        }
      },
      {
        text: 'six hundred and fifty nine',
        title: 'Number-comprehension',
        code: 'nlp.value(\'\').number',
        about: 'understands textual numbers',
        href: './browse/to_number.html',
        callback: function(str) {
          let v = nlp_compromise.value(str);
          console.log(v)
          let css = {
            color: '#596692',
            padding: 12,
            fontSize: 46,
            fontWeight: 600
          };
          return <div key={'int'} style={css}>{v.number}</div>;
        }
      },
      {
        text: 'houston texas',
        title: 'Syllable hyphenization',
        code: 'nlp.plugin(require(\'nlp-syllables\'))',
        about: 'splits words into their pronounceable parts',
        href: 'https://github.com/nlp-compromise/nlp-syllables',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          let syllables = t.syllables();
          let css = {
            color: '#596692',
            padding: 12,
            fontSize: 26,
            fontWeight: 500
          };
          return syllables.map(function(arr) {
            return arr.map(function(a,i) {
              return a.map(function(s,o) {
                return <li key={i+o} style={css}>{s}</li>;
              });
            });
          });
        }
      },

      {
        text: 'grey is my favorite color',
        title: 'US-UK localization',
        code: 'nlp.plugin(require(\'nlp-locale\'))',
        about: 'understands textual numbers',
        href: 'https://github.com/nlp-compromise/nlp-locale',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          console.log(t)
          console.log(t.toBritish())
          console.log(t)
          let css = {
            color: '#596692',
            padding: 12,
            fontSize: 46,
            fontWeight: 600
          };
          return <div key={'int'} style={css}>{t.text()}</div>;
        }
      }

    ];

    return (
      <div style={{
        width: '99%',
        height: '90%'
      }}>
        {demos.map(function(d, i) {
          d.i = i;
          return <Demo {...d}/>;
         })}
        <LongText />
      </div>
      );
  }
}
module.exports = Docs;
