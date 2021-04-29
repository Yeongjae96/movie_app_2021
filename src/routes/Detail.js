import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location);
  }
  render() {
    const { title } = this.props.location.state;
    return <span>{title}</span>;
  }
}

export default Detail;