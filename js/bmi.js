//Write function bmi that calculates body mass index (bmi = weight / height2).if bmi <= 18.5 return "Underweight"if bmi <= 25.0 return "Normal"if bmi <= 30.0 return "Overweight"ifbmi> 30 return "Obese"
function bmi(weight, height) {
  return weight/Math.pow(height,2) <= 18.5? "Underweight" : weight/Math.pow(height,2) <= 25.0? "Normal" : weight/Math.pow(height,2) <= 30.0? "Overweight" : 'Obese'
}