import sharp from "sharp";
import { statSync } from "node:fs";

const input = process.argv[2] ?? "src/assests/heroimg.png";
const output = process.argv[3] ?? "src/assests/heroimg-transparent.png";

const nearWhite = 245; // channel threshold
const maxDelta = 18; // how close R/G/B must be (to catch neutral whites/greys)

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += info.channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  const delta = Math.max(r, g, b) - Math.min(r, g, b);
  const isNearWhite = r >= nearWhite && g >= nearWhite && b >= nearWhite && delta <= maxDelta;

  if (isNearWhite) {
    data[i + 3] = 0;
  }
}

await sharp(data, { raw: info }).png({ compressionLevel: 9 }).toFile(output);

console.log(
  `Wrote ${output} (${statSync(output).size} bytes) from ${input} (${statSync(input).size} bytes)`
);

