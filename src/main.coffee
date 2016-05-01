
{div, span, a, img, br, h2} = React.DOM
demos=require('./demos.coffee')
ShowOff=require('./showOff.coffee')
Input=require('./input.coffee')
Bar=require('./bar.coffee')

Table= (args)->
  React.createElement(require('./table.coffee'), args)
Fact= (args)->
  React.createElement(require('./fact.coffee'), args)
Square= (args)->
  React.createElement(require('./square.coffee'), args)


class Main extends React.Component
  constructor: ->
    @css =
      container:
        color:'grey'
      show:
        position:'relative'
        color:'slategrey'
        fontSize:20
        height:150
        padding:60
      brag:
        position:'relative'
        fontSize:35
        padding:60
        textAlign:'left'
      usage:
        position:'relative'
        fontSize:35
        height:150
        textAlign:'left'
        # paddingLeft:"50%"
      example:
        display:'block'
        padding:15
        margin:10
        position:'relative'
        marginLeft:"20%"
        fontSize:30
        backgroundColor: '#f7f7f7'
      code:
        display:'inline'
        padding:20
        position:'relative'
        right:10
        whiteSpace:'nowrap'
        backgroundColor: '#fc9c9d'
        color: 'slategrey'
        fontFamily: 'Courier',
        fontWeight:500
        padding: 8,
        margin: 8,
        fontSize:16
      heading:
        fontSize:28
        color:'#484754'
        paddingTop:35
        paddingLeft:10
    @state = {
      arr:[1,2,3]
    }

  usage:->
    div style:@css.usage,
      div style:@css.code, "npm install nlp_compromise"
      div style:{fontSize:14}, 'or'
      div style:@css.code, "<script src='http://cdn.nlpcompromise.com/nlp_compromise.min.js'/>"

  render: ->
    brag=Fact({big:'110', unit:'kb', subtext:'js file'})
    install=@usage()
    div style:@css.container,
      img {style:{padding:5,width:30}, src:"./lib/github.png"}
      a style:{color:'steelblue'},href:"https://github.com/nlp-compromise/nlp_compromise", 'source'
      div style:@css.show,
        div null,
          span style:{color:'steelblue', fontSize:30}, "🌈"
          span style:{color:'lightsteelblue', fontSize:20}, " hi,"
        div  style:{padding:40}, "nlp_compromise does NLP in the browser"

      ShowOff()
      Table({data:[ [[brag],[install]] ] })

      div style:{padding:"20%"},
        div style:{fontSize:30, color:'burlywood'}, '💪'
        Bar({value:86, title:'part-of-speech tagging'})
        Bar({value:92, title:'verb conjugation'})

      div style:@css.brag,
        "It's actually pretty great,"
      div null,
        div style:@css.heading, "Sentence methods:"
          Square({o:demos.pos})
          Square({o:demos.sentences})
        div style:@css.heading, "Term methods:"
          Square({o:demos.pos})
          Square({o:demos.sentences})
        div style:@css.heading, "Verb methods:"
          Square({o:demos.pos})
          Square({o:demos.sentences})
        div style:@css.heading, "Noun methods:"
          Square({o:demos.pos})
          Square({o:demos.sentences})

setTimeout(->
  ReactDOM.render(React.createElement(Main), document.getElementById('main'))
,500)
