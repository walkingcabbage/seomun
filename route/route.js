const express = require('express');
const router = express.Router();
const db = require('./../db.js');
//메인 페이지 접속
router.get('/', function (req, res) {
  res.render('index', {
    'isHeader': true,
    'miniFooter': false
  });
})
//로그인 페이지 접속
router.get('/login', function (req, res) {
  res.render('login', {
    'isHeader': false,
    'miniFooter': true
  });
})
//회원가입 페이지 접속
router.get('/join', function (req, res) {
  res.render('join', {
    'isHeader': false,
    'miniFooter': true
  });
})
//공지사항 리스트
router.get('/noticeList', (req, res) => {
  db.getNotice((rows) => {
    res.render('noticeList', {
      'isHeader': true,
      'miniFooter': false,
      'rows': rows
    });
  });
})
//공지사항 작성 페이지 접속
router.get('/writeNoticePage', (req, res) => {
  res.render('noticeWrite', {
    'isHeader': true,
    'miniFooter': false
  });
})
//공지사항 작성 프로세스
router.post('/writeNotice', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  console.log(param);
  const title = param.title;
  const content = param.content;

  db.insertNotice(title, content, () => {
    res.redirect('noticeList');
  })
})
//공지사항 읽기 페이지
router.get('/readNotice', (req, res) => {
  let id = req.query.id;
  db.incrNoticeView(id, () => {
    db.getNoticeByid(id, (rows) => {
      res.render('noticeRead', {
        'isHeader': true,
        'miniFooter': false,
        'row': rows[0],
      });
    })
  })
})

//공지사항 수정 페이지
router.get('/updateNotice', (req, res) => {
  const id = req.query.id;
  db.getNoticeByid(id, (rows) => {
    res.render('noticeUpdate', {
      'isHeader': true,
      'miniFooter': false,
      'row': rows[0],
    });
  })
})

//공지사항 수정 프로세스
router.post('/updates', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  const id = param.id;
  const title = param.title;
  const content = param.content;
  db.updateNotice(id, title, content, () => {
    db.getNotice((rows) => {
      res.render('noticeList', {
        'isHeader': true,
        'miniFooter': false,
        'rows': rows,
      })
    })
  })
})
router.get('/deletenotice', (req, res) => {
  let id = req.query.id;
  db.deleteNoticeByid(id, () => {
    db.getNotice((rows) => {
      res.render('noticeList', {
        'isHeader': true,
        'miniFooter': false,
        'rows': rows,
      })
    })
  })
})
module.exports = router;