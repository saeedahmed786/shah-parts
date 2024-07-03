const fs = require('fs');
const path = require('path');

// Function to remove the dollar sign and convert to number
const removeDollarSignAndConvertToNumber = (products) => {
    return products.map(product => {
        // if (product.Price) {
        //     // Remove any non-digit characters (like $ or spaces) and convert to number
        //     product.Price = parseFloat(product.Price.replace(/[^0-9.]/g, ''));
        // }

        if (product['Reg.Year'] && product['Reg.Year'].month) {
            product['Reg Year/Month'] = product['Reg.Year'].month;
            delete product['Reg.Year'];
        }

        return product;
    });
};

// Function to read JSON file, process it, and write back the processed data
const processJsonFile = (inputFilePath, outputFilePath) => {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        let products;
        try {
            products = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return;
        }

        const updatedProducts = removeDollarSignAndConvertToNumber(products);

        fs.writeFile(outputFilePath, JSON.stringify(updatedProducts, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing the file:', writeErr);
            } else {
                console.log('File has been processed and saved successfully.');
            }
        });
    });
};

// Define the input and output file paths
const inputFilePath = path.join(__dirname, 'updatedProducts.json');
const outputFilePath = path.join(__dirname, 'updatedProducts.json');

// Process the JSON file
processJsonFile(inputFilePath, outputFilePath);
