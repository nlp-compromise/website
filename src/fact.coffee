{div, span} = React.DOM

class Fact extends React.Component
  constructor: ->
    @css =
      container:
        display:'inline-block'
        width:500
        height:100
      big:
        fontSize:60
        color:'#32384d'
      subtext:
        fontSize:20
        padding:15
        color:'darkgrey'
      unit:
        fontSize:30
        color:'#32384d'

    @state = {}

  render: ->
    console.log @props
    div style: @css.container,
      span style: @css.big,
        @props.big
      span style: @css.unit,
        @props.unit
      div style: @css.subtext,
        @props.subtext

module.exports=Fact
