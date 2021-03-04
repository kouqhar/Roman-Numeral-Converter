import React, { Component } from "react";
import Aux from "./Aux/Aux";
import Header from "../../components/defaultLayout/Header/Header";
import Footer from "../../components/defaultLayout/Footer/Footer";
import Converter from "../../components/Converter/Converter";
import GetRomanNumeral from "../../components/Converter/folder/Conversion";
import styles from "./Layout.module.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      romanNumeral: "",
    };
  }

  setNumber = (e) => {
    e.preventDefault();
    let number = e.target.value;

    this.setState({
      number,
    });

    if (this.state.number === "" && this.state.romanNumeral.length > 0) {
      this.setState({
        romanNumeral: "",
      });
    }
  };

  convertNumber = () => {
    let num = this.state.number;
    const romanNumeral = GetRomanNumeral(num);

    this.setState({
      romanNumeral,
    });
  };

  render() {
    const { number, romanNumeral } = this.state;

    return (
      <Aux className={styles.Layout}>
        <Header />
        <Converter
          value={number}
          change={this.setNumber}
          numeral={romanNumeral}
          clicked={this.convertNumber}
        />
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
