export const getHouseReserveWithFilters = async (
  search = "",
  sortBy = "",
  location = "",
  minPrice = "",
  maxPrice = "",
  rating = "",
  page = "1"
) => {
  try {
    const queryParams = [];

    // همیشه transactionType را به صورت ثابت اضافه می‌کنیم
    queryParams.push("transactionType=reservation");

    // اضافه کردن پارامترهای فیلتر به query string
    if (search) queryParams.push(`search=${search}`);
    if (sortBy) queryParams.push(`sortBy=${sortBy}`);
    if (location) queryParams.push(`location=${location}`);
    if (minPrice) queryParams.push(`minPrice=${minPrice}`);
    if (maxPrice) queryParams.push(`maxPrice=${maxPrice}`);
    if (rating) queryParams.push(`rating=${rating}`);
    if (page) queryParams.push(`page=${page}`);

    // ساخت URL نهایی
    const url = `https://delta-project.liara.run/api/houses?${queryParams.join("&")}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching house reservations:", error);
    return [];
  }
};