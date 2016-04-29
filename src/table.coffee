{table, tr, tbody, td} = React.DOM
class Table extends React.Component
  constructor: ->
    @css =
      container:
        position:'relative',
        width:"100%"
        textAlign:'center'

  render: ->
    console.log @props.data
    return (
      table style:@css.container,
        tbody null,
          for row, i in @props.data
            console.log row
            tr key:i,
              for c,o in row
                td key:o, c

    )
module.exports=Table
