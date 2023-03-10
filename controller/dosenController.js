import db from '../config/connection.js';

export const getAllDosen = (req, res) => {
  db.query('SELECT * FROM dosen', (err, result) => {
    res.json(result);
  });
};

export const addDosen = (req, res) => {
  const { nama } = req.body;
  const { nik } = req.body;
  const { mata_kuliah } = req.body;
  db.query(`INSERT INTO dosen (nama,nik,mata_kuliah) VALUES ('${nama}',${nik},'${mata_kuliah}')`, (err, result) => {
    res.json(result);
    console.log(result);
  });
};

export const getDosenById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM dosen WHERE id=${id}`, (err, result) => {
    res.json(result);
  });
};
export const getDosenByName = (req, res) => {
  const nama = req.params.nama;

  db.query(`SELECT * FROM dosen WHERE nama LIKE '%${nama}%'`, (err, result) => {
    res.json(result);
  });
};

export const editDosen = (req, res) => {
  const id = req.params.id;
  const { nama } = req.body;
  const { mata_kuliah } = req.body;
  const { nik } = req.body;

  db.query(`UPDATE dosen SET nama='${nama}', mata_kuliah='${mata_kuliah}',nik=${nik} WHERE id=${id}`, (err, result) => {
    res.json(result);
  });
};

export const deleteDosen = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  db.query(`DELETE FROM dosen WHERE id=${id}`, (err, result) => {
    res.json({
      message: 'success delete data',
      id: id,
    });
  });
};
