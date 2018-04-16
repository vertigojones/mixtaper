import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import styled from "styled-components";

class NewMixtapeForm extends Component {
  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.props.createNewMixtape}>
          <Form.Field>
            <label>Title of Mixtape:</label>
            <input
              placeholder="Title"
              name="title"
              onChange={this.props.handleChange}
              value={this.props.newMixtape.title}
              maxLength="50"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Created By:</label>
            <input
              placeholder="Created By"
              name="created_by"
              onChange={this.props.handleChange}
              value={this.props.newMixtape.created_by}
              maxLength="50"
            />
          </Form.Field>
          <Form.Field>
            <label>Created For:</label>
            <input
              placeholder="Created For"
              name="created_for"
              onChange={this.props.handleChange}
              value={this.props.newMixtape.created_for}
              maxLength="50"
            />
          </Form.Field>
          <Form.Field>
            <label>Dedication:</label>
            <input
              placeholder="Dedication"
              name="dedication"
              onChange={this.props.handleChange}
              value={this.props.newMixtape.dedication}
              maxLength="200"
            />
          </Form.Field>
          <Form.Field>
            <label>Spotify URI:</label>
            <input
              placeholder="Spotify URI"
              name="player_url"
              onChange={this.props.handleChange}
              value={this.props.newMixtape.player_url}
            />
          </Form.Field>
          <ButtonWrapper>
            <Button color="green" type="submit">
              Create Mixtape
            </Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    );
  }
}

export default NewMixtapeForm;

const FormWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
