const url = "http://localhost:52752/clientes"

export const getUsuarios = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const error = new Error(`${response.status}`);
      error.status = response.status;
      throw error;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const getUsusarioById = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);

    if (!response.ok) {
      const error = new Error(`${response.status}`);
      error.status = response.status;
      throw error;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}