import paths from "../services/paths.js";

export const payment = async (userId, amount) => {
  const respose = await fetch(paths.CREDITS_MANAGEMENT.PAYMENT.replace(":id", userId), {
    method: 'PATCH',
    body: JSON.stringify({ amount: amount }),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  console.log('resposnse pay: ', respose);
  return respose.status
}
