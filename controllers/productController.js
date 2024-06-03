const Product = require('../models/productModel');
const cloudinaryCon = require('../middlewares/cloudinary');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(20)
      .exec();
    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).json({ errorMessage: 'No Products found!' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

exports.getLimitedProducts = async (req, res) => {
  try {
    let minPrice;
    let maxPrice;
    if (req.body.priceRange) {
      minPrice = req.body.priceRange?.split("-")[0];
      maxPrice = req.body.priceRange?.split("-")[1];
    } else {
      minPrice = 0
      maxPrice = 30000
    }

    let query = {};

    if (req.body.category) {
      query.subCategory = req.body.category;
    }

    if (minPrice && maxPrice) {
      query.price = { $gte: minPrice, $lte: maxPrice }; // Filter by price range
    }

    const PAGE_SIZE = 20;
    const page = parseInt(req.body.page || "0")
    const products = await Product.find(query).limit(PAGE_SIZE).skip(PAGE_SIZE * page)
      .sort({ createdAt: -1 }).exec();
    const count = await Product.countDocuments(query);
    if (products) {
      res.status(200).send({ products, count });
    } else {
      res.status(404).json({ errorMessage: 'No Products found!' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

exports.getFeaturedProducts = async (req, res) => {
  const products = await Product.find({ featured: true }).limit(20).sort({ "createdAt": '-1' })
    .exec();
  try {
    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).json({ errorMessage: 'No Products found!' });
    }
  } catch (error) {
    res.status(404).json({ errorMessage: 'Error in finding products', error });
  }

}

exports.getAllAdminProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .exec();
    if (products) {
      res.status(200).send(products);
    } else {
      res.status(404).json({ errorMessage: 'No Products found!' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

exports.getProductById = async (req, res) => {
  try {
    const findProduct = await Product.findOne({ _id: req.params.id }).exec();
    if (findProduct) {
      res.status(200).send(findProduct);
    } else {
      res.status(404).json({ errorMessage: 'No Products found!' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

exports.searchProducts = async (req, res) => {
  try {
    const findProducts = await Product.find({ $or: [{ title: { $regex: new RegExp(req.body.title, 'i') } }, { subTitle: { $regex: new RegExp(req.body.title, 'i') } }] })

      .exec();
    if (findProducts) {
      res.status(200).json(findProducts);
    } else {
      res.status(404).json({ errorMessage: 'No products found' });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: 'Error in finding products', error });
  }
};


exports.filterProducts = async (req, res) => {
  try {
    let minPrice;
    let maxPrice;
    if (req.body.priceRange) {
      minPrice = req.body.priceRange?.split("-")[0];
      maxPrice = req.body.priceRange?.split("-")[1];
    } else {
      minPrice = 0
      maxPrice = 30000
    }

    let query = {};

    if (req.body.category) {
      query.subCategory = req.body.category;
    }

    if (minPrice && maxPrice) {
      query.price = { $gte: minPrice, $lte: maxPrice }; // Filter by price range
    }

    const PAGE_SIZE = 20;
    const page = parseInt(req.params.page || "0")

    const findProducts = await Product.find(query)
      .limit(PAGE_SIZE).skip(PAGE_SIZE * page)
      .exec();
    if (findProducts) {
      res.status(200).json(findProducts);
    } else {
      res.json({ errorMessage: 'No products found' })
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}


exports.uploadBulkProducts = async (req, res) => {
  const { products } = req.body;
  try {
    const result = await Product.insertMany(products);
    if (result) {
      res.status(200).send({ successMessage: 'Products uploaded successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ errorMessage: 'Failed to create products. Please try again', error });
  }
}

exports.uploadProduct = async (req, res) => {
  try {
    const product = new Product({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      pictures: req.body.pictures,
      make: req.body.make,
      model: req.body.model,
      part: req.body.part,
      partaccessorries: req.body.partaccessorries,
      location: req.body.location,
      condition: req.body.condition,
      modelCode: req.body.modelCode,
      regyearmonth: req.body.regyearmonth,
      mileage: req.body.mileage,
      missiontype: req.body.missiontype,
      enginemodel: req.body.enginemodel,
      enginesize: req.body.enginesize,
      fuel: req.body.fuel,
      drive: req.body.drive,
      autopartsmaker: req.body.autopartsmaker,
      genuinepartsno: req.body.genuinepartsno,
      chassisno: req.body.chassisno,
      refno: req.body.refno,
      geartype: req.body.geartype
    });

    await product.save((error, result) => {
      if (error) {
        res.status(400).json({ errorMessage: 'Failed to create product. Please try again', error });
      } else {
        res.status(200).send({ successMessage: 'Product created successfully', result });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};



exports.updateProduct = async (req, res) => {
  try {
    const findProduct = await Product.findById({ _id: req.params.id });
    if (findProduct) {
      findProduct.title = req.body.title;
      findProduct.price = req.body.price;
      findProduct.description = req.body.description;
      findProduct.pictures = req.body.pictures;
      findProduct.make = req.body.make;
      findProduct.model = req.body.model;
      findProduct.part = req.body.part;
      findProduct.partaccessorries = req.body.partaccessorries;
      findProduct.location = req.body.location;
      findProduct.condition = req.body.condition;
      findProduct.modelCode = req.body.modelCode;
      findProduct.regyearmonth = req.body.regyearmonth;
      findProduct.mileage = req.body.mileage;
      findProduct.missiontype = req.body.missiontype;
      findProduct.enginemodel = req.body.enginemodel;
      findProduct.enginesize = req.body.enginesize;
      findProduct.fuel = req.body.fuel;
      findProduct.drive = req.body.drive;
      findProduct.autopartsmaker = req.body.autopartsmaker;
      findProduct.genuinepartsno = req.body.genuinepartsno;
      findProduct.chassisno = req.body.chassisno;
      findProduct.refno = req.body.refno;
      findProduct.geartype = req.body.geartype;

      await findProduct.save((error, result) => {
        if (error) {
          res.status(400).json({ errorMessage: 'Failed to update product. Please try again', error });
        } else {
          res.status(200).send({ successMessage: 'Product updated successfully', result });
        }
      });
    } else {
      res.status(404).json({ errorMessage: 'Product not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};



exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById({ _id: req.params.id });
    if (product) {
      product.remove();
      res.status(200).json({ successMessage: 'Product Deleted Successfully' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

exports.getRelatedProducts = async (req, res) => {
  try {
    if (req.params.id) {
      const products = await Product.find({ $or: [{ mainCategory: req.params.id }, { subCategory: req.params.id }] }).exec();
      if (products) {
        res.status(200).send(products);
      } else {
        res.status(201).json({ errorMessage: 'No Related Products' });
      }
    }
  } catch (error) {
    console.log(error);
  }
}


