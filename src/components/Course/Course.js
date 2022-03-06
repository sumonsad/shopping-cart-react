import React from 'react';
import './Course.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {name, instructor, price, image } = props.course;
    return (
        <div className="course">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>Name : {name}</h1>
                <h2>Instructor: {instructor}</h2>
                <h3>Price: {price}</h3>
                 <Button variant="warning" onClick={()=>props.handleButton(props.course)}><FontAwesomeIcon icon={faShoppingCart} /> Enrole now</Button>
            </div>
        </div>
    );
};

export default Course;