const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string"||isNaN(parseFloat(sampleActivity)))
    return false;
  else
    if (parseFloat(sampleActivity)<=0||parseFloat(sampleActivity)>15) 
      return false
    else  
      return (Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))*HALF_LIFE_PERIOD)/k));  
};
