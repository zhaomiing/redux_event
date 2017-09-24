import React from 'react';
import { connect } from 'react-redux';
import Box from './box';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
  }

  componentDidMount() {
    this.props.subscriber.addEvent('R$', this.setColor, this);
  }

  randomColor(e) {
    const color = e.target.value;
  
    this.props.subscriber.emitEvent('R$', color);
    this.setColor(color);
  }

  setColor(color) {
    this.setState({
      color
    });
  }

  render() {
    const list = [];

    for(let i = 0, l = 100; i < l; i++) {
      list.push(<Box key={ i }/>);
    }

    return <div>
      <p>
        <button onClick={ this.randomColor.bind(this) }>随机</button>
        <input type="text"
          onChange={ this.randomColor.bind(this) }
          style={{ marginLeft: 10 }}
          value={ this.state.color }
          placeholder="color"
        />
      </p>
      {list}
    </div>
  }
}

export default connect(state => ({
  subscriber: state.subscriber
}), undefined)(Main);