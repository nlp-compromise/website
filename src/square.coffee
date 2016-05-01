{div, span} = React.DOM

colors = [
  '#fc9c9d',
  '#3498db'
];

class Square extends React.Component
  constructor: ->
    r=parseInt(Math.random()*colors.length)
    @css =
      container:
        width:250
        height:100
        margin:20
        # border:"1px solid lightgrey"
        borderLeft:"6px solid "+colors[r]
        borderRadius:5
        position:'relative'
        display:'inline-block'
      title:
        fontSize:20
        padding:10
        color:'#32384d'
      input:
        textAlign:'center'
        paddingTop:5
        fontSize:20
        color:'darkgrey'
      output:
        textAlign:'center'
        fontSize:15
        paddingTop:10
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
