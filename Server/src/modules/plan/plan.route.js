router.post('/generate', async (req, res) => {
  const profile = await getProfile(req.user.id);
  const plan = generatePlan(profile);

  await db.query(
    `INSERT INTO personalized_plans (id, user_id, plan_data, status)
     VALUES ($1,$2,$3,'Draft')`,
    [uuid(), req.user.id, plan]
  );

  res.json(plan);
});
