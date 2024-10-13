const db = require('../config/db');

exports.getAllPatients = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Patients');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPatient = async (req, res) => {
  const { first_name, last_name, email, password_hash, phone, date_of_birth, gender, address } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email, password_hash, phone, date_of_birth, gender, address]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Implement other CRUD operations similarly