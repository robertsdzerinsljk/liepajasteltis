import { fetchSupabaseRows } from './supabaseRest';

export type ProductItem = {
	additionalInfo?: string;
	badge?: string;
	capacity: string;
	category: string;
	description?: string;
	galleryImages: string[];
	href?: string;
	id: string;
	image: string;
	installTime: string;
	priceCents: number;
	priceUnit?: string;
	size: string;
	title: string;
	variant?: string;
};

type ProductRow = Record<string, unknown>;

const getString = (row: ProductRow, keys: string[], fallback = '') => {
	for (const key of keys) {
		const value = row[key];

		if (typeof value === 'string' && value.trim()) {
			return value;
		}

		if (typeof value === 'number' && Number.isFinite(value)) {
			return String(value);
		}
	}

	return fallback;
};

const getPriceCents = (row: ProductRow) => {
	const cents = row.price_cents ?? row.priceCents;

	if (typeof cents === 'number' && Number.isFinite(cents)) {
		return Math.round(cents);
	}

	const euros = row.price ?? row.price_eur ?? row.priceEuro;

	if (typeof euros === 'number' && Number.isFinite(euros)) {
		return Math.round(euros * 100);
	}

	if (typeof euros === 'string') {
		const parsed = Number(euros.replace(',', '.').replace(/[^\d.]/g, ''));
		return Number.isFinite(parsed) ? Math.round(parsed * 100) : 0;
	}

	return 0;
};

const getStringArray = (row: ProductRow, keys: string[]) => {
	for (const key of keys) {
		const value = row[key];

		if (Array.isArray(value)) {
			return value.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
		}

		if (typeof value === 'string' && value.trim()) {
			try {
				const parsed = JSON.parse(value);

				if (Array.isArray(parsed)) {
					return parsed.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
				}
			} catch {
				return value
					.split(',')
					.map((item) => item.trim())
					.filter(Boolean);
			}
		}
	}

	return [];
};

const sortRows = (rows: ProductRow[]) =>
	[...rows].sort((first, second) => {
		const firstOrder = Number(first.sort_order ?? first.order ?? 0);
		const secondOrder = Number(second.sort_order ?? second.order ?? 0);

		return firstOrder - secondOrder;
	});

const mapProductRow = (row: ProductRow): ProductItem | null => {
	const id = getString(row, ['id', 'slug', 'sku']);
	const title = getString(row, ['title', 'name']);
	const image = getString(row, ['image', 'image_url', 'imageUrl', 'thumbnail_url', 'thumbnailUrl']);

	if (!id || !title || !image) {
		return null;
	}

	return {
		additionalInfo: getString(row, ['additional_info', 'additionalInfo', 'extra_info', 'extraInfo']) || undefined,
		badge: getString(row, ['badge', 'label']) || undefined,
		capacity: getString(row, ['capacity', 'persons', 'guest_capacity'], 'Pēc pieprasījuma'),
		category: getString(row, ['category', 'type', 'product_type'], 'Teltis'),
		description: getString(row, ['description', 'long_description', 'details']) || undefined,
		galleryImages: Array.from(new Set([image, ...getStringArray(row, ['gallery_images', 'galleryImages', 'images', 'image_gallery'])])),
		href: getString(row, ['href', 'url'], '#kontakti'),
		id,
		image,
		installTime: getString(row, ['install_time', 'installTime', 'setup_time'], 'Uzstādīšanas laiks: pēc vienošanās'),
		priceCents: getPriceCents(row),
		priceUnit: getString(row, ['price_unit', 'priceUnit', 'price_suffix', 'priceSuffix', 'unit']) || undefined,
		size: getString(row, ['size', 'dimensions', 'area'], 'Pēc pieprasījuma'),
		title,
		variant: getString(row, ['variant', 'default_variant']) || undefined,
	};
};

const productImageOverrides: Record<string, { galleryImages: string[]; image?: string; priceUnit?: string }> = {
	'telts-10x30': {
		galleryImages: ['/images/products/telts-10x30-1.jpg', '/images/products/telts-10x30.jpg'],
		priceUnit: 'm²',
	},
	'pagoda-telts-5x5': {
		galleryImages: ['/images/products/pagoda-telts-5x5.jpg', '/images/products/pagoda-telts-5x5-1.jpg'],
		priceUnit: 'diennakts',
	},
	'kokteilgalds-ar-galdautu': {
		galleryImages: [
			'/images/products/kokteilgalds-1.jpg',
			'/images/products/kokteilgalds.jpg',
		],
		priceUnit: 'gab.',
	},
	'telts-3x6': {
		galleryImages: ['/images/products/telts-3x6.jpg'],
		priceUnit: 'gab.',
	},
	'telts-3x3': {
		galleryImages: ['/images/products/telts-3x3.jpg'],
		priceUnit: 'gab.',
	},
};

const applyProductGalleryOverrides = (product: ProductItem) => {
	const override = productImageOverrides[product.id];
	const galleryImages = Array.from(new Set(override?.galleryImages ?? product.galleryImages));

	return {
		...product,
		galleryImages,
		image: override?.image ?? galleryImages[0] ?? product.image,
		priceUnit: override?.priceUnit ?? product.priceUnit,
	};
};

const expandProductVariants = (product: ProductItem): ProductItem[] => {
	if (product.id !== 'kokteilgalds-ar-galdautu') {
		return [product];
	}

	return [
		{
			...product,
			title: 'Kokteiļtipa galds ar galdautu',
			description: 'Kokteiļtipa galds pasākumiem ar baltu vai melnu galdautu, piemērots stāvviesībām un uzkodu zonām.',
			size: 'Balts vai melns galdauts',
			variant: 'Ar baltu vai melnu galdautu',
			galleryImages: ['/images/products/kokteilgalds-1.jpg', '/images/products/kokteilgalds.jpg'],
			image: '/images/products/kokteilgalds-1.jpg',
		},
		{
			...product,
			id: 'kokteilgalds-bez-galdauta',
			title: 'Saliekams kokteiļgalds bez galdauta',
			description: 'Balts saliekams kokteiļgalds pasākumiem, kur nepieciešams praktisks galds bez dekoratīva galdauta.',
			size: 'Balts galds bez galdauta',
			variant: 'Bez galdauta',
			galleryImages: ['/images/products/kokteilgalds-2.jpg'],
			image: '/images/products/kokteilgalds-2.jpg',
		},
	];
};

export async function getProductsByPageSlug(pageSlug: string) {
	const tableName = import.meta.env.SUPABASE_PRODUCTS_TABLE || 'products';
	const rows = await fetchSupabaseRows<ProductRow>(tableName, {
		params: {
			is_active: 'eq.true',
			page_slug: `eq.${pageSlug}`,
			order: 'sort_order.asc',
		},
	});

	const products = (sortRows(rows).map(mapProductRow).filter(Boolean) as ProductItem[])
		.map(applyProductGalleryOverrides)
		.flatMap(expandProductVariants);

	return products;
}

export const PRODUCT_PAGE_SLUGS = ['teltis', 'gridas-segumi', 'galdi-un-kresli', 'ara-silditaji', 'pufi'] as const;

let productRouteMapPromise: Promise<Record<string, string>> | null = null;

export function getProductRouteMap() {
	productRouteMapPromise ??= Promise.all(
		PRODUCT_PAGE_SLUGS.map(async (slug) => {
			const products = await getProductsByPageSlug(slug);
			return products.map((product) => [product.id, `/${slug}`] as const);
		}),
	).then((entries) => Object.fromEntries(entries.flat()));

	return productRouteMapPromise;
}

export async function getAllActiveProducts() {
	const tableName = import.meta.env.SUPABASE_PRODUCTS_TABLE || 'products';
	const rows = await fetchSupabaseRows<ProductRow>(tableName, {
		params: {
			is_active: 'eq.true',
			order: 'page_slug.asc,sort_order.asc',
		},
	});

	const products = (sortRows(rows).map(mapProductRow).filter(Boolean) as ProductItem[])
		.map(applyProductGalleryOverrides)
		.flatMap(expandProductVariants);

	return products;
}

export async function getTentProducts() {
	return getProductsByPageSlug('teltis');
}
