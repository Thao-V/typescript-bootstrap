import React from 'react';
interface DisplayMsgProps{
  type?:string;
  text:string;
}
export default class DisplayMsg extends React.Component<DisplayMsgProps>{
  state = {name: ""};
  handleChange = (event: any) => {
    this.setState({name: event.target.value});
  }
  render(){
    const {text, type} = this.props;
    return(
      <div>
        <p>{text}</p>
        <input value={this.state.name} onChange={this.handleChange}></input>
      </div>
    )
  }
}