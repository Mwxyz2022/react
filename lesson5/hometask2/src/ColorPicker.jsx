import React, { Component } from 'react';

const AQUA = 'Aqua';
const CORAL = 'Coral';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorName: null,
    };
  }

  over = colorName => {
    this.setState({
      colorName,
    });
  };

  out = () => {
    this.setState({
      colorName: null,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.over(CORAL)}
            onMouseOut={() => this.out(CORAL)}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.over(AQUA)}
            onMouseOut={() => this.out(CORAL)}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.over(BISQUE)}
            onMouseOut={() => this.out(CORAL)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
