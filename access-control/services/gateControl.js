import paths from "./paths.js";

export const gateControl = {
  in: async (parkId) => {
    console.log(paths.GATE_CONTROL.IN)
    const respose = await fetch(paths.GATE_CONTROL.IN.replace(":id", parkId), {
      method: 'POST',
    });
    console.log(respose)
    return respose.status
  },
  out: async (parkId) => {
    const respose = await fetch(paths.GATE_CONTROL.OUT.replace(":id", parkId), {
      method: 'POST',
    });
    console.log(respose)

    return respose.status
  }
}
