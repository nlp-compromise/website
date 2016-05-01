{div, span, pre} = React.DOM
nlp =require('/home/spencer/mountain/nlp/nlp_compromise')
# nlp =require('nlp_compromise')
Tabs=require('./tabs.coffee')
Input=require('./input.coffee')

class SmallDemo extends React.Component
  constructor: (props)->
    @state={}
    @css={}
    @showChange.bind(this, props.text)

  componentWillReceiveProps:(props)->
    @showChange.bind(this, props)

  showChange:(str)=>
    @state.result= @props.callback(str)
    @setState(@state)

  render:->
    div null,
      Input({value:@props.text, callback:@showChange})
      div null, @state.result




demos=
  'part-of-speech':
    title:'Part-of-Speech Tagging',
    text:"Chuck Norris can walk the walk",
    code: 'nlp.text(\'\').tags()'
    about: 'assigns the particular grammars for each term'
    callback:(str)->
      text= nlp.text(str)
      return text.terms().map (t)->
        span null,
          span null, t.whitespace.preceding
          span null, t.text
          span null, t.whitespace.trailing
  'topic spot':
    title:'Entity Spotting'
    text:"ooh-ee-ooo, i look just like buddy holly. Uh-oh and you're Mary Tyler Moore."
    code: 'nlp.text(\'\').topics'
    about: 'named-entity recognition'
    callback:(str)->
      topics= nlp.text(str).topics()
      div style:{},
        topics.map (t,i)->
          span key:i,style:{padding:10, fontSize:28}, '"'+t.text+'"'
  'number':
    title:'Number Parsing'
    text:"seven hundred and fifty-four"
    code: 'nlp.value(\'\').number'
    about: 'interpret texual numbers'
    callback:(str)->
      v= nlp.value(str)
      div style:{fontSize:40}, v.number





class ShowOff extends React.Component
  constructor: ->
    @css = {}
    @state = {}

  onChange:(e)->
    @setState value:e.target.value

  show: (o)->
    div style:{color:'green'},
        React.createElement(SmallDemo, o)

  render: ->
    rendered={}
    Object.keys(demos).forEach (k)=>
      rendered[k]= @show(demos[k])
    div style:{color:'green'},
      Tabs(data:rendered)

module.exports= (args)->
  React.createElement(ShowOff, args)
