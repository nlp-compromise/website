{div, span} = React.DOM

class Flipper extends React.Component
  constructor: (props)->
    console.log props
    @state={
      words:props.words,
      word:props.words[0],
      delay:Math.random()*3000 + 2000
    }
    setTimeout(=>
      @chooseWord()
    , @state.delay)

  chooseWord:=>
    r= Math.random()*@state.words.length
    r=parseInt(r)
    @state.word=@state.words[r]
    @state.delay=Math.random()*3000 + 2000
    @setState(@state)
    setTimeout(=>
      @chooseWord()
    , @state.delay)


  render: ->
    span null, @state.word



language=[
  'language',
  'text',
  'written english'
]
manipulates=[
  'manipulates',
  'changes',
  'undertands',
  'processes',
  'works with',
]
locations=[
  'in the browser',
  'on the client-side',
  'in javascript',
]

class Stage extends React.Component
  constructor: ->
    @css = {}
    @state = {}
  render: ->
    div style:{position:'relative'},
      div style:{position:'absolute',left:0, color:'lightsteelblue'},
        'nlp_compromise '
      div style:{position:'absolute',left:280, color:'darkred'},
        React.createElement(Flipper, {words:manipulates})
      div style:{position:'absolute',left:500, top:0},
        React.createElement(Flipper, {words:language})
      div style:{position:'absolute',left:360, top:75},
        React.createElement(Flipper, {words:locations})

module.exports=Stage
