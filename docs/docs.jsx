const {nlp_compromise} = window;
import React from 'react';
import Doc from './doc.jsx';

let docs=[
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

various plugins are located using the same system:

<code>
npm install nlp-syllables
</code>

    import nlpSyllables from "nlp-syllables"
`,
  },
  {
    title: 'Plugins',
    href: '#',
    md: `

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