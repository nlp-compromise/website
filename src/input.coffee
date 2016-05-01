{div, span, input} = React.DOM
debounce = require('lodash.debounce');

class Input extends React.Component
  constructor: (props)->
    @css =
      container:
        position:'relative'
        textAlign:'center'
        paddingTop:20
        paddingLeft:50
      input:
        fontSize:30
        textAlign:'center'
        width:600
        margin:20
        paddingLeft:30
        paddingTop:10
        color:'slategrey'
        border:'none'
        outline:'none'
        borderBottom:'4px solid lightsteelblue'
        borderRadius:2
    @state = {
      timeout:null,
      value:props.value||''
    }
    @callback=@callback.bind(this)

  componentWillReceiveProps:(props)->
    @state = {
      timeout:null,
      value:props.value||''
    }
    @props.callback(props.value)

  callback:->
    str= @refs.input.value
    console.log str
    if @props.callback
      @props.callback(str)

  onChange:()->
    str= @refs.input.value
    @state.value=str
    @setState(@state)
    clearTimeout(@state.timeout)
    @state.timeout= setTimeout(@callback,500)

  render: ->
    div style:@css.container,
      input {type:'text', ref:'input', value:@state.value, style:@css.input, onChange:@onChange.bind(this)}

module.exports=(attr)->
  React.createElement(Input, attr)
