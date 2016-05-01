{div, span, ul, li, a, p} = React.DOM
ReactMarkdown=require('react-markdown')

markdown=(md)->
  React.createElement(ReactMarkdown, source:md)

css=
  heading:
    color: 'steelblue',
    position: 'relative',
    display: 'inline',
    cursor: 'pointer',
    padding:10
  desc:
    color: 'grey',
    position: 'relative',
    display: 'block',
    width:550,
    padding: 10,
    left:30,
    fontSize:18
  h2:
    color:'steelblue',
    borderBottom:'3px solid steelblue',
    margin:5,
    padding:2,
    fontSize:20
  li:
    padding:5
  doc:
    borderLeft:"5px solid #67a54b"
    margin:25
    padding:25
  #
  # li style:css.li,
  #   span style:css.h2,
  #     txt+'()'
  #   div style:css.desc,
  #     desc
  #     a {style:css.source, href:'./browse/'+txt.toLowerCase()+'.html'},
  #       ' source'


class Docs extends React.Component
  constructor: ->
    @css = {}
    @state = {}

  install:->
    """
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
    """

  classes:->
    div style:{color:'lightgrey'},
      span style:css.heading, 'Text'
        'a collection of sentences, and methods that map over them.'
      p()
      span style:css.heading, 'Sentence'
        'a collection of terms, and the logic for transforming them'
      p()
      ul null,
        span style:css.heading, 'Question'
        p()
        span style:css.heading, 'Statement'
        p()
      span style:css.heading, 'Term'
        ul null,
          span style:css.heading, 'Date'
          p()
          span style:css.heading, 'Value'
          p()
          span style:css.heading, 'Person'
          p()
          span style:css.heading, 'Place'
          p()
          span style:css.heading, 'Organization'
          p()
        span style:css.heading, 'Verb'
        p()
        span style:css.heading, 'Adjective'
        p()
        span style:css.heading, 'Adverb'


  #     heading('Term',
  #       ul null,
  #         heading('Noun', 'A thing that can be described')
  #         ul null,
  #           heading('Date', 'a term describing an individual, range, or sequence of time')
  #           heading('Value', 'a number and the associated units')
  #           heading('Person', 'a named, or refered-to person')
  #           heading('Place', 'a known, or unknown location')
  #           heading('Organization', 'a group, team, pair, or company of people')
  #       heading('Verb', `an action that a noun may do`)
  #       heading('Adjective', `a descriptive term for a noun`)
  #       heading('Adverb', `a descriptive term for a verb or adjective`)
  #     'Every class can be called directly from the api, like nlp.place(\'Jamaica\')'

  thanks:->
    """
All rule-based non-statistical nlp owes credit to [Eric Brill](http://www.aclweb.org/anthology/H92-1022), who showed that simple, debuggable NLP can be competitive with more salacious, probablistic ones.

This project is only possible with generous code-~stealing~sharing from:
* Percy Wegmann's [jspos](https://github.com/konsumer/jspos), (itself inspired from Mark Watson's [fasttag](https://github.com/mark-watson/fasttag_v2))
* [NodeBox linguistics](https://www.nodebox.net/code/index.php/Linguistics) by Frederik De Bleser and Tom De Smedt
* Rob Ellis's [Superscript](http://superscriptjs.com/), and Chris Umbel's [NaturalNode](https://github.com/NaturalNode/natural)
    """
  render: ->
    div style:{ fontSize:20},
      div style:css.doc,
        markdown(@install())
      div style:css.doc,
        @classes()
      div style:css.doc,
        markdown(@thanks())

module.exports= (args)->
  React.createElement(Docs, args)
