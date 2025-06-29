const productModel = require("../../models/productModel");

const getCategoryWiseProduct = async (req, res) => {
  try {
    const { category } = req.body; // ✅ Important: Extract from req.body

    if (!category) {
      return res.status(400).json({
        message: "Category is required",
        error: true,
        success: false,
      });
    }

    const categoryList = Array.isArray(category) ? category : [category];

    const product = await productModel.find({ category: { $in: categoryList } });

    res.json({
      data: product,
      message: "Product fetched successfully",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = getCategoryWiseProduct;
