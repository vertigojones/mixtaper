import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import NewMixtapeForm from "./NewMixtapeForm";

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
    const newMixtape = { ...this.state.newMixtape };
    const attribute = event.target.name;
    newMixtape[attribute] = event.target.value;
    this.setState({ newMixtape });
  };

  createNewMixtape = async event => {
    event.preventDefault();
    const res = await axios.post("api/mixtapes", this.state.newMixtape);
    const mixtapes = [...this.state.mixtapes, res.data];
    this.setState({
      mixtapes,
      newMixtape: {
        title: "",
        created_by: "",
        created_for: "",
        dedication: ""
      }
    });
  };

  render() {
    return (
      <PageWrapper>
        <h1>Currently On The Mix:</h1>
        <button primary onClick={this.toggleNewMixtapeForm}>
          Create New Mixtape
        </button>
        {this.state.mixtapeFormOpen ? (
          <NewMixtapeForm
            createNewMixtape={this.createNewMixtape}
            handleChange={this.handleChange}
            newMixtape={this.state.newMixtape}
          />
        ) : null}
      </PageWrapper>
    );
  }
}

export default MixtapeList;

const PageWrapper = styled.div``;
