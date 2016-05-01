'use strict'
d3Scale=require('d3-scale')
ReactDom=require('react-dom')
{div, span} = React.DOM


class Bar extends React.Component
  constructor:(props)->
    @state =
      width:600
      value:props.value
    @css =
      container:
        position:'relative'
        margin:40
        width:'100%'
        display:'block'
        height:40
    @set_proper_width=@set_proper_width.bind(this)

  componentDidMount: ()=>
    @set_proper_width()

  # grow chart width to fit parent element
  set_proper_width:()->
    ReactDom.findDOMNode(this);
    if (el != null)
      @state.width = el.offsetWidth;
      @setState(@state);

  render:()->
    console.log @state
    x_scale = d3Scale.scaleLinear();
    x_scale.domain([0, 100]).range([0, @state.width]).clamp(false);
    x=x_scale(@state.value)
    console.log x_scale
    console.log x

    div style:@css.container,
      span style:{position:'absolute', left:x-10}, @state.value + "%"
      span style:{position:'absolute', left:0}, @props.title
      div style:{position:'absolute', left:0, top:20, width:x, height:4, backgroundColor:'steelblue'}, ''
      div style:{position:'absolute', left:0, top:24, width:@state.width, height:2, backgroundColor:'lightgrey'}, ''


module.exports= (args)->
  React.createElement(Bar, args)
