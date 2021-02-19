import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card'
import React from 'react'

function MovieCard() {
    return (
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img style={{ width: '18rem' }} variant="top" src="https://images.radiotimes.com/remote/images.atlas.metabroadcast.com/pressassociation.com/webANXgreenmile.jpg?quality=60&mode=crop&width=700&height=422" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>

             <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
  />, 
        </div>
    )
}

export default MovieCard
