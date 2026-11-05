import sharp from 'sharp';
const reference = await sharp('design-reference-dark.png').resize({width:1024}).png().toBuffer();
const implementation = await sharp('revision-desktop.png').resize({width:1024}).png().toBuffer();
const a = await sharp(reference).metadata();
const b = await sharp(implementation).metadata();
await sharp({create:{width:2048,height:Math.max(a.height,b.height),channels:3,background:'#001317'}}).composite([{input:reference,left:0,top:0},{input:implementation,left:1024,top:0}]).png().toFile('design-comparison.png');
console.log(JSON.stringify({reference:[a.width,a.height],implementation:[b.width,b.height]}));
