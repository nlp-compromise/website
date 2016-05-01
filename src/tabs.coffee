{div, span, table, tr, tbody, td} = React.DOM

class Tabs extends React.Component
  constructor: (props)->
    @css =
      container:
        width:"80%"
        textAlign:"center"
        marginLeft:40
      main:
        width:"80%"
        textAlign:"center"
        position:"relative"
        minHeight:200,
        borderRadius:5
      tab:
        color:"lightgrey"
        borderBottom:"3px solid lightsteelblue"
        marginLeft:20
        marginRight:20
        marginBottom:5
        padding: "0px 15px 0px 15px"
        cursor:'pointer'
        fontSize:25
      selected_tab:
        color:"grey"
        borderBottom:"4px solid #fc9c9d"
    @css.selected_tab=Object.assign({}, @css.tab, @css.selected_tab)

    @state = {
      tab:Object.keys(props.data)[0]
    }

  onChange:(id)->
    @setState({tab:id})

  render: ->
    div style:@css.container,
      table style:{width:"100%", borderBottom:'1px solid lightgrey'},
        tbody null,
          tr null,
            for k,i in Object.keys(@props.data)
              td key:k,
                if @state.tab==k
                  span {style:@css.selected_tab, onClick:@onChange.bind(this,k)}, k
                else
                  span {style:@css.tab, onClick:@onChange.bind(this,k)}, k

      div style:@css.main,
        @props.data[@state.tab]


module.exports= (args)->
  React.createElement(Tabs, args)
