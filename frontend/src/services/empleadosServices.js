const url = "http://localhost:52752/empleados"

export const getEmpleados = async () => {
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

export const getEmpleadoById = async (id) => {
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

export const postEmpleado = async (empleado) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(empleado),
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

export const putEmpleado = async (id, empleado) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(empleado),
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

export const deleteEmpleado = async (id) => {
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