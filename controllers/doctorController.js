const db = require('../config/db');

exports.getAllDoctors = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Doctors');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDoctor = async (req, res) => {
  const { first_name, last_name, email, password_hash, phone, specialty } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Doctors (first_name, last_name, email, password_hash, phone, specialty) VALUES (?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, password_hash, phone, specialty]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Implement other CRUD operations similarly