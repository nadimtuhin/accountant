import React, { Component, PropTypes } from 'react';

const Option = ({id, name}) => <option value={id}>{name}</option>;

class Select extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
  };
  static defaultProps = {};

  render() {
    const { onChange, value, options } = this.props;
    return (
      <div className="form-group">
        <select
          name="type"
          onChange={onChange}
          value={value}
          className="form-control"
        >
          { options.map(op => <Option key={op.id} {...op}  />)}
        </select>
      </div>
    );
  }
}

export default Select;
