{table, tr, tbody, td} = React.DOM
class Table extends React.Component
  constructor: ->
    @css =
      container:
        position:'relative',
        width:"100%"
        textAlign:'center'

  render: ->
    return (
      table style:@css.container,
        tbody null,
          for row, i in @props.data
            tr key:i,
              for c,o in row
                td key:o, c

    )
module.exports=Table
