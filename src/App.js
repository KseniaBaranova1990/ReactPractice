import React from "react";
import "./App.css";

class WhoAmI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
    };
    this.nextYear = this.nextYear.bind(this);
  }
  nextYear() {
    this.setState((state) => ({
      years: ++state.years,
    }));
  }

  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <>
        <h1>
          My name is {name} my surname is {surname} years={years}
        </h1>
        <button onClick={this.nextYear}>++</button>
        <a href={link}>My Profile</a>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Mike" surname="Brown" link="facebook.com" />
      <WhoAmI name="Kate" surname="Wispa" link="facebook.com" />
    </>
  );
};

export default All;
