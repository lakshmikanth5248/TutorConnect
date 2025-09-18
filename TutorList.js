import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function TutorList() {
  const [tutors, setTutors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch tutor data from your backend
    const fetchTutors = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tutors');
        const data = await response.json();
        setTutors(data);
      } catch (error) {
        console.error('Failed to fetch tutors:', error);
      }
    };
    fetchTutors();
  }, []);

  const filteredTutors = tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container tutor-list-page">
      <h1>Find a Tutor</h1>
      <input
        type="text"
        placeholder="Search by name or subject"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="tutor-cards-container">
        {filteredTutors.length > 0 ? (
          filteredTutors.map(tutor => (
            <div key={tutor.id} className="tutor-card">
              <h2>{tutor.name}</h2>
              <p><strong>Subject:</strong> {tutor.subject}</p>
              <Link to={`/tutors/${tutor.id}`}>View Profile</Link>
            </div>
          ))
        ) : (
          <p>No tutors found.</p>
        )}
      </div>
    </div>
  );
}

export default TutorList;