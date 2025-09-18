import React from 'react';

function TutorDashboard() {
  return (
    <div className="page-container dashboard">
      <h1>Tutor Dashboard</h1>
      <div className="dashboard-links">
        <p>Profile</p>
        <p>Students</p>
        <p>Hours</p>
        <p>Schedule / Upcoming Classes</p>
        <p>Progress Requests</p>
        <p>Messages</p>
      </div>
      <p>This is where tutors can manage their students, schedule, and messages.</p>
    </div>
  );
}

export default TutorDashboard;