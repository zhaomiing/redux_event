import React from 'react';
import { connect } from 'react-redux';

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#f90'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.color !== nextState.color;
  }

  componentDidMount() {
    this.props.subscriber.addEvent('R$', this.randomColor, this);
  }

  randomColor(color) {
    const r = function() {
      return Math.floor(Math.random() * (256));
    };

    this.setState({
      color: color ? color : `rgb(${r()}, ${r()}, ${r()})`
    });
  }

  expandColor() {
    this.props.subscriber.emitEvent('R$', this.state.color);
  }

  render() {
    const {color} = this.state;
    return <div className="m-box"
      onClick={ this.expandColor.bind(this) }
      style={{ background: color }}
    />
  }
}

export default connect(state => ({
  subscriber: state.subscriber
}), undefined)(Box)