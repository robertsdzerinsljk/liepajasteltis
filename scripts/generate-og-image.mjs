import sharp from 'sharp';

const backgroundImage = 'public/images/products/telts-10x30.jpg';
const logoImage = 'public/images/liepajasteltis-logo.svg';
const outputImage = 'public/og-image.png';

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="shade" x1="0" x2="1" y1="0" y2="0">
			<stop offset="0" stop-color="#f7f2e9" stop-opacity="0.96"/>
			<stop offset="0.48" stop-color="#f7f2e9" stop-opacity="0.84"/>
			<stop offset="1" stop-color="#f7f2e9" stop-opacity="0.10"/>
		</linearGradient>
	</defs>
	<rect width="1200" height="630" fill="url(#shade)"/>
	<text x="82" y="255" font-family="Georgia, Times New Roman, serif" font-size="72" fill="#463b35">Telšu noma</text>
	<text x="82" y="335" font-family="Georgia, Times New Roman, serif" font-size="72" fill="#463b35">Liepājā</text>
	<text x="84" y="400" font-family="Arial, sans-serif" font-size="29" font-weight="700" fill="#6b7a4a">un visā Latvijā</text>
	<text x="84" y="462" font-family="Arial, sans-serif" font-size="25" font-weight="600" fill="#6f635b">Teltis, grīdas segumi un pasākumu inventārs</text>
	<text x="84" y="502" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#6b7a4a">liepajasteltis.lv</text>
</svg>`;

const logo = await sharp(logoImage, { density: 300 })
	.resize({ width: 245, height: 120, fit: 'inside' })
	.png()
	.toBuffer();

const info = await sharp(backgroundImage)
	.resize(1200, 630, { fit: 'cover', position: 'center' })
	.modulate({ brightness: 1.04, saturation: 0.9 })
	.composite([
		{ input: Buffer.from(overlay), top: 0, left: 0 },
		{ input: logo, top: 58, left: 78 },
	])
	.png({ quality: 92, compressionLevel: 9 })
	.toFile(outputImage);

console.log(`${outputImage} ${info.width}x${info.height} ${info.size} bytes`);
