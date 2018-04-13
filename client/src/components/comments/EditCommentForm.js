import React, { Component } from "react";
import styled from "styled-components";
import { Input, Form, Button } from "semantic-ui-react";

import axios from "axios";

class EditCommentForm extends Component {
  state = {
    comment: {
      post: "",
      posted_by: ""
    },
    editForm: false,
    deleteConfirm: false
  };

  componentDidMount() {
    this.setState({ comment: this.props.comment });
  }

  updateComment = async event => {
    event.preventDefault();
    const mixtapeId = this.props.mixtapeId;
    const commentId = this.props.comment.id;
    const payload = this.state.comment;
    await axios.patch(
      `/api/mixtapes/${mixtapeId}/comments/${this.props.comment.id}`,
      payload
    );
    this.props.getSingleMixtape();
    this.props.toggleEdit();
  };

  handleChange = event => {
    const comment = { ...this.state.comment };
    comment[event.target.name] = event.target.value;
    this.setState({ comment });
  };

  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.updateComment}>
          <Form.Field>
            <label>Comment:</label>
            <input
              placeholder="Comment"
              name="post"
              onChange={this.handleChange}
              value={this.state.comment.post}
            />
          </Form.Field>
          <Form.Field>
            <label>Posted By:</label>
            <input
              placeholder="Posted By"
              name="posted_by"
              onChange={this.handleChange}
              value={this.state.comment.posted_by}
            />
          </Form.Field>
          <ButtonWrapper>
            <Button color="green" type="submit">
              Update Comment
            </Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    );
  }
}

export default EditCommentForm;

const FormWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
