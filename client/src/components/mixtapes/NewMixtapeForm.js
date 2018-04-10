import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class NewMixtapeForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createNewMixtape}>
        <Form.Field>
          <label>Title of Mixtape:</label>
          <input placeholder='Title' name="title" onChange={this.props.handleChange} value={this.props.newMixtape.title}/>
        </Form.Field>
        <Form.Field>
          <label>Created By:</label>
          <input placeholder='Created By' name="created_by" onChange={this.props.handleChange} value={this.props.newMixtape.created_by}/>
        </Form.Field>
        <Form.Field>
          <label>Created For:</label>
          <input placeholder='Created For' name="created_for" onChange={this.props.handleChange} value={this.props.newMixtape.created_for}/>
        </Form.Field>
        <Form.Field>
          <label>Dedication:</label>
          <input placeholder='Dedication' name="dedication" onChange={this.props.handleChange} value={this.props.newMixtape.dedication}/>
        </Form.Field>
        <Button color="green" type='submit'>Create Mixtape</Button>
      </Form>
    )
  }
}

export default NewMixtapeForm