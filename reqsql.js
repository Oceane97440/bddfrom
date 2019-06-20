const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM infos', (err, infos) => {
     if (err) {
      res.json(err);
     }
     res.render('infos', {
        data: infos
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO infos set ?', data, (err, infos) => {
      console.log(infos)
      res.redirect('/');
    })
  })
};
module.exports = controller;
