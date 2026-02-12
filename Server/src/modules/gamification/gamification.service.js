async function updateGamification(userId) {
  await db.query(`
    UPDATE user_gamification
    SET xp = xp + 10,
        streak = streak + 1
    WHERE user_id = $1
  `, [userId]);
}
