import React, { Component } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import NewCommentForm from "./NewCommentForm";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {
    comments: [],
    newComment: {
      post: "",
      posted_by: ""
    },
    toggleEditForm: false
  };

  createComment = async event => {
    event.preventDefault();
    const response = await axios.post(
      `/api/mixtapes/${this.props.mixtapeId}/comments`,
      this.state.newComment
    );
    this.setState({
      newComment: {
        post: "",
        posted_by: ""
      }
    });
    this.props.getSingleMixtape();
    this.toggleCommentForm();
  };

  handleChange = event => {
    const newComment = { ...this.state.newComment };
    newComment[event.target.name] = event.target.value;
    this.setState({ newComment });
    console.log(this.state.newComment);
  };

  toggleCommentForm = () => {
    this.setState({ showCreateCommentForm: !this.state.showCreateCommentForm });
  };

  render() {
    return (
      <div>
        <ButtonWrapper>
          <Button primary onClick={this.toggleCommentForm}>
            New Comment
          </Button>
        </ButtonWrapper>
        {this.state.showCreateCommentForm ? (
          <NewCommentForm
            handleChange={this.handleChange}
            createComment={this.createComment}
            newComment={this.state.newComment}
          />
        ) : null}
        <CommentWrapper>
          {this.props.comments
            .slice(0)
            .reverse()
            .map(comment => {
              return (
                <SingleComment
                  key={comment.id}
                  comment={comment}
                  mixtapeId={this.props.mixtapeId}
                  getSingleMixtape={this.props.getSingleMixtape}
                />
              );
            })}
        </CommentWrapper>
      </div>
    );
  }
}

export default CommentList;

const CommentWrapper = styled.div`
  background-image: url("https://i.imgur.com/SY317To.jpg");
`;

const ButtonWrapper = styled.div`
  margin: 30px 0px;
`;
