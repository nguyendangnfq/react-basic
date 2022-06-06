import axios from "axios";

export const animalApi = {
  getAnimal: async () => {
    try {
      const response = await fetch(
        "https://629836b0f2decf5bb73d67d4.mockapi.io/animals"
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  getAnimalById: async (params) => {
    try {
      const response = await fetch(
        `https://629836b0f2decf5bb73d67d4.mockapi.io/animals/${params.id}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  postAnimal: async (params) => {
    try {
      const response = await fetch(
        "https://629836b0f2decf5bb73d67d4.mockapi.io/animals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      const result = await response.json();
      const data = await result;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  putAnimal: async (params) => {
    try {
      const response = await fetch(
        `https://629836b0f2decf5bb73d67d4.mockapi.io/animals/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      const result = await response.json();
      const data = await result;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteAnimal: async (params) => {
    try {
      const response = await fetch(
        `https://629836b0f2decf5bb73d67d4.mockapi.io/animals/${params}`,
        {
          method: "DELETE",
        }
      );
      console.log(params);
      const result = await response.json();
      const data = await result;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
