import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import styled from "styled-components";

class NewSongForm extends Component {
  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.props.createSong}>
        <Form.Field>
            <label>Track:</label>
            <input
              placeholder="Track"
              name="track"
              onChange={this.props.handleChange}
              value={this.props.newSong.track}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Artist:</label>
            <input
              placeholder="Artist"
              name="artist"
              onChange={this.props.handleChange}
              value={this.props.newSong.artist}
              maxLength="50"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Song Title:</label>
            <input
              placeholder="Song Title"
              name="title"
              onChange={this.props.handleChange}
              value={this.props.newSong.title}
              maxLength="50"
              required
            />
          </Form.Field>
          <Button color="green" type="submit">
            Submit
          </Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default NewSongForm;

const FormWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
`;
