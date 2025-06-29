import SummaryApi from "../common";

const fetchCategoryWiseProduct = async (category) => {
  try {
    const response = await fetch(SummaryApi.categoryWiseProduct.url, {
      method: SummaryApi.categoryWiseProduct.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });

    const data = await response.json();

    if (!data.success) {
      console.error("Fetch failed:", data.message);
      return { data: [] }; // fallback
    }

    return data;
  } catch (error) {
    console.error("Error fetching category-wise products:", error);
    return { data: [] }; // fallback
  }
};

export default fetchCategoryWiseProduct;
