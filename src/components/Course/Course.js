import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const Course = (props) => {

    const {img,name,owner,rating,price} = props.course;
    console.log(props.course);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="250px"/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title> 
                        <Card.Title className="text-secondary">{owner}</Card.Title>
                        <Card.Title>
                        <ReactStars
                        count={5}
                        value={rating}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                      /></Card.Title>
                        <Card.Title>${price}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;