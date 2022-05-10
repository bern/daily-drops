import ReactModal from 'react-modal';

interface IntentoryProps {
    onClose?: () => void;
}

export const Inventory = (props: IntentoryProps) => {
    const { onClose } = props;
    const inventory = window.localStorage.getItem('daily-drops-inventory');

    let itemized: string[] = [];
    itemized = inventory?.split(';') || [];
    console.log(itemized)
    const rarityCount = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < itemized.length; i++) {
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
        <ReactModal
            isOpen={true}
            className="inventoryModal__container"
            appElement={document.getElementById('root') || undefined}
        >
            <div
                id="modal-close" 
                className="inventoryModal__closeButton"
                onClick={() => { if (onClose) { onClose(); }}}
            >
                x
            </div>
            <div className="inventoryContainer">
                <div style={{ marginTop: '16px' }}>
                    <div>{`Treasures Found: ${itemized.length}`}</div>
                    <div>{`Epic: ${rarityCount[3]}`}</div>
                    <div>{`Legendary: ${rarityCount[4]}`}</div>
                    <div>{`Godly: ${rarityCount[5]}`}</div>
                </div>
                <div style={{ marginTop: '32px' }}>
                    {itemized.map((item: string) => {
                        console.log(item.split('+')[1]);
                        console.log(new Date(parseInt((item.split('+')[1]))))
                        const itemName = item.split('+')[0];
                        const dateFound = new Date(parseInt(item.split('+')[1]));

                        return (
                            <div>
                                <div>{itemName}</div>
                                <div className="inventory__itemFoundDate">{`found ${dateFound.getMonth() + 1}-${dateFound.getDate()}-${dateFound.getFullYear()}`}</div>
                                <hr/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </ReactModal>
    );
}