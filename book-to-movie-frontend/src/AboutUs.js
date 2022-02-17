import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { SocialIcon } from 'react-social-icons';

// React.render(<SocialIcon url="https://linkedin.com/in/pedrogperezalvarez/"/>, document.body);

class AboutUs extends Component {
  render() {
    return (
    <Container fluid style= {{ display: 'flex', flexDirection: 'row' , justifyContent: 'center', width: '100%', alignItems: 'center', height: '100vh'}}>
      <Container fluid style= {{ display: 'flex', flexDirection: 'row' , justifyContent: 'center', width: '75%', alignItems: 'justify', height: '100vh', marginTop: '20rem'}}>
      {/* <Row> */}
      <Card bg='light' text='dark' style={styles.card}>
      <Card.Title style={{ marginTop: '2rem', fontSize: '2rem' }} >
        {"Marni Hager"}
        <ul></ul>
        <Row style={{justifyContent: 'space-between'}}>
        <SocialIcon url="https://linkedin.com/in/marnihager" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://github.com/mlh6118" style={{ height: 35, width: 35 }} />
        </Row>
      </Card.Title>
      <Card.Body style={styles.body}>
        <div style={styles.imageContainer}>
          <Card.Img src={require('./images/About-img/marni.jpg')} alt={`Coming Soon`} style={styles.image}></Card.Img>
        </div>
        <Card.Text style={styles.text}>{'My name is Marni Hager. I am a software developer with a background in manufacturing engineering for aerospace companies. As a manufacturing engineer, I have learned to optimize various types of processes, including mapping out the steps of a process and determining which are value added and which are waste. I have translated this into code in more recent years at my job by automating processes that were taking a full day into something that takes less than an hour. My current goal is to find a job that will allow me to combine my skills as a manufacturing engineer with being a programmer.'} </Card.Text>
      </Card.Body>
      </Card>
      <Card bg='light' text='dark' style={styles.card}>
      <Card.Title style={{ marginTop: '2rem', fontSize: '2rem' }} >
        {"Sergii Otryshko"}
        <ul></ul>
        <Row style={{justifyContent: 'space-between'}}>
        <SocialIcon url="https://linkedin.com/in/sergii-otryshko" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://github.com/S14mx" style={{ height: 35, width: 35 }} />
        </Row>
        </Card.Title>
      <Card.Body style={styles.body}>
        <div style={styles.imageContainer}>
          <Card.Img src={require('./images/About-img/sergii.jpg')} alt={`Coming Soon`} style={styles.image}></Card.Img>
        </div>
        <Card.Text style={styles.text}>{'Sergii Otryshko is a software engineer who enjoys taking on challenges and finding customer-oriented solutions. He has a background in law, telecommunications and customer service and he’s looking to bring his various work experiences to his new career to approach problems from non-standard angles.'} </Card.Text>
      </Card.Body>
      </Card>
      <Card bg='light' text='dark' style={styles.card} >
      <Card.Title style={{ marginTop: '2rem', fontSize: '2rem' }} >
        {"Pedro G. Perez"}
        <ul></ul>
        <Row style={{justifyContent: 'space-between'}}>
        <SocialIcon url="https://linkedin.com/in/pedrogperezalvarez" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://github.com/PGPere" style={{ height: 35, width: 35 }} />
        </Row>
        </Card.Title>
      <Card.Body style={styles.body}>
        <div style={styles.imageContainer}>
          <Card.Img src={require('./images/About-img/pedro.jpg')} alt={`Coming Soon`} style={styles.image}></Card.Img>
        </div>
        <Card.Text style={styles.text}>{'Pedro is a developer with a background in financial management and electrical engineering. He is passionate about using code to maximize efficiency while developing creative, customer-focused solutions. Heis a clear thinker and problem solver with highly analytical skills,accustomed to interfacing with multiple functional areas.'} </Card.Text>
      </Card.Body>
      </Card>
      {/* </Row> */}
      </Container>
    </Container>
    )
  }
}

const styles = {
card: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '575px', margin: '0rem 3rem', padding: '0rem', width: '400px' },
body: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
image: { width: '200px' , height: '200px', objectFit: 'cover'},
imageContainer: { minHeight: '250px' },
text: { height: '200px', overflowY: 'auto', marginTop: '-3rem'},
}

export default withAuth0(AboutUs);