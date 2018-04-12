import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class NewSongForm extends Component {
  render () {
    return (
      <Form onSubmit={this.props.createSong}>
        <Form.Field>
          <label>Artist:</label>
          <input placeholder='Artist' name="artist" onChange={this.props.handleChange} value={this.props.newSong.artist}/>
        </Form.Field>
        <Form.Field>
          <label>Song Title:</label>
          <input placeholder='Song Title' name="title" onChange={this.props.handleChange} value={this.props.newSong.title}/>
        </Form.Field>
        <Form.Field>
          <label>Length:</label>
          <input placeholder='Length' name="length" onChange={this.props.handleChange} value={this.props.newSong.length}/>
        </Form.Field>
        <Button color="green" type='submit'>Add Song</Button>
      </Form>
    )
  }
}

export default NewSongForm