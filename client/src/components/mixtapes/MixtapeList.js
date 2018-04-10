import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Container, Modal, Button, Card, Image } from "semantic-ui-react";
import NewMixtapeForm from "./NewMixtapeForm";

class MixtapeList extends Component {
  state = {
    mixtapes: [],
    newMixtape: {
      title: "",
      created_by: "",
      created_for: "",
      dedication: ""
    },
    mixtapeFormOpen: false,
    error: ""
  };

  componentWillMount() {
    this.getAllMixtapes();
  }

  getAllMixtapes = async () => {
    try {
      const res = await axios.get("/api/mixtapes");
      this.setState({ mixtapes: res.data });
      console.log(this.state);
    } catch (err) {
      console.log(err);
      this.setState({ err: err.message });
    }
  };

  toggleNewMixtapeForm = () => {
    this.setState({ mixtapeFormOpen: !this.state.mixtapeFormOpen });
  };

  handleChange = event => {
    const newMixtape = { ...this.state.newMixtape };
    const attribute = event.target.name;
    newMixtape[attribute] = event.target.value;
    this.setState({ newMixtape });
  };

  createNewMixtape = async event => {
    event.preventDefault();
    const res = await axios.post("api/mixtapes", this.state.newMixtape);
    const mixtapes = [...this.state.mixtapes, res.data];
    this.setState({
      mixtapes,
      newMixtape: {
        title: "",
        created_by: "",
        created_for: "",
        dedication: ""
      }
    })
    this.toggleNewMixtapeForm()
  };

  render() {
    return (
      <PageWrapper>
        <Container>
          <h1>Currently On The Mix:</h1>
          <MixtapeWrapper>
            <FlexCards>
              {this.state.mixtapes.map(mixtape => {
                return (
                  <CardWrapper>
                    <Card key={mixtape.id}>
                      <Link to={`/mixtapes/${mixtape.id}`}>
                        <Image
                          src="https://i.imgur.com/bbkj8Xo.jpg"
                          alt="cassette tape"
                        />
                        <Card.Content>
                          <Card.Header>{mixtape.title}</Card.Header>
                          <Card.Meta>
                            Created by: {mixtape.created_by}
                          </Card.Meta>
                          <Card.Meta>
                            Created for: {mixtape.created_for}
                          </Card.Meta>
                          <Card.Meta>
                            Dedication: {mixtape.dedication}
                          </Card.Meta>
                        </Card.Content>
                      </Link>
                    </Card>
                  </CardWrapper>
                );
              })}
            </FlexCards>
          </MixtapeWrapper>
          {this.state.err}
          <ButtonWrapper>
            <Button primary onClick={this.toggleNewMixtapeForm}>
              Create New Mixtape
            </Button>
          </ButtonWrapper>
          {this.state.mixtapeFormOpen ? (
            <NewMixtapeForm
              createNewMixtape={this.createNewMixtape}
              handleChange={this.handleChange}
              newMixtape={this.state.newMixtape}
            />
          ) : null}
        </Container>
      </PageWrapper>
    );
  }
}

export default MixtapeList;

const PageWrapper = styled.div`
  text-align: center;

  h1 {
    font-family: "Press Start 2P", cursive;
    padding: 10px;
  }
`;

const MixtapeWrapper = styled.div`
  font-family: "Permanent Marker", cursive;
  color: black;
  margin: 10px;
`;

const FlexCards = styled.div`
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: space-around;
  align-items: flex-start;
  align-content: flex-start;
`;

const CardWrapper = styled.div`
  box-shadow: 0 8px 16px 0 #ffff4d, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ButtonWrapper = styled.div`
margin: 30px 0px;
`
