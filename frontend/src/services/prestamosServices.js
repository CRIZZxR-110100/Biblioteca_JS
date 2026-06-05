const url = "http://localhost:52752/prestamos"

export const getPrestamos = async () => {
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

export const getPrestamoById = async (id) => {
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

export const postPrestamo = async (prestamo) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prestamo),
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

export const putPrestamo = async (id, prestamo) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prestamo),
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

export const deletePrestamo = async (id) => {
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