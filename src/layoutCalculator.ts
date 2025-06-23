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

    const tileDeck = [
        { "id": 0,  "resource": "wood"   },
        { "id": 1,  "resource": "wood"   },
        { "id": 2,  "resource": "wood"   },
        { "id": 3,  "resource": "wood"   },
        { "id": 4,  "resource": "sheep"  },
        { "id": 5,  "resource": "sheep"  },
        { "id": 6,  "resource": "sheep"  },
        { "id": 7,  "resource": "sheep"  },
        { "id": 8,  "resource": "wheat"  },
        { "id": 9,  "resource": "desert" },
        { "id": 10, "resource": "wheat"  },
        { "id": 11, "resource": "wheat"  },
        { "id": 12, "resource": "wheat"  },
        { "id": 13, "resource": "brick"  },
        { "id": 14, "resource": "brick"  },
        { "id": 15, "resource": "brick"  },
        { "id": 16, "resource": "ore"    },
        { "id": 17, "resource": "ore"    },
        { "id": 18, "resource": "ore"    }
      ]
      

    /*function generateTile(): Tile {
        let xCoord = 0
        let yCoord = Math.floor(Math.random() * 5)
        if (yCoord < 3) {
            xCoord = Math.floor(Math.random() * (3 + yCoord))
        }
        else {
            xCoord = Math.floor(Math.random() * (7 - yCoord))
        }
        console.log(`Random Coords = [${xCoord}, ${yCoord}]`)
    }*/



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

    let sampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

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
    //generateTile();

    console.log(newPort);


    shuffle(sampleArray, 2345695);
    console.log(sampleArray)
    function genBoard() {
        const board: Board = {
            tiles: []
            //ports: []
        }

        for (let i = 0; i < sampleArray.length; i++) {
            const tile = tileDeck[sampleArray[i]];
            const coords = standardBoardLayout[i];
            const newTile: Tile = {
                coords: coords,
                resource: tile.resource as ResourceType,
                numberToken: null,
                hasRobber: false,
                tileID: tile.id as TileId
            }
            console.log(`Tile ID: ${tile.id}, Resource: ${tile.resource}, Coords: [${coords[0]}, ${coords[1]}]`);
            console.log(newTile);
            board.tiles.push(newTile);
    
        }

        return board;

    }

    const newBoard = genBoard();
    console.log("Board generated successfully.");
    console.log(newBoard);
}