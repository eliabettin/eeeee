// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100007040606060606060606060606060507070104060606060606060606060501070701010707070707070707070701010707010107070707070707070707010107070101070707070707070707070101070701010707070707070707070701010707010107070707070707070707010107070101070707070707070707070101070701010707070707070707070701010707010107070707070707070707010107070101070707070707070707070101070701010707070707070707070701010707010107070707070707070707010107070101070707070707070707070101070701030606060606060606060602010707030606060606060606060606060207`, img`
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadHorizontal,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
