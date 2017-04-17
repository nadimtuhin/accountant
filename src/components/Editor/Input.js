import React, { Component, PropTypes } from 'react';

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    categoryType: PropTypes.string.isRequired
  };

  static defaultProps = {
    categoryType: 'text'
  };

  render() {
    const { onChange, value, type } = this.props;
    return (
      <div className="form-group">
        <input type={type} value={value} onChange={onChange}  className="form-control" />
      </div>
    );
  }
}

export default Input;
