console.log('Script para convertir imágenes');

const sharp = require('sharp');
const fs = require('fs');
const directory1 = 'src/assets/img/books';

fs.readdirSync(directory1).forEach(file => {
    sharp(`${directory1}/${file}`)
      .resize(200, 300) // width, height
      .toFile(`${directory1}/small/${file.slice(0,-4)}-small.jpg`);
});

fs.readdirSync(directory1).forEach(file => {
sharp(`${directory1}/${file}`)
    .resize(150, 250) // width, height
    .toFile(`${directory1}/smallest/${file.slice(0,-4)}-smallest.jpg`);
});