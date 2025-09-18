const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// A simple in-memory "database"
const tutors = [
    { id: 1, name: 'John Doe', subject: 'Mathematics', rating: 4.8, experience: '5 years', bio: 'Expert in algebra and calculus.', cost: 45 },
    { id: 2, name: 'Jane Smith', subject: 'Physics', rating: 5.0, experience: '10 years', bio: 'Specializing in quantum mechanics.', cost: 60 },
    { id: 3, name: 'Peter Jones', subject: 'English', rating: 4.5, experience: '3 years', bio: 'Helping students with literature and writing.', cost: 35 },
];

// Endpoint to get all tutors
app.get('/api/tutors', (req, res) => {
    res.json(tutors);
});

// Endpoint to get a single tutor by ID
app.get('/api/tutors/:id', (req, res) => {
    const tutorId = parseInt(req.params.id);
    const tutor = tutors.find(t => t.id === tutorId);

    if (tutor) {
        res.json(tutor);
    } else {
        res.status(404).json({ message: 'Tutor not found.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});