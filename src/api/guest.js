import { API } from ".../constants";

export async function getGuest() {
  try {
    const respnose = await fetch(API + "/guests");
    const result = await respnose.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getGuest(id) {
  try {
    const respnose = await fetch(API + "/guests/" + id);
    const result = await respnose.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
