export const Inventory = () => {
    const inventory = window.localStorage.getItem('daily-drops-inventory');

    let itemized: string[] = [];
    console.log('eyo')
    itemized = inventory?.split(';') || [];
    console.log(itemized)
    const rarityCount = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < itemized.length; i++) {
        console.log('eyo')
        const rarityWord = (itemized[i]).split(' ')[0];
        switch (rarityWord) {
            case 'lesser':
                rarityCount[0] = rarityCount[0] + 1;
                break;
            case 'greater':
                rarityCount[2] = rarityCount[2] + 1;
                break;
            case 'epic':
                rarityCount[3] = rarityCount[3] + 1;
                break;
            case 'legendary':
                rarityCount[4] = rarityCount[4] + 1;
                break;
            case 'godly':
                rarityCount[5] = rarityCount[5] + 1;
                break;
            default:
                rarityCount[1] = rarityCount[1] + 1;
                break;
        }
    }

    return (
        <div className="inventoryContainer">
            <p>{`total:${itemized.length} epic:${rarityCount[3]} legendary:${rarityCount[4]} godly:${rarityCount[5]}`}</p>
            {itemized.map((item: string) => {
                return (
                    <div>
                        {item}
                    </div>
                );
            })}
        </div>
    );
}