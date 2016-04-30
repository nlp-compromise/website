{div, span} = React.DOM

class Docs extends React.Component
  constructor: ->
    @css = {}
    @state = {}

  render: ->
    div style:{color:'green'},
      'hello world'
      
module.exports=Docs
