import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Course.css'

const Course = (props) => {
   // console.log(props);
    const {image, name, instructor, price, description} = props.course;
    return (
        <div className="course">
            <div className="img-thumbnail mb-3">
                <img src={image} alt=""/>
            </div>
            <div className="courseName ml-3">
                <h4>{name}</h4>
                <p className="des-color">{description}</p>
                <p className="course-meta"><small>Instructor Name: {instructor}</small></p>
                <p className="course-meta">Price: ${price}</p>
                <button className="btn btn-primary"
                    onClick = {() => props.handleAddCourse(props.course)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> Enroll Now
                </button>
            </div>
            
        </div>
    );
};

export default Course;