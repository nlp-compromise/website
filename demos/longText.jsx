import { Tabs, Tab, Textfield, Grid, Cell} from 'react-mdl';

import React from 'react';
let {nlp_compromise} = window;

let colours = {
  Noun: 'steelblue',
  Adjective: '#e5762b',
  Verb: 'darkseagreen',
  Adverb: 'mediumturquoise',
  Person: 'cornflowerblue',
  Place: 'cornflowerblue',
  Value: 'lightsalmon',
  Date: 'lightcoral',
};

let css = {
  result: {
    height: 400,
    maxHeight: 400,
    overflowY: 'auto',
    overflowX: 'hidden',
    borderRadius: 5,
    border: '1px solid grey',
    margin: 20,
    marginTop: 0
  },
  grid: {
    width: '100%',
    height: '100%',
    padding:40
  },
  sentence: {
    padding: 10,
  },
  title: {
    color: 'grey',
    fontSize: 30,
    padding: 4
  }
};

class LongText extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tabId:0,
      text: '',
      result: {},
      show: 'Noun'
    };
    this.css={};
  }

  componentDidMount () {
    this.fetch();
  }

  fetch (el) {
    let cmp = this;
    let file = 'Clinton_1998';
    if (el && el.target && el.target.value) {
      file = el.target.value;
    }
    $.get('./texts/' + file + '.txt', function (txt) {
      cmp.state.text = txt;
      cmp.state.result = nlp_compromise.text(txt);
      // console.log(cmp.state.result);
      cmp.setState(cmp.state);
    });
  }

  underline (pos) {
    this.state.show = pos;
    this.setState(this.state);
  }

  pickTexts () {
    let texts = [
      'Clinton_1998', 'Clinton_1999', 'Clinton_2000',
      'Bush_2001', 'Bush_2002', 'Bush_2003', 'Bush_2004', 'Bush_2005', 'Bush_2006', 'Bush_2007', 'Bush_2008',
      'Obama_2009', 'Obama_2010', 'Obama_2011', 'Obama_2012', 'Obama_2013', 'Obama_2014', 'Obama_2015',
    ];
    let options = texts.map(function(s, i) {
      return <option key={i} eventKey={s} value={s} title={s}>{s}</option>;
    });
    return (
      <select onChange={this.fetch.bind(this)}>
        {options}
      </select>
      );
  }

  isHighlighted(t, str) {
    if (t.pos[str]) {
      return true;
    }
    return false;
  }

  result() {
    let cmp = this;
    let sentences = (this.state.result.sentences || []).map(function(s, key) {
      let terms = s.terms.map(function(t, i) {
        let css_word = {
          borderBottom: '2px solid white'
        };
        if (cmp.isHighlighted(t, cmp.state.show)) {
          css_word.borderBottom = '3px solid ' + colours[cmp.state.show];
          css_word.color=colours[cmp.state.show]
        }
        return (
          <span key={i}>
            <span style={css_word} title={t.tag + '  ' + t.reason}>{t.text}</span>
            <span>{' '}</span>
          </span>
        )
      });
      return (
        <div style={css.sentence} key={key}>
          {terms}
        </div>
        );
    });
    return (
      <div style={css.result}>
        {sentences}
      </div>
    );
  }

  render () {
    let {state}=this
    let actions = [
      'Noun',
      'Adjective',
      'Verb',
      'Person',
      'Place',
      'Date',
      'Value',
    ];
    let tabs = actions.map(function(s, i) {
      return <Tab key={i}>{s}</Tab>;
    });
    return (
      <Grid flex={true} style={css.grid}>
        <Cell col={12}>
          <span style={css.title}>{"Text Parsing"}</span>
        </Cell>
        <Cell col={2}>
          {this.pickTexts()}
        </Cell>
        <Cell col={10}>
          <Tabs activeTab={state.tabId} onChange={(tabId) => {this.setState({tabId:tabId, show:actions[tabId]})}} ripple>
            {tabs}
          </Tabs>
        </Cell>
        <Cell col={1}/>
        <Cell col={10}>
          {this.result()}
        </Cell>
        <Cell col={1}/>

      </Grid>
      );
  }

}


module.exports = LongText;
