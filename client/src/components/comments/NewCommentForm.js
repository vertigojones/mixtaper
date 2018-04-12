import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import styled from "styled-components";

class NewCommentForm extends Component {
  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.props.createComment}>
          <Form.Field>
            <label>Comment:</label>
            <input
              placeholder="Comment"
              name="post"
              onChange={this.props.handleChange}
              value={this.props.newComment.post}
            />
          </Form.Field>
          <Form.Field>
            <label>Posted By:</label>
            <input
              placeholder="Posted By"
              name="posted_by"
              onChange={this.props.handleChange}
              value={this.props.newComment.posted_by}
            />
          </Form.Field>
          <ButtonWrapper>
            <Button color="green" type="submit">
              Submit Comment
            </Button>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    );
  }
}

export default NewCommentForm;

const FormWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 50%;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
