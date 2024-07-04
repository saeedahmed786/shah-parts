const Product = require('../models/productModel');

const createIndexes = async () => {
  try {
    await Product.collection.dropIndexes();

    await Product.collection.createIndex({ title: 1 });
    await Product.collection.createIndex({ make: 1 });
    await Product.collection.createIndex({ model: 1 });
    await Product.collection.createIndex({ part: 1 });
    await Product.collection.createIndex({ partaccessorries: 1 });
    await Product.collection.createIndex({ featured: 1 });

    console.log('Indexes created successfully.');
  } catch (error) {
    console.error('Error creating indexes:', error);
  }
};

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


    if (req.body.make) {
      query.make = req.body.make;
    }

    if (req.body.model) {
      query.model = req.body.model;
    }

    if (req.body.part) {
      query.part = req.body.part;
    }

    if (req.body.partAccessory) {
      query.partaccessories = req.body.partAccessory;
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
  const products = await Product.find({ featured: "yes" }).limit(20).sort({ "createdAt": '-1' })
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

exports.getAllProductsParts = async (req, res) => {
  try {
    const categories = await Product.aggregate([
      {
        $group: {
          _id: '$part'
        }
      },
      {
        $project: {
          _id: 0,
          part: '$_id'
        }
      }
    ]);

    res.json(categories.map(c => c.part));
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

exports.getAllProductsMakes = async (req, res) => {
  try {
    const makes = await Product.aggregate([
      {
        $group: {
          _id: '$make'
        }
      },
      {
        $project: {
          _id: 0,
          make: '$_id'
        }
      }
    ]);

    res.json(makes.map(c => c.make));
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

exports.getAllProductsModelsByMake = async (req, res) => {
  const { make } = req.body;

  if (!make) {
    return res.status(400).json({ error: 'Make is required' });
  }

  try {
    const models = await Product.aggregate([
      {
        $match: {
          make: make
        }
      },
      {
        $group: {
          _id: '$model'
        }
      },
      {
        $project: {
          _id: 0,
          model: '$_id'
        }
      }
    ]);

    res.json(models.map(m => m.model));
  } catch (err) {
    res.status(500).send(err.message);
  }
}

exports.getAllProductsPartsByModel = async (req, res) => {
  const { model } = req.body;

  if (!model) {
    return res.status(400).json({ error: 'Model is required' });
  }

  try {
    const parts = await Product.aggregate([
      {
        $match: {
          model: model
        }
      },
      {
        $group: {
          _id: '$part'
        }
      },
      {
        $project: {
          _id: 0,
          part: '$_id'
        }
      }
    ]);

    res.json(parts.map(m => m.part));
  } catch (err) {
    res.status(500).send(err.message);
  }
}

exports.getAllProductsPartaccessoriesByPart = async (req, res) => {
  const { part } = req.body;

  if (!part) {
    return res.status(400).json({ error: 'Part is required' });
  }

  try {
    const partaccessories = await Product.aggregate([
      {
        $match: {
          part: part
        }
      },
      {
        $group: {
          _id: '$partaccessorries'
        }
      },
      {
        $project: {
          _id: 0,
          partaccessorries: '$_id'
        }
      }
    ]);

    res.json(partaccessories.map(m => m.partaccessorries));
  } catch (err) {
    res.status(500).send(err.message);
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
      featured: req.body.featured,
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
      findProduct.featured = req.body.featured;
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
      const products = await Product.find({ $or: [{ partaccessories: req.params.id }, { part: req.params.id }] }).limit(8).exec();
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


