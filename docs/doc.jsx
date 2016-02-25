import React from 'react';
import colors from '../colors';

class Doc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
      about: true,
    };
    this.css = {
      container: {
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        height: 400,
        padding: 50,
        border: '6px solid steelblue' // + colors[parseInt(Math.random() * 9, 10)]
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
      <div key={props.title} style={css.container}>
        <div style={css.title}>
          {props.title}
        </div>
        <div style={css.about}>
          {props.about}
        </div>
        <div  >
          <span style={css.code} onClick={() => {
        window.location.href = props.href;
      }}>
            {props.code}
          </span>
          <span style={css.source} onClick={() => window.location.href = props.href}>
            {'source >'}
          </span>
        </div>
        <div style={css.result}>
          {props.docs}
        </div>
      </div>
      );
  }
}
module.exports = Doc;
