const url = "http://localhost:52752/clientes"

export const getUsuarios = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const error = new Error(`${response.status}`);
      error.status = response.status;
      throw error;
    }
    return await response.json();
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
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const postCliente = async (cliente) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    });
    if (!response.ok) {
      const error = new Error(`${response.status}`);
      error.status = response.status;
      throw error;
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const putCliente = async (id, cliente) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente),
    });
    if (!response.ok) {
      const error = new Error(`${response.status}`);
      error.status = response.status;
      throw error;
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const deleteCliente = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = new Error(`${response.status}`);
      error.status = response.status;
      throw error;
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}