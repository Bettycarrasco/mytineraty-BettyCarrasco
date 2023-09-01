const API = "http://localhost:7000/cities";

const fetchData = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      return data
    } catch (error) {
      console.error("Hubo un error:", error);
    }
  };

  export default fetchData;