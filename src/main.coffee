
{div, span, a, img, br} = React.DOM
{ Textfield, Grid, Cell } =require('react-mdl')
Square=require('./square.coffee')
Stage=require('./stage/stage.coffee')
demos=require('./demos.coffee')

Table= (args)->
  React.createElement(require('./table.coffee'), args)
Fact= (args)->
  React.createElement(require('./fact.coffee'), args)


class Main extends React.Component
  constructor: ->
    @css =
      container:
        color:'grey'
      show:
        position:'relative'
        # fontSize:35
        height:200
        padding:60
      usage:
        position:'relative'
        fontSize:35
        height:150
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
        backgroundColor: '#ebe6e6'
        color: '#484754'
        fontFamily: 'Courier',
        padding: 8,
        margin: 8,
        fontSize:12
    @state = {
      arr:[1,2,3]
    }

  usage:->
    div style:@css.usage,
      div style:@css.code, "npm install nlp_compromise"
      div style:{fontSize:14}, 'or'
      div style:@css.code, "<script src='http://cdn.nlpcompromise.com/nlp_compromise.min.js'/>"

  render: ->
    brag=Fact({big:'110', unit:'kb', subtext:'flat js file'})
    install=@usage()
    div style:@css.container,
      img {style:{width:30}, src:"./lib/github.png"}
      a href:"https://github.com/nlp-compromise/nlp_compromise", 'source'
      div style:@css.show,
        div null, "🌈 hi,"
        div null, "nlp_compromise does NLP in the browser"
        # React.createElement(Stage)

      Table({data:[ [[brag],[install]] ] })
      div null,
        for o in demos
          React.createElement(Square,{o:o})

setTimeout(->
  ReactDOM.render(React.createElement(Main), document.getElementById('main'))
,500)
