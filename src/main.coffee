
{div, span, a, img, br, h2, p} = React.DOM
demos=require('./demos.coffee')
ShowOff=require('./showOff.coffee')
Input=require('./input.coffee')
Bar=require('./bar.coffee')
Docs=require('./docs.coffee')

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
        padding:30
        paddingBottom:5
      squares:
        paddingLeft:50
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
      a style:{color:'steelblue', position:'fixed', backgroundColor:'white', left:0, top:0, textDecoration:'none'},href:"https://github.com/nlp-compromise/nlp_compromise",
        'source'
        img {style:{padding:5,width:25}, src:"./lib/github.png"}
      div style:@css.show,
        div null,
          span style:{color:'steelblue', fontSize:30}, "🌈"
          span style:{color:'lightsteelblue', fontSize:20}, " hi,"
        div  style:{padding:40, color:'lightsteelblue'},
          span style:{color:'steelblue', fontWeight:500, fontSize:25}, "nlp_compromise "
          span null, "does NLP in the browser"
          span style:{fontSize:35, color:'steelblue'}, "☔"

      ShowOff()
      p()
      p()
      Table({data:[ [[brag],[install]] ] })

      div style:{paddingLeft:"20%", paddingTop:90, paddingBottom:90},
        div style:{fontSize:30, color:'burlywood'}, '💪'
        Bar({value:86, title:'part-of-speech tagging', desc:'on the Penn Treebank'})
        Bar({value:96, title:'us-uk localization', desc:'on silenRob\'s testset', link:'https://github.com/superscriptjs/normalizer/blob/master/data/british.txt'})
        Bar({value:89, title:'verb conjugation', desc:'on the nodeBox 8k test', link:'https://github.com/nlp-compromise/nlp_compromise/tree/master/test/perf_tests/conjugate_test/nodebox'})

      div style:@css.brag,
        "It's actually pretty great,"
      div null,
        div style:@css.heading, "Sentence methods:"
          div style:@css.squares,
            Square({o:demos.pos})
            Square({o:demos.sentences})
            Square({o:demos.negation})
            Square({o:demos.match})

        div style:@css.heading, "Term methods:"
          div style:@css.squares,
            Square({o:demos.locale})
            Square({o:demos.syllable})
            Square({o:demos.conjugation})
            Square({o:demos.inflection})
            Square({o:demos.number})
      div style:@css.brag,
        Docs()

setTimeout(->
  ReactDOM.render(React.createElement(Main), document.getElementById('main'))
,500)
