import { SortingFn } from '@tanstack/react-table';

export const reSplitAlphaNumeric = /([0-9]+)/gm;

export const priceSorting: SortingFn<any> = (rowA, rowB, columnId: string) => {
	const promoPriceA = rowA.original.promoPrice;
	const promoPriceB = rowB.original.promoPrice;

	const priceA = promoPriceA && promoPriceA > 0 ? promoPriceA : rowA.getValue(columnId);
	const priceB = promoPriceB && promoPriceB > 0 ? promoPriceB : rowB.getValue(columnId);

	return compareAlphanumeric(priceA.toString(), priceB.toString());
};

function compareBasic(a: any, b: any) {
	return a === b ? 0 : a > b ? 1 : -1;
}

function compareAlphanumeric(aStr: string, bStr: string) {
	const a = aStr.split(reSplitAlphaNumeric).filter(Boolean);
	const b = bStr.split(reSplitAlphaNumeric).filter(Boolean);

	while (a.length && b.length) {
		const aa = a.shift()!;
		const bb = b.shift()!;

		const an = parseInt(aa, 10);
		const bn = parseInt(bb, 10);

		const combo = [an, bn].sort();

		if (isNaN(combo[0]!)) {
			if (aa > bb) {
				return 1;
			}
			if (bb > aa) {
				return -1;
			}
			continue;
		}

		if (isNaN(combo[1]!)) {
			return isNaN(an) ? -1 : 1;
		}

		if (an > bn) {
			return 1;
		}
		if (bn > an) {
			return -1;
		}
	}

	return a.length - b.length;
}
