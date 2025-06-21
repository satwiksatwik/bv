
document.getElementById('strokeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const age = parseInt(this.age.value);
  const bmi = parseFloat(this.bmi.value);
  const hypertension = this.hypertension.value === 'Yes';
  const heartDisease = this.heart_disease.value === 'Yes';

  const isStroke = (age > 60 && (hypertension || heartDisease || bmi > 30));
  document.getElementById('predictionText').textContent = isStroke ? 'Stroke Detected ❌' : 'No Stroke ✅';
  document.getElementById('resultBox').classList.remove('hidden');
});
