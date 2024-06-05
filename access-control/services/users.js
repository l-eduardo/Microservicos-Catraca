import paths from "../services/paths.js";

export const getCategory = async (userId) => {
  const respose = await fetch(paths.USERS.GET_CATEGORY.replace(":id", userId), {
    method: 'GET'
  });
  console.log('resposnse cat: ', respose);
  return await respose.json()
}
