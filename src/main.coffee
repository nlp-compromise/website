# React=require('react')
# ReactDom=require('react-dom')
{div, span} = React.DOM
{ Textfield, Grid, Cell } =require('react-mdl')

{div, span} = React.DOM

class Two extends React.Component
  constructor: ->
    @css = {}
    @state = {
      color:'red'
    }
    # @onClick=@onClick.bind(this)

  onClick:=>
    this.setState=this.setState.bind(this)
    console.log(@setState)
    @setState({color:'green'})

  render: ->
    div {style:{color:@state.color}, onClick:@onClick}, 'two'

Two=React.createElement(Two)

class Main extends React.Component
  constructor: ->
    @css = {}
    @state = {
      arr:[1,2,3]
    }

  render: ->
    div style:{color:'green'},
      for n in @state.arr
        div null, n
      Two


setTimeout(->
  ReactDOM.render(React.createElement(Main), document.getElementById('main'))
,500)
