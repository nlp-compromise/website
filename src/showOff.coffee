{div, span} = React.DOM
{ Textfield, Grid, Cell } =require('react-mdl')
Tabs=require('./tabs.coffee')

class SmallDemo extends React.Component
  constructor: (props)->
    @state={
      value:props.text
    }
    @css={}

demos=
  'part-of-speech':
    title:'Part-of-Speech Tagging',
    text:"Chuck Norris can walk the walk",
    code: 'nlp.text(\'\').tags()'
    about: 'assigns the particular grammars for each term'
    callback:(t)->
      t.terms().map (t)->
        span null, t.text()
  number:
    title:'Number Parsing'
    text:"seven hundred and fifty-four"
    code: 'nlp.value(\'\').number'
    about: 'interpret texual numbers'
    callback:(v)->
      div null, v.number





class ShowOff extends React.Component
  constructor: ->
    @css = {}
    @state = {}

  onChange:(e)->
    @setState value:e.target.value

  show: ->
    div style:{color:'green'},
      React.createElement(Textfield, { label:'', value:@state.value, floatingLabel:true, onChange:@onChange.bind(this)})

  render: ->
    rendered={}
    Object.keys(demos).forEach (k)=>
      rendered[k]= @show(demos[k])
    div style:{color:'green'},
      Tabs(data:rendered)

module.exports= (args)->
  React.createElement(ShowOff, args)
