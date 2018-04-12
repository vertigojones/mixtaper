import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Table, Button } from "semantic-ui-react";
import NewSongForm from "./NewSongForm";
import SingleSong from "./SingleSong";

class SongList extends Component {
  state = {
    songs: [],
    newSong: {
      artist: "",
      title: "",
      length: 0
    },
    toggleEditForm: false,
    comments: []
  };

  createSong = async event => {
    event.preventDefault();
    const response = await axios.post(
      `/api/songs/${this.props.mixtapeId}/songs`,
      this.state.newSong
    );
    this.setState({
      newSong: {
        artist: "",
        title: "",
        length: 0
      }
    });
    this.props.getSingleMixtape();
  };

  handleChange = event => {
    const newSong = { ...this.state.newSong };
    newSong[event.target.name] = event.target.value;
    this.setState({ newSong });
    console.log(this.state.newSong);
  };

  toggleSongForm = () => {
    this.setState({ showNewSongForm: !this.state.showNewSongForm });
  };

  render() {
    return (
      <SongListWrapper>
        <ButtonWrapper>
          <Button primary onClick={this.toggleSongForm}>
            Add Song
          </Button>
        </ButtonWrapper>
        {this.state.showNewSongForm ? (
          <NewSongForm
            handleChange={this.handleChange}
            createSong={this.createSong}
            newSong={this.state.newSong}
          />
        ) : null}
        <TableWrapper>
          <Table celled fixed singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Artist</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Length</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.songs.map(song => {
                return (
                  <Table.Row key={song.id}>
                    <Table.Cell>{song.artist}</Table.Cell>
                    <Table.Cell>{song.title}</Table.Cell>
                    <Table.Cell>{song.length}</Table.Cell>
                  </Table.Row>
                );
                console.log(song);
              })}
            </Table.Body>
            {this.state.err}
          </Table>
        </TableWrapper>
      </SongListWrapper>
    );
  }
}

export default SongList;

const SongListWrapper = styled.div`
  font-family: "Permanent Marker", cursive;
`;

const TableWrapper = styled.div`
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 30px;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
