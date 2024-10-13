const db = require('../config/db');

exports.getAllAppointments = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Appointments');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAppointment = async (req, res) => {
  const { patient_id, doctor_id, appointment_date, reason } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Appointments (patient_id, doctor_id, appointment_date, reason) VALUES (?, ?, ?, ?)',
      [patient_id, doctor_id, appointment_date, reason]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Implement other CRUD operations similarly