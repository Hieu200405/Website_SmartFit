router.get('/', async (req, res) => {
  const logs = await getRecentLogs(req.user.id);

  if (logs.length < 2) {
    return res.json({ msg: "Bạn nên tập đều hơn" });
  }

  res.json({ msg: "Bạn đang làm rất tốt, tăng độ khó lên!" });
});
