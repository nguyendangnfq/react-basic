export const fetchUtils = async (url, option) => {
  try {
    const response = await fetch(url, option);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
