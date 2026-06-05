const url = "http://localhost:52752/autores"

export const getAutores = async () => {
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

export const getAutorById = async (id) => {
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

export const postAutor = async (autor) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(autor),
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

export const putAutor = async (id, autor) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(autor),
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

export const deleteAutor = async (id) => {
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
