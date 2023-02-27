import db from '../config/connection.js';

export const getAllMahasiswa = (req, res) => {
  db.query('SELECT * FROM mahasiswa', (err, result) => {
    res.json(result);
  });
};

export const addMahasiswa = (req, res) => {
  const { nama } = req.body;
  const { nim } = req.body;
  const { jurusan } = req.body;
  db.query(`INSERT INTO mahasiswa (nama,nim,jurusan) VALUES ('${nama}',${nim},'${jurusan}')`, (err, result) => {
    res.json(result);
    console.log(req.body);
  });
};

export const getMahasiswaById = (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM mahasiswa WHERE id=${id}`, (err, result) => {
    res.json(result);
  });
};
export const getMahasiswaByName = (req, res) => {
  const { nama } = req.params;
  db.query(`SELECT * FROM mahasiswa WHERE nama LIKE '%${nama}%'`, (err, result) => {
    res.json(result);
  });
};

export const editMahasiswa = (req, res) => {
  const { id } = req.params;
  const { nama } = req.body;
  const { jurusan } = req.body;
  const { nim } = req.body;

  db.query(`UPDATE mahasiswa SET nama='${nama}', jurusan='${jurusan}', nim=${nim} WHERE id=${id}`, (err, result) => {
    res.json(result);
  });
};

export const deleteMahasiswa = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  db.query(`DELETE FROM mahasiswa WHERE id=${id}`, (err, result) => {
    res.json({
      message: 'success delete data',
      id: id,
    });
  });
};
