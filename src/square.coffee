{div, span} = React.DOM

class Square extends React.Component
  constructor: ->
    @css =
      container:
        width:300
        height:150
        margin:20
        border:"1px solid lightgrey"
        borderLeft:"3px solid steelblue"
        borderRadius:5
        display:'inline-block'
      title:
        fontSize:20
        padding:5
      input:
        textAlign:'center'
        paddingTop:10
        fontSize:15
        color:'#32384d'
      output:
        textAlign:'center'
        paddingTop:50
        color:'steelblue'

    @state = {}
  onClick:=>

  render: ->
    o=@props.o
    div {style:@css.container, onClick:@onClick},
      div style:@css.title, o.title
      div style:@css.input, '"'+o.square.from+'"'
      div style:@css.output, o.square.to

module.exports=Square
