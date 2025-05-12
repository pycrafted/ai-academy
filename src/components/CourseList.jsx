import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';

const CourseList = ({ courses }) => {
  return (
    <section className="course-list">
      <h2>Nos Cours Populaires</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="course-details">
              <span className="price">{course.price} €</span>
              <span className="level">{course.level}</span>
            </div>
            <Link to={`/courses/${course.id}`} className="btn">
              Voir les détails
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseList;