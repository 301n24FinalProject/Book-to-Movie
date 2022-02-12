import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class SavedResultItem extends Component {
  render() {
    const { item } = this.props
    return (
      <Card style={styles.card}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Body style={styles.body}>
          <div style={styles.imageContainer}>
            <Card.Img src={`${item.image}`} alt={`${item} cover`} style={styles.image}></Card.Img>
          </div>
          <Card.Text style={styles.text}>{item.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

const styles = {
  card: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '700px', margin: '2rem', padding: '1rem', width: '500px' },
  body: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
  image: { width: '200px' },
  imageContainer: { minHeight: '350px' },
  text: { height: '150px', overflowY: 'auto' }
}