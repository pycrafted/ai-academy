import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const CoursesPage = ({ courses }) => {
  const [filter, setFilter] = useState('all');

  const filteredCourses = filter === 'all'
    ? courses
    : courses.filter(course => course.level.toLowerCase() === filter.toLowerCase());

  return (
    <main className="main-content">
      <h1>Nos Cours</h1>

      <div className="filter-section">
        <h3>Filtrer par niveau:</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous
          </button>
          <button
            className={`filter-btn ${filter === 'débutant' ? 'active' : ''}`}
            onClick={() => setFilter('débutant')}
          >
            Débutant
          </button>
          <button
            className={`filter-btn ${filter === 'intermédiaire' ? 'active' : ''}`}
            onClick={() => setFilter('intermédiaire')}
          >
            Intermédiaire
          </button>
          <button
            className={`filter-btn ${filter === 'avancé' ? 'active' : ''}`}
            onClick={() => setFilter('avancé')}
          >
            Avancé
          </button>
        </div>
      </div>

      <div className="courses-container full-width">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div className="course-card detailed" key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-details">
                <span className="price">{course.price} €</span>
                <span className="level">{course.level}</span>
              </div>
              <ul className="course-features">
                <li>Accès illimité au contenu</li>
                <li>Projets pratiques</li>
                <li>Certificat de compétence</li>
                <li>Support de la communauté</li>
              </ul>
              <Link to={`/courses/${course.id}`} className="btn">
                Voir les détails
              </Link>
            </div>
          ))
        ) : (
          <p className="no-courses">Aucun cours ne correspond à votre filtre.</p>
        )}
      </div>
    </main>
  );
};

export default CoursesPage;