
function createLoginTracker(UInfo) {
  UInfo={ Username: UInfo.username, Password: UInfo.password }
  let attemptCount = 0;
  const loginAttempt = (passAttempts) => {
    while (attemptCount < 3) {
      attemptCount++;
      if (passAttempts === UInfo.Password) {
        return `Login successful`;
      } else {
        return `Attempt ${attemptCount}: Login failed`;
      }
    }
      return `Account locked due to too many failed login attempts`;
  }
  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};