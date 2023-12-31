var express = require('express');
var router = express.Router();


router.get('/', async (req, res) => {
  try {
    const users = await global.Users.findAll()
    // attributes: ['user_id','id', 'username', 'password', 'gender', 'phoneNumber', 'birthdate', 'agreeTerms', 'agreePrivacyPolicy']
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
});
router.get("/info", async (req, res) => {
  console.log(req.session)
  if (req.session.user) {
    return res.json(req.session.user)
  }
  return res.json(null)

})

router.post('/login', async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await global.Users.findOne({ where: { id, password } });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    if (user.password !== password) {

      return res.status(400).json({ error: 'Invalid password' });
    }
    console.log(req.session, user)
    req.session.user = user
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    // 이미 존재하는 사용자인지 확인
    const existingUser = await global.Users.findOne({ where: { id: req.body.id } });
    if (existingUser) {
      return res.status(400).json({ error: 'Id already exists' });
    }

    // 새 사용자 생성
    const newUser = await global.Users.create({
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      gender: req.body.gender,
      phoneNumber: req.body.phoneNumber,
      birthdate: req.body.birthdate,
      agreeTerms: req.body.agreeTerms,
      agreePrivacyPolicy: req.body.agreePrivacyPolicy,
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;