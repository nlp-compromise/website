import React from 'react';
import colors from '../colors';
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

class Doc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.css = {
      container: {
        width: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        minHeight: 300,
        padding: 20,
        margin: 50,
        borderLeft: '6px solid steelblue'
      },
      input: {
        fontSize: 29,
        fontWeight: 500,
        color: 'grey',
        width: '80%',
        margin: '10px 10px 10px 45px'
      },
      code: {
        backgroundColor: '#ebe6e6',
        color: '#484754',
        fontFamily: 'Courier',
        display: 'inline-block',
        padding: 8,
        margin: '8px 8px 8px 90px',
        position: 'relative',
        fontSize: 11,
        cursor: 'pointer'
      },
      source: {
        color: 'steelblue',
        position: 'relative',
        display: 'inline-block',
        padding: 10,
        cursor: 'pointer'
      },
      title: {
        color: 'grey',
        fontSize: 30,
        padding: 4
      },
      about: {
        fontSize: 15,
        marginLeft: 60,
        color: '#f1aa66'
      },
      result: {
        marginLeft: 120,
        color: 'grey'
      }
    };
  }

  render() {
    let {state, css, props} = this;
    return (
      <div key={props.key} style={css.container}>
        <div style={css.title}>
          {props.title}
        </div>
        <div style={css.result}>
          <ReactMarkdown source={props.md} />
          {props.html}
        </div>
      </div>
      );
  }
}
module.exports = Doc;
