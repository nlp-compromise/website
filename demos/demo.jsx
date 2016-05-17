const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell, Textfield } from 'react-mdl';
import colors from '../colors';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text || '',
      about: true,
      color:colors[parseInt(Math.random() * 9, 10)]
    };
    this.css = {
      container: {
        width: '90%',
        // overflowY: 'auto',
        overflowX: 'hidden',
        minHeight: 300,
        padding: 20,
        margin: 50,
        borderLeft: '6px solid '+ this.state.color,
        borderBotton:'1px solid grey',
        borderRadius:4
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
        color: this.state.color,
        fontSize: 30,
        padding: 4
      },
      about: {
        fontSize: 15,
        marginLeft: 30,
        color: '#f1aa66'
      },
      result: {
        marginLeft: 60,
        color: 'grey'
      }
    };
    this.doNlp = this.doNlp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.doNlp();
  }
  onChange(e) {
    let {state, props} = this;
    state.text = e.target.value;
    this.doNlp();
  }
  doNlp() {
    let {state, props} = this;
    state.result = props.callback(state.text);
    this.setState(state);
  }
  link(){
    window.location.href = this.props.href
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
          <span style={css.code} onClick={this.link.bind(this)}>
            {props.code}
          </span>
          <span style={css.source} onClick={this.link.bind(this)}>
            {'source >'}
          </span>
        </div>
        <Textfield
      expandable={false}
      onChange={this.onChange}
      label="A Sentence.."
      value={state.text}
      style={css.input}
      />
        <div style={css.result}>
          {state.result}
        </div>
      </div>
      );
  }
}
module.exports = Demo;
