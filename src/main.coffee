
{div, span, a, img, br} = React.DOM
{ Textfield, Grid, Cell } =require('react-mdl')
Square=require('./square.coffee')
Fact=require('./fact.coffee')
Stage=require('./stage/stage.coffee')
demos=require('./demos.coffee')


class Main extends React.Component
  constructor: ->
    @css =
      container:
        color:'grey'
      show:
        position:'relative'
        fontSize:35
        height:200
        padding:60
      usage:
        position:'relative'
        fontSize:35
        height:150
        paddingLeft:"50%"
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

  render: ->
    div style:@css.container,
      img {style:{width:30}, src:"./lib/github.png"}
      a href:"https://github.com/nlp-compromise/nlp_compromise", 'source'
      div style:@css.show,
        React.createElement(Stage)
      div style:{textAlign:'center'},
        React.createElement(Fact, {big:'100', unit:'kb', subtext:'flat js file'})
        React.createElement(Fact, {big:'85', unit:'%', subtext:'usual accuracy'})
      div style:@css.usage,
        div style:@css.code, "npm install nlp_compromise"
        div style:{fontSize:14}, 'or'
        div style:@css.code, "<script src='http://cdn.nlpcompromise.com/nlp_compromise.min.js'/>"
      div style:@css.example,
        "nlp.class('string', <options>).method()"
      div style:@css.example,
        "nlp.sentence('Jack and Jill went up the hill').people()"
      div null,
        for o in demos
          React.createElement(Square,{o:o})

setTimeout(->
  ReactDOM.render(React.createElement(Main), document.getElementById('main'))
,500)
