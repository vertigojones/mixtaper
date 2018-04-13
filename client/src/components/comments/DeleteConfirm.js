import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

class DeleteConfirm extends Component {
  render() {
    return (
      <ConfirmWrapper>
        <h4>Are you sure?</h4>
        <Button negative onClick={this.props.deleteComment}>
          Yes
        </Button>
        <Button primary onClick={this.props.cancelDelete}>
          No
        </Button>
      </ConfirmWrapper>
    );
  }
}

export default DeleteConfirm;

const ConfirmWrapper = styled.div`
  color: navy;
  text-shadow: 1px 1px #66ff33;

  h4 {
    font-family: "Permanent Marker", cursive;
    margin: 10px;
  }
`;
