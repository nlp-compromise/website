const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell } from 'react-mdl';
import LongText from './longText.jsx'
import Demo from './demo.jsx';
import Pos from './pos.jsx';

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
        text: 'Franklin Delano Roosevelt could walk the walk. He really gagodizes those gadoozles.',
        title: 'Part-of-Speech tagging',
        code: 'nlp.text(\'\').tags()',
        about: 'assigns the particular used grammar for each term',
        href: './browse/tagger.html',
        callback: function(str) {
          return <Pos key={'pos'} str={str}/>
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
        about: 'chops a piece of text into its component sentences',
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
          // console.log(v)
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
        text: 'gray is my favorite color',
        title: 'US-UK localization',
        code: 'nlp.plugin(require(\'nlp-locale\'))',
        about: 'converts between british and american spellings',
        href: 'https://github.com/nlp-compromise/nlp-locale',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          t.toBritish()
          let css = {
            color: '#596692',
            padding: 12,
            fontSize: 46,
            fontWeight: 600
          };
          return <div key={'locale'} style={css}>{t.text()}</div>;
        }
      },
      {
        text: 'keep on rocking in the free world',
        title: 'Tense conversion',
        code: 'nlp.text(\'\').to_past()',
        about: 'turns a statement into a different tense',
        href: '/browse/tense.html',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          t.to_past()
          let css = {
            color: '#596692',
            padding: 12,
            fontSize: 46,
            fontWeight: 600
          };
          return <div key={'tense'} style={css}>{t.text()}</div>;
        }
      },
      //
      // {
      //   text: `This was the best of times, this was the worst of times`,
      //   title: 'Replace',
      //   code: `nlp.text('').replace('[Noun]', 'cyber$1')`,
      //   about: 'grammar-aware search+replace',
      //   href: '/browse/match.html',
      //   callback: function(str) {
      //     let t = nlp_compromise.text(str);
      //     t.replace('[Noun]','cyber$1')
      //     let css = {
      //       color: '#596692',
      //       padding: 35,
      //       fontSize: 26,
      //       fontWeight: 400
      //     };
      //     return <div key={'contractions'} style={css}>{t.text()}</div>;
      //   }
      // },

      {
        text: `We've only just begun, to live. White lace and promises. We'll start out walkin' and learn to run.`,
        title: 'Contractions',
        code: 'nlp.text(\'\').contractions.expand()',
        about: 'expands apostrophe contractions',
        href: '/browse/interpret.html',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          t.contractions.expand()
          let css = {
            color: '#596692',
            padding: 35,
            fontSize: 26,
            fontWeight: 400
          };
          return <div key={'contractions'} style={css}>{t.text()}</div>;
        }
      },

      {
        text: 'and everything under the sun is in tune, but the sun is eclipsed by the moon.',
        title: 'Negation',
        code: 'nlp.text(\'\').negate()',
        about: 'turns a statement into the opposite meaning',
        href: '/browse/negate.html',
        callback: function(str) {
          let t = nlp_compromise.text(str);
          t.negate()
          let css = {
            color: '#596692',
            padding: 32,
            fontSize: 26,
            fontWeight: 600
          };
          return <div key={'negate'} style={css}>{t.text()}</div>;
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
          return <Demo key={i} {...d}/>;
         })}
        <LongText />
      </div>
      );
  }
}
module.exports = Docs;
