import paths from "../services/paths.js";

export const parking = {
  in: async (parkId) => {
    const respose = await fetch(paths.PARKING_AVAILABILITY.IN.replace(":id", parkId), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log('Parking in: ', await respose.json());
    return respose.status
  },
  out: async (parkId) => {
    const respose = await fetch(paths.PARKING_AVAILABILITY.OUT.replace(":id", parkId), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log('Parking out: ', await respose.json());
    return respose.status
  }
}
