const fs = require('fs');

const recordTemplate = {
    "title": "Toyota Parts",
    "subTitle": "Toyota Parts",
    "featured": true,
    "user": "6653dec41cc6fd0b74c85c13",
    "seller": "6653dec41cc6fd0b74c85c13",
    "originalPrice": 599.99,
    "price": 499.99,
    "qty": 75,
    "pictures": [
        {
            "url": "https://dablew.pk/file/2023/08/Buy-Immersion-LED-TV-Backlights-with-Camera-in-Pakistan-at-Dab-Lew-Tech-6.jpg",
            "id": "Shah Parts/jl04qklhnfiumvr5e4lf"
        }
    ],
    "description": "Capture stunning photos and videos with this compact digital camera.",
    "mainCategory": "6653df571cc6fd0b74c85c1a",
    "subCategory": "66552dee3da500c97798e330",
    "specifications": [
        { "key": "Resolution", "value": "20MP" },
        { "key": "Video", "value": "4K" },
        { "key": "Connectivity", "value": "WiFi" }
    ]
};

const numRecords = 50000; // One million records
const filename = 'products.json';

const writeStream = fs.createWriteStream(filename);

writeStream.write('[\n');

for (let i = 0; i < numRecords; i++) {
    const record = JSON.stringify(recordTemplate);
    writeStream.write(record);
    if (i !== numRecords - 1) {
        writeStream.write(',\n');
    }
}

writeStream.write('\n]');
writeStream.end(() => {
    console.log('File has been saved.');
});
