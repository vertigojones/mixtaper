import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";
import styled from "styled-components";

class EditMixtapeForm extends Component {
  render() {
    return (
      <FormWrapper>
        <Form style={{ margin: "0px 15px" }} onSubmit={this.props.handleSubmit}>
          <Form.Field>
            <label>Title of Mixtape:</label>
            <Input
              placeholder="title"
              name="title"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.mixtape.title}
              maxLength="50"
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Created By:</label>
            <Input
              placeholder="created_by"
              name="created_by"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.mixtape.created_by}
              maxLength="50"
            />
          </Form.Field>
          <Form.Field>
            <label>Created For:</label>
            <Input
              placeholder="created_for"
              name="created_for"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.mixtape.created_for}
              maxLength="50"
            />
          </Form.Field>
          <Form.Field>
            <label>Dedication:</label>
            <Input
              placeholder="dedication"
              name="dedication"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.mixtape.dedication}
              maxLength="200"
            />
          </Form.Field>
          <Form.Field>
            <label>Spotify URI:</label>
            <Input
              placeholder="player_url"
              name="player_url"
              type="text"
              onChange={this.props.handleChange}
              value={this.props.mixtape.player_url}
            />
          </Form.Field>
          <Form.Button color="green" type="submit">
            Edit Mixtape
          </Form.Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default EditMixtapeForm;

const FormWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
`;
