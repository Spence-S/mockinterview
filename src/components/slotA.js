import React, { Component } from 'react';

class InterviewQuestion extends Component {
  state = {
    que: [],
    slotA: '',
    slotB: ''
  };

  componentDidMount = () => {
    this.timerA();
    this.timerB();
  };

  generateString = () => {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 12; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    this.setState({ que: this.state.que.concat(text) });
    return text;
  };

  timerA = () => {
    setInterval(() => {
      this.setState({
        slotA: this.state.que[0],
        que: [...this.state.que.slice(1, this.state.que.length)]
      });
    }, 7000);
  };

  timerB = () => {
    setInterval(() => {
      this.setState({
        slotB: this.state.que[0],
        que: [...this.state.que.slice(1, this.state.que.length)]
      });
    }, 5000);
  };

  renderQue = () => {
    return this.state.que.map(string =>
      <div>
        {string}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div>
          SlotA {this.state.slotA}
        </div>

        <div>
          SlotB {this.state.slotB}
        </div>

        {this.renderQue()}
        <button onClick={this.generateString}>Add</button>
      </div>
    );
  }
}

export default InterviewQuestion;
