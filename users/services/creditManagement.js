import envVars from "../envVars.js";

export const createUserCredit = async (userId) => {
  const respose = await fetch(envVars.CREDIT_MANAGEMENT_URL, {
    method: 'POST',
    body: JSON.stringify({ id: userId }),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return respose.status
}
