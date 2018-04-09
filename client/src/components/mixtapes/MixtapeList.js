import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MixtapeList extends Component {
  state = {
    mixtapes: [],
    newMixtape: {
      title: "",
      created_by: "",
      created_for: "",
      dedication: ""
    },
    mixtapeFormOpen: false,
    error: ""
  };

  componentWillMount() {
    this.fetchMixtapes();
  }

  fetchMixtapes = async () => {
    try {
      const res = await axios.get("/api/mixtapes");
      this.setState({ mixtapes: res.data.mixtapes });
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  toggleNewMixtapeForm = () => {
    this.setState({ mixtapeFormOpen: !this.state.mixtapeFormOpen });
  };

  handleChange = event => {
      
  }

  render() {
    return <div />;
  }
}

export default MixtapeList;
