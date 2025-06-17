export default function generateBoard(): void {
    type ResourceType = 'ore' | 'brick' | 'wheat' | 'wood' | 'sheep' | 'desert';
    type PortType = 'ore' | 'brick' | 'wheat' | 'wood' | 'sheep' | 'any';
    type TokenNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    type AxialCoord = [number, number];

    interface Tile {
        coords: AxialCoord;
        resource: ResourceType;
        numberToken: TokenNumber | null;
        hasRobber: boolean;
    }

    interface Port {
        coords: number;
        resource: PortType;
    }

    interface Board {
        tiles: Tile[];
        //ports: Port[];
    }

    function generateTile(): Tile {
        let xCoord = 0
        let yCoord = Math.floor(Math.random() * 5)
        if (yCoord < 3) {
            xCoord = Math.floor(Math.random() * (3 + yCoord))
        }
        else {
            xCoord = Math.floor(Math.random() * (7 - yCoord))
        }
        console.log(`Random Coords = [${xCoord}, ${yCoord}]`)
    }

    // Offsets for finding coordinates of neighboring hexes of a given hex
    // ex: [1, 1] => [0, 1], [1, 2], [2, 2], [2, 1], [1, 0], [0, 0]
    const neighborOffsets: AxialCoord[] = [
        [-1, 0], [0, 1], [1, 1],
        [1, 0], [0, -1], [-1, -1]
    ]

    const standardBoardLayout: AxialCoord[] = [
        [0, 4], [1, 4], [2, 4], 
        [0, 3], [1, 3], [2, 3], [3, 3],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
        [0, 1], [1, 1], [2, 1], [3, 1],
        [0, 0], [1, 0], [2, 0],  
    ]

    let newPort: Port = {coords: 2, resource: 'any'}
    generateTile();

    console.log(newPort);
}