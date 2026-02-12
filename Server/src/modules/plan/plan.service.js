function generatePlan(profile) {
  if (profile.goal === 'weight_loss') {
    return {
      workouts: ["Cardio 20p", "HIIT 15p", "Walk 30p"],
      meals: ["Low carb", "High protein"]
    };
  }
  return {
    workouts: ["Push Pull Legs"],
    meals: ["Balanced diet"]
  };
}
