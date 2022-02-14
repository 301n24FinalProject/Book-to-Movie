import React, { Component } from 'react';
import { Container, Modal, Card, Button, Image} from 'react-bootstrap';


export default class UpdateResultItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteText: ''
    }
  }

  
  render() {
    const { show, onHide, item, saveNote } = this.props
    return (
      <Modal centered size='md' show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h2>{item?.title}</h2>
          <div >
            <Image src={`${item?.image}`} alt={`${item} cover`} />
          </div>
          <p>{item?.description}</p>
        <textarea rows="3" cols="50" defaultValue={item?.notes} onChange={(event) => this.setState({noteText: event.target.value})}></textarea>
        <Button variant="dark" onClick={() => saveNote(this.state.noteText)}>Save</Button>
        </Modal.Body>
      </Modal>
    )
  }
}

