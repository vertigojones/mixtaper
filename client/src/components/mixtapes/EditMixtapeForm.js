import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";

class EditMixtapeForm extends Component {
  render() {
    return (
      <Form style={{ margin: "0px 15px" }} onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <label>Title of Mixtape:</label>
          <Input
            placeholder="title"
            name="title"
            type="text"
            onChange={this.props.handleChange}
            value={this.props.mixtape.title}
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
          />
        </Form.Field>
        <Form.Button color="green" type="submit">
          Edit Mixtape
        </Form.Button>
      </Form>
    );
  }
}

export default EditMixtapeForm;
