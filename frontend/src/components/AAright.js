import React, { Component } from 'react';
import styled from 'styled-components';

import './css/rect.css';
import axios from 'axios'
import { Button,Tab,TextArea } from 'semantic-ui-react';
import RightCardSinglePage from './RightCardSinglePage';
import { PDFObject } from 'react-pdfobject';
import * as jsPDF from 'jspdf';
import PDFplaceholder from './images/PDFplaceholder.png'
import placeholder from './images/placeHol.png'
import boundingbox_placeholder from './images/boundingbox_grey.png';



const IssueWrapper = styled.div`
  padding: 3rem;
  max-width: 600px;
  margin: auto;
  white-space: pre-wrap;
`;

const Outer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const Toolbar = styled.div`
  flex: 0 1 auto;
  border-bottom: solid gray 0px;
  padding: 5px 10px;
  background: #f8f9fa;
`;

const Container = styled.div`
  text-align: center;
  flex: 1 1 auto;
  width: 100%;
  overflow: auto;
  background: #ffffff;
`;

const InnerContainer = styled.div`
  position: relative;
  margin: auto;
`;

class MultiOutput extends Component {
  constructor(props) {
    super(props);

    this.state = {
        text_line_objects : null,
        raw_text : "",
    };
  }

  

  componentDidUpdate(prevProps, prevState){

    if (prevProps.text_lines !== this.props.text_lines){
      this.setState({text_line_objects : this.props.text_lines},()=> this.raw_text_update(this.props.text_lines))
  }

}

raw_text_update = (text) => {
    let string = ""
    for ( let i = 0 ; i<text.length;i++){
      string = string.concat(text[i].text)
      string = string.concat("\n")
    }
    this.setState({raw_text : string})
}

occamb = (event,data) =>{
  this.setState({raw_text:data.value})
}

/*********************************************************************************** */
  render() {
    
    if(this.props.text_lines!== null){console.log(this.props.text_lines)}
    return (
      <div>
      <Outer>
      <Toolbar>

      <Button basic compact onClick={() => console.log("premuto")}></Button>
      
      </Toolbar>
        <Container>
        <TextArea onChange={this.occamb} placeholder='Raw data output will appear here..' style={{ minHeight: "100%" , width:"100%", maxHeight: "100%"}} value={this.state.raw_text}/>
          <InnerContainer>
          
          </InnerContainer>
        </Container>
      </Outer>
      </div>
    );
  }
}



export {MultiOutput};