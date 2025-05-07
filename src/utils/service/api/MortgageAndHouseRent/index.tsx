export const getHousesWithFilters = async (
    transactionType = "",
    propertyType = "",
    sortBy = "",
    location = "",
    search = "",
    minMortgage = "",
    maxPrice = "",
    minArea = "",
    maxArea = "",
    page = "1"
  ) => {
    try {
      const queryParams = [];
  
      // اضافه کردن پارامترهای فیلتر به query string
      if (transactionType) queryParams.push(`transactionType=${transactionType}`);
      if (propertyType) queryParams.push(`propertyType=${propertyType}`);
      if (sortBy) queryParams.push(`sortBy=${sortBy}`);
      if (location) queryParams.push(`location=${location}`);
      if (search) queryParams.push(`search=${search}`);
      if (minMortgage) queryParams.push(`minMortgage=${minMortgage}`);
      if (maxPrice) queryParams.push(`maxPrice=${maxPrice}`);
      if (minArea) queryParams.push(`minArea=${minArea}`);
      if (maxArea) queryParams.push(`maxArea=${maxArea}`);
      if (page) queryParams.push(`page=${page}`);
  
      // ساخت URL نهایی
      const url = `https://delta-project.liara.run/api/houses?${queryParams.join("&")}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching houses:", error);
      return [];
    }
  };