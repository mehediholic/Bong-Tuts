import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from '../Course/Course';
import './Courses.css';
import Cart from '../Cart/Cart';


const Courses = () => {
    
    const first20 = fakeData.slice(0, 20);
    const [courses, setCourses] = useState(first20);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        
        <div className="courses-container">
            <div className="course-container">
            <h1 className="lead alert alert-primary">Find Your favourite Course Here</h1>
                    {
                        courses.map(crs => <Course
                        handleAddCourse = {handleAddCourse}
                            course={crs}
                            ></Course>)
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;