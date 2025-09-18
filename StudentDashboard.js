import React from 'react';

function StudentDashboard() {
  return (
    <div className="page-container dashboard">
      <h1>Student Dashboard</h1>
      <div className="dashboard-links">
        <p>Features</p>
        <p>Profile</p>
        <p>Dashboard (Classes/Hours)</p>
        <p>Assessment</p>
        <p>Schedule</p>
        <p>Progress</p>
      </div>
      <p>This is where students can manage their classes, find tutors, and view progress.</p>
    </div>
  );
}

export default StudentDashboard;