const url = "http://localhost:52752/clientes"

export const getUsuarios = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
}

export const getUsusarioById = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);

    if (!response.ok) {
      if(response.status === 404){
        return response.status
      } else {
        throw new Error(`Error en la petición: ${response.status}`);
      }
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
}