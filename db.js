var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'database-1.cklxqpbgxx7m.ap-northeast-2.rds.amazonaws.com',
  user: 'root',
  password: 'fc357159',
  database: 'seomun',
  dateStrings: 'date',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected!');
})

function getNotice(callback) {
  connection.query('SELECT * FROM notice ORDER BY id desc;', (err, rows, fields) => {
    // if(err) throw err;
    callback(rows);
  });
};
function insertNotice(title, content, callback) {
  connection.query(`INSERT INTO notice(title,views,create_time,content) VALUES ('${title}',0,NOW(),'${content}')`, (err) => {
    if (err) throw err;
    callback();
  })
}
function incrNoticeView(id, callback) {
  connection.query(`UPDATE notice SET views = views + 1 WHERE id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    })
}

function getNoticeByid(id, callback) {
  connection.query(`select * from notice where id=${id}`,
    (err, row) => {
      if (err) throw err;
      callback(row);
    }
  )
}

function updateNotice(id, title, content,  callback) {
  connection.query(`UPDATE notice SET title='${title}',content='${content}',
  create_time=NOW() WHERE id=${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  })
}
function deleteNoticeByid(id, callback) {
  connection.query(`delete from notice where id=${id}`, (err => {
    if (err) throw err;
    callback();
  }))
}

module.exports = {
  getNotice,
  insertNotice,
  incrNoticeView,
  getNoticeByid,
  updateNotice,
  deleteNoticeByid

};