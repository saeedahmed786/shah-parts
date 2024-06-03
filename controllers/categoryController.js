const Category = require('../models/categoryModel');

exports.getAllCategories = async (req, res) => {
    try {
        Category.find({})
            .exec((error, categories) => {
                if (error) {
                    res.status(404).json({ errorMessage: 'Error in finding categories' });
                }
                if (categories) {
                    const sanitizedcategoris = categories?.map(category => ({ title: category?.title, children: category?.children }))
                    res.status(200).send(sanitizedcategoris);
                }
            });

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

exports.addCategories = async (req, res) => {
    try {
        const deleteAll = await Category.deleteMany({});
        if (deleteAll) {
            const newCategory = await Category.insertMany(req.body.categories);
            if (newCategory) {
                res.status(200).json({ successMessage: `Categories added successfully` });
            } else {
                res.status(400).json('Category is not created. Please Try Again')
            }
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

exports.getCategoryById = async (req, res) => {
    try {
        const getCategory = await Category.findById({ _id: req.params.id });
        if (getCategory) {
            res.status(200).json({ getCategory });
        }
        else {
            res.status(400).json({ errorMessage: 'Category not found. Please try again' });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const getCategory = await Category.findById({ _id: req.params.id });
        if (getCategory) {
            getCategory.name = req.body.name;
            getCategory.picture = req.body.picture;
            if (req.body.parentId) {
                getCategory.parentId = req.body.parentId;
            }
            const newCategory = getCategory.save();
            if (newCategory) {
                res.status(200).json({ successMessage: `Category updated successfully` });
            } else {
                res.status(400).json({ errorMessage: 'Category not updated. Please try again' })
            }
        }
        else {
            res.status(400).json({ errorMessage: 'Category not found. Please try again' });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const getCategory = await Category.findById({ _id: req.params.id })
        if (getCategory) {
            res.status(200).json({ successMessage: `Category ${getCategory.name} has been deleted successfully` });
        } else {
            res.status(400).json({ errorMessage: 'Category could not be deleted. Please try again' });
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
