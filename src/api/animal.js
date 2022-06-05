import axios from "axios";

export const animalApi = {
  getAniamal: async () => {
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

  getAniamalById: async (params) => {
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

  postAniamal: async (params) => {
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

  putAniamal: async (params) => {
    try {
      const response = await fetch(
        "https://629836b0f2decf5bb73d67d4.mockapi.io/animals",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  },

  deleteAniamal: async (params) => {
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
