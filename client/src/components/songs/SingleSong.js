import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";

class Comment extends Component {
  state = {
    song: {}
  };

  deleteSong = async () => {
    const mixtapeId = this.props.match.params.id;
    const songId = this.props.song.id
    await axios.delete(`/api/mixtapes/${mixtapeId}/songs/${songId}`);
    console.log(this.props.match.params.id);
    this.props.history.push(`/api/mixtapes/${mixtapeId}`);
  };

  render() {
    return (
    <div></div>
    );
  }
}

export default Comment;
