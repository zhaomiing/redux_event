import EventEmitter from './events';

const reducer = (state = {
  subscriber: new EventEmitter('demo'),
  SOMETHING_ELSE: {}
}, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;