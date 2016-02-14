const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Cell } from 'react-mdl';
// import Sentences from "./sentences.jsx"
// import Pos from "./pos.jsx"
// import Conjugation from "./conjugation.jsx"
import Demo from "./demo.jsx"

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

    let demos=[
      {
        text:"I walk the walk, and talk the talk.",
        title:"Part-of-Speech tagging",
        code:"nlp.text('').tags()",
        about:"assigns the particular used grammar for each term",
        href:"../browse/tagger.html",
        callback:function(str){
          let t=nlp_compromise.text(str)
          let pos={
            Noun:'#DC4E00',
            Pronoun:'steelblue',
            Person:'steelblue',
            Verb:'darkred',
            Infinitive:'darkred',
            PastTense:'darkred',
            PresentTense:'darkred',
            FutureTense:'darkred',
            Adjective:'#929487',
            Copula:'#89CEDE',
            Adverb:'#2C8C71',
            Determiner:'lightgrey',
            Conjunction:'grey',
            Preposition:'grey'
          }
          let terms=[]
          t.sentences.forEach(function(s){
            s.terms.forEach(function(t){
              let css={
                margin:6,
                paddingRight:2,
                fontSize:20,
                borderBottom:"3px solid "+pos[t.tag]
              }
              terms.push(<span title={t.tag} style={css}>{t.text}</span>)
            })
          })
          return terms
        }
      },
      {
        text:"Mr. Homer J. Simpson, the price is 4.59 for the Ph.Ds. Please R.S.V.P. by tues. evening.",
        title:"Sentence segmentation",
        code:"nlp.text('').sentences",
        about:"This chops a piece of text into it's component sentences.",
        href:"../browse/sentence_parser.html",
        callback:function(str){
          let t=nlp_compromise.text(str)
          return t.sentences.map(function(s){
            return <li>{s.text()}</li>
          })
        }
      },
      {
        text:"houston texas",
        title:"Syllable hyphenization",
        code:"nlp.plugin(require('nlp-syllables'))",
        about:"splits words into their pronounceable parts",
        href:"https://github.com/nlp-compromise/nlp-syllables",
        callback:function(str){
          let t=nlp_compromise.text(str)
          let syllables=t.syllables()
          return syllables.map(function(arr){
            return arr.map(function(a){
              return a.map(function(s){
                return <li>{s}</li>
              })
            })
          })
        }
      },
      {
        title:"Syllable hyphenization",
        text:"houston texas",
        code:"nlp.plugin(require('nlp-syllables'))",
        about:"splits words into their pronounceable parts",
        href:"https://github.com/nlp-compromise/nlp-syllables",
        callback:function(str){
          let t=nlp_compromise.text(str)
          let syllables=t.syllables()
          return syllables.map(function(arr){
            return arr.map(function(a){
              return a.map(function(s){
                return <li>{s}</li>
              })
            })
          })
        }
      }
    ]

    return (
      <div style={{width:"99%", height:"90%"}}>
        {demos.map(function(d,i){
          d.i = i
          return <Demo {...d}/>
        })}
      </div>
      );
  }
}
module.exports=Docs