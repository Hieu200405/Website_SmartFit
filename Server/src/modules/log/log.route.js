router.post('/', async (req, res) => {
  await db.query(
    `INSERT INTO activity_logs (id, user_id, type, data)
     VALUES ($1,$2,$3,$4)`,
    [uuid(), req.user.id, req.body.type, req.body.data]
  );

  updateGamification(req.user.id);
  res.sendStatus(200);
});
