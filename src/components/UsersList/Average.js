import React from 'react';

export default class extends React.Component {
  setColor() {
    if (this.props.average >= 2 && this.props.average <= 3)
      this.color = 'rgb(240,128,128)';
    else if (this.props.average > 3 && this.props.average <= 4)
      this.color = 'rgb(255,255,224)';
    else if (this.props.average > 4) this.color = 'rgb(173,255,47)';
  }

  render() {
    this.setColor();
    return (
      <div className="average" style={{ backgroundColor: this.color }}>
        {this.props.average}
      </div>
    );
  }
}
