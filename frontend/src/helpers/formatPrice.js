export default function formatPrice(price) {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: price.currency,
        currencyDisplay: 'narrowSymbol',
    })
        .formatToParts(parseFloat(`${price.amount}.${price.decimals}`))
        .filter(part => price.decimals !== 0 || !['decimals', 'fraction'].includes(part.type))
        .map(part => {
            let newPartValue = '';
            switch (part.type) {
                case 'group':
                    newPartValue = '.'
                    break;
                case 'decimals':
                    newPartValue = ','
                    break;
                case 'currency':
                    newPartValue = `${part.value} `
                    break;
                default:
                    newPartValue = part.value
                    break;
            }
            return newPartValue;
        })
        .join('');
}
