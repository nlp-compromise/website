const {nlp_compromise} = window;
import React from 'react';
import Doc from './doc.jsx';

let heading=function(txt, desc){
  let css={
    source:{
      color: 'steelblue',
      position: 'relative',
      display: 'inline',
      cursor: 'pointer',
      padding:10
    },
    desc:{
      color: 'grey',
      position: 'relative',
      display: 'block',
      width:550,
      padding: 10,
      left:30,
      fontSize:18
    },
    h2:{
      color:'steelblue',
      borderBottom:'3px solid steelblue',
      margin:5,
      padding:2,
      fontSize:20
    },
    li:{
      padding:5
    }
  }
  return (
    <li style={css.li}>
      <span style={css.h2}>
        {txt+'()'}
      </span>
      <div style={css.desc}>
        {desc}
        <span style={css.source} onClick={()=>window.location='./browse/'+txt.toLowerCase()+'.html'}>
          {' source'}
        </span>
      </div>
    </li>
  )
}

let docs=[
  {
    title: '',
    href: '#',
    md: `
All rule-based non-statistical nlp owes credit to [Eric Brill](http://www.aclweb.org/anthology/H92-1022), who showed that simple, debuggable NLP can be competitive with more salacious, probablistic methods.

This project is only possible with generous code-sharing from:
* Percy Wegmann's [jspos](https://github.com/konsumer/jspos), (itself inspired from Mark Watson's [fasttag](https://github.com/mark-watson/fasttag_v2))
* [NodeBox linguistics](https://www.nodebox.net/code/index.php/Linguistics) by Frederik De Bleser and Tom De Smedt
* Rob Ellis's [Superscript](http://superscriptjs.com/), and Chris Umbel's [NaturalNode](https://github.com/NaturalNode/natural)

`,
  },
  {
    title: 'Install',
    href: '#',
    md: `
install nlp_compromise from npm:
<code>
npm install nlp_compromise
</code>

or alternatively, use the client-side cdn:

\`<script src="https://npmcdn.com/nlp_compromise@latest/builds/nlp_compromise.min.js"></script>\`

various plugins are loaded by:

<code>
npm install nlp-syllables
</code>

    import nlpSyllables from "nlp-syllables"
`,
  },
  {
    title: 'Class Structure',
    href: '#',
    md: ``,
    html:(<div key={'class'}>
      <div>{'nlp_compromise operates according to these concepts:'}</div>
      {heading('Text', 'a collection of sentences, and methods that map over them.')}
      {heading('Sentence', `a independant collection of terms, and the logic for transforming them accurately.`)}
        <ul>
          {heading('Question', `a sentence that requests information`)}
          {heading('Statement', `a sentence that describes a fact or facts`)}
        </ul>
      {heading('Term', `One word, or two words that mean one thing.`)}
      <ul>
        {heading('Noun', 'A thing that can be described')}
        <ul>
          {heading('Date', 'a term describing an individual, range, or sequence of time')}
          {heading('Value', 'a number and the associated units')}
          {heading('Person', 'a named, or refered-to person')}
          {heading('Place', 'a known, or unknown location')}
          {heading('Organization', 'a group, team, pair, or company of people')}
        </ul>
        {heading('Verb', `an action that a noun may do`)}
        {heading('Adjective', `a descriptive term for a noun`)}
        {heading('Adverb', `a descriptive term for a verb or adjective`)}
      </ul>
      <div>{'Every class can be called directly from the api, like nlp.place(\'Jamaica\')'}</div>
    </div>)
  },
  {
    title: 'Plugins',
    href: '#',
    md: `
Every class and it's prototype are surfaced in the api for augmenting or overloading.
Any sort of procedure or analysis can be applied, then shared as a plugin.
Multiple plugins can be applied, and co-ordinated.
<pre><code class="javascript">
    let my_mixin = {
      Term: {
        fun : function() {
          return this.text + '!';
        }
      }
    };
    nlp_compromise.plugin(my_mixin);
    let w = nlp_compromise.term('work');
    w.fun()
    // "work!"
</code></pre>

For smarter plugins, you can also pass a function into *nlp_compromise.plugin* to get access to the library instance.

For example:
\`\`\`
    let clever_mixin = function (nlp) {
      return {
        Noun: {
          make_it_fun : function() {
            return nlp.sentence(this.text + 'is fun!');
          }
        }
      };
    };
    nlp_compromise.plugin(clever_mixin);
    let w = nlp_compromise.noun('work');
    w.make_it_fun().text()
    // "work is fun!"
\`\`\`
    `
  }
]

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    this.css={};
  }

  render() {
    let {state}=this
    let rows=docs.map((o,i)=>{
      return <Doc {...o} key={i}/>
    })
    return (
      <div key="docs" style={{height: '100%', position: 'relative'}}>
        {rows}
      </div>
      );
  }
}
module.exports=Docs
