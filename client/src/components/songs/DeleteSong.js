import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

class DeleteSong extends Component {
  deleteSong = async () => {
    const mixtapeId = this.props.mixtapeId;
    const songId = this.props.song;
    await axios.delete(`/api/mixtapes/${mixtapeId}/songs/${songId}`);
    await this.props.getSingleMixtape();
  };

  render() {
    return (
      <div>
        <Button negative onClick={this.deleteSong}>
          Delete Song
        </Button>
      </div>
    );
  }
}

export default DeleteSong;
