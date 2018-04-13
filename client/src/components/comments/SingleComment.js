import React, { Component } from "react";
import EditCommentForm from "./EditCommentForm";
import DeleteConfirm from "./DeleteConfirm";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import axios from "axios";

class SingleComment extends Component {
  state = {
    comment: {
      post: "",
      posted_by: ""
    },
    editForm: false,
    deleteConfirm: false
  };

  toggleDelete = () => {
    this.setState({ deleteConfirm: !this.state.deleteConfirm });
    this.setState({ editForm: false });
  };

  toggleEdit = () => {
    this.setState({ editForm: !this.state.editForm });
    this.setState({ deleteConfirm: false });
  };

  deleteComment = async () => {
    const mixtapeId = this.props.mixtapeId;
    const commentId = this.props.comment.id;
    await axios.delete(`/api/mixtapes/${mixtapeId}/comments/${commentId}`);
    await this.props.getSingleMixtape();
    this.toggleDelete();
  };

  render() {
    return (
      <CommentWrapper>
        <h3>"{this.props.comment.post}"</h3>
        <h3>Posted by: {this.props.comment.posted_by}</h3>
        <ButtonWrapper>
          <Button primary onClick={this.toggleEdit}>
            Edit
          </Button>
          <Button negative onClick={this.toggleDelete}>
            Delete
          </Button>
        </ButtonWrapper>
        {this.state.editForm ? (
          <EditCommentForm
            toggleEdit={this.toggleEdit}
            comment={this.props.comment}
            mixtapeId={this.props.mixtapeId}
            getSingleMixtape={this.props.getSingleMixtape}
          />
        ) : null}
        {this.state.deleteConfirm ? (
          <DeleteConfirm
            deleteComment={this.deleteComment}
            cancelDelete={this.toggleDelete}
          />
        ) : null}
      </CommentWrapper>
    );
  }
}

export default SingleComment;

const CommentWrapper = styled.div`
  margin: 20px;
  padding: 10px;
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
