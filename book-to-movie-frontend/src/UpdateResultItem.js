import React, { Component } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';


export default class UpdateResultItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteText: ''
    }
  }


  render() {
    const { show, onHide, item, saveNote, closeModal } = this.props
    return (
      <Modal style={{ height: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'center', top: '-5rem' }} centered size='md' show={show} onHide={onHide} >
        <Modal.Header>
          <Modal.Title style={{ textAlign: 'center' }}>Add Notes</Modal.Title>
          <Button variant='dark' style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={closeModal}>X</Button>
        </Modal.Header>
        <Modal.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3>{item?.title}</h3>
          <Image src={`${item?.image}`} alt={`${item?.title} cover`} style={{ height: '200px', width: '130px', marginTop: '1rem' }} />
          <p style={{ height: '150px', width: '420px', overflow: 'auto', margin: '2rem 0' }}>{item?.description}</p>
          <textarea rows="3" cols="55" defaultValue={item?.notes} onChange={(event) => this.setState({ noteText: event.target.value })}></textarea>
          <Button style={{ display: 'block', marginTop: '1rem' }} variant="dark" onClick={() => saveNote(this.state.noteText)}>Save</Button>
        </Modal.Body>

      </Modal>
    )
  }
}

