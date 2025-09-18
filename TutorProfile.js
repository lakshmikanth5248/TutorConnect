import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function TutorProfile() {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    // Fetch a single tutor's data
    const fetchTutor = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/tutors/${id}`);
        const data = await response.json();
        setTutor(data);
      } catch (error) {
        console.error('Failed to fetch tutor:', error);
      }
    };
    fetchTutor();
  }, [id]);

  if (!tutor) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="page-container tutor-profile-page">
      <h1>{tutor.name}</h1>
      <div className="profile-details">
        <p><strong>Subject:</strong> {tutor.subject}</p>
        <p><strong>Rating:</strong> {tutor.rating}</p>
        <p><strong>Experience:</strong> {tutor.experience}</p>
        <p><strong>Bio:</strong> {tutor.bio}</p>
        <p><strong>Cost:</strong> ${tutor.cost} / hour</p>
      </div>
      <Link to="/tutors">Back to Tutors</Link>
    </div>
  );
}

export default TutorProfile;