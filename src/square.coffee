{div, span} = React.DOM

colors = [
  '#2ecc71',
  '#27ae60',
  '#e67e22',
  '#d35400',
  '#3498db',
  '#2980b9',
  '#e74c3c',
  '#c0392b',
  '#8e44ad',
  '#2c3e50',
  '#f1c40f',
  '#16a085',
];

class Square extends React.Component
  constructor: ->
    r=parseInt(Math.random()*colors.length)
    @css =
      container:
        width:350
        height:200
        margin:20
        border:"1px solid lightgrey"
        borderLeft:"6px solid "+colors[r]
        borderRadius:5
        display:'inline-block'
      title:
        fontSize:20
        padding:10
        color:'#32384d'
      input:
        textAlign:'center'
        paddingTop:30
        fontSize:20
        color:'darkgrey'
      output:
        textAlign:'center'
        fontSize:20
        paddingTop:30
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
