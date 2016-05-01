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
        color:'steelblue'
      subtext:
        fontSize:20
        padding:15
        color:'darkgrey'
      unit:
        fontSize:30
        color:'slategrey'

    @state = {}

  render: ->
    div style: @css.container,
      span style: @css.big,
        @props.big
      span style: @css.unit,
        @props.unit
      div style: @css.subtext,
        @props.subtext

module.exports=Fact
