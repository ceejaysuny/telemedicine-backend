const db = require('../config/db');

exports.getAllAdmins = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Admins');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAdmin = async (req, res) => {
  const { first_name, last_name, email, password_hash, phone } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Admins (first_name, last_name, email, password_hash, phone) VALUES (?, ?, ?, ?, ?)',
      [first_name, last_name, email, password_hash, phone]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Implement other CRUD operations similarly