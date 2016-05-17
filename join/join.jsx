const {nlp_compromise} = window;
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Cell } from 'react-mdl';

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabId: 0
    };
    this.css = {
      container: {
        height: '100%',
        fontSize:24,
        color:'#2c3e50',
        textAlign:"center"
      },
      left:{
        fontSize:24,
        color:'#2c3e50',
        margin:20,
        width:"50%"
      },
      right: {
        fontSize:19,
        textAlign:'center',
        margin: 10,
        padding: 10
      },
      img: {
        cursor: 'pointer',
        width: 150
      }
    };
  }

  componentDidMount(){
     window.githubCardRender()
  }

  link(href){
    window.location.href = href
  }

  render() {
    let {state, css} = this;

    return (
      <table style={css.container}>
        <tbody>
          <tr>
          {/*left side*/}
          <td style={css.left}>
            <iframe src="./join/embed.html" style={{width:450, margin:20, height:250, overflow:'hidden'}}/>
            <div className="github-card" data-github="nlp-compromise/nlp_compromise" data-width="400" data-height="" data-theme="default"></div>

            <div>Join our <a href="http://superscript-slackin.herokuapp.com/">Slack group</a></div>
            <p/>
            <div>File an <a href="https://github.com/nlp-compromise/nlp_compromise/issues">issue on github</a></div>
            <p/>
            <div>Browse the <a href="./browse">annotated source</a></div>
          </td>

          {/*right side*/}
          <td style={css.right} onClick={this.link.bind(this, 'http://work.spencermounta.in')}>
            <img style={css.img} src="https://s3.amazonaws.com/spencermounta.in/portfolio/bio.jpg" />
            <div>
              Nlp_compromise was made by <a href="http://spencermounta.in">Spencer Kelly</a>
              <br/>
              {"He's a "}
              <a href="mailto:spencermountain@gmail.com">pretty approachable guy</a>
            </div>
          </td>

          </tr>
        </tbody>
      </table>
      );
  }
}
module.exports = Join;
