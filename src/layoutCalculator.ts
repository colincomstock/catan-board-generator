export default function generateBoard(): void {
    type ResourceType = 'ore' | 'brick' | 'wheat' | 'wood' | 'sheep' | 'desert';
    type PortType = 'ore' | 'brick' | 'wheat' | 'wood' | 'sheep' | 'any';
    type TokenNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    type AxialCoord = [number, number];
    type TileId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

    interface Tile {
        coords: AxialCoord;
        resource: ResourceType;
        numberToken: TokenNumber | null;
        hasRobber: boolean;
        tileID: TileId;
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



    // Modified Fisher-Yates shuffle algorithm to accept seeds.
    function shuffle(array: number[], seed: number) {
        let m = array.length, t, i;

        // While there remains elements to shuffle
        while (m) {

            // Pick a remaining element
            i = Math.floor(random(seed) * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array [i];
            array[i] = t;
            ++seed;
        }

        return array;
    }

    let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    function random(seed: number) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
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


    shuffle(sampleArray, 2345695);
    console.log(sampleArray)
}