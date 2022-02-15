import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

export default class SavedResultItem extends Component {

  render() {
    const { item, deleteItem, addNote } = this.props
    return (
      <Card bg='light' text='dark' style={styles.card}>
        <Card.Title style={{ marginTop: '3rem' }}>{item.title}</Card.Title>
        <Card.Body style={styles.body}>
          <div style={styles.imageContainer}>
            <Card.Img src={`${item.image}`} alt={`${item} cover`} style={styles.image}></Card.Img>
          </div>
          <Card.Text style={styles.text}>{item.description}</Card.Text>
          {item.notes && (
            <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '85px' }}>
              <Card.Text style={styles.notesHeader}>Notes:</Card.Text>
              <Card.Text style={styles.notes}>{item.notes}</Card.Text>
            </div>)}
          <Button style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '1000' }} variant="danger" onClick={() => deleteItem(item._id)}>Delete</Button>
          <Button variant="dark" onClick={addNote}>Add Notes</Button>
        </Card.Body>
      </Card>
    )
  }
}

const styles = {
  card: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '900px', margin: '2rem', padding: '1rem', width: '500px' },
  body: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
  image: { width: '200px' },
  imageContainer: { minHeight: '350px' },
  text: { height: '150px', overflowY: 'auto', marginTop: '-5rem' },
  notes: { height: '75px', width: '434px', textAlign: 'center', overflow: 'auto', marginTop: '-2rem' },
  notesHeader: { textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem', color: 'gray' }
}