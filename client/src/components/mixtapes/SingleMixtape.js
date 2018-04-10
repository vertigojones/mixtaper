import React, { Component } from "react";
import axios from "axios";
import { Card, Image, Grid, List, Divider, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EditMixtapeForm from "./EditMixtapeForm";

class Mixtape extends Component {
  state = {
    mixtape: {},
    songs: [],
    showEditMixtape: false
  };

  componentDidMount() {
    this.getSingleMixtape();
  }

  getSingleMixtape = async () => {
    const mixtapeId = this.props.match.params.id;
    const res = await axios.get(`api/mixtapes/${mixtapeId}`);
    this.setState({
      mixtape: res.data.mixtape,
      songs: res.data.songs
    });
    console.log(res.data);
  };

  render() {
    return <div />;
  }
}

export default Mixtape;
