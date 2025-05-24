// Add your code here
//%icon=""
//%color=#000080
namespace levels {
    export enum Levels {
        One,
        Two,
        Three,
        Four
    }
    let level = 0
//%block="set level $l to $tile"
//%tile.shadow=tiles_tilemap_editor
export function c(tile: tiles.TileMapData,l:number): void {
forever(function() {
if (l === l) {
if (level === l) {
tiles.setCurrentTilemap(tile)
}
}
})
}

   
     //% block="set level to $e"
    //% cover.shadow=tileset_tile_picker
    //%sprite.shadow=variables_get
    export function coverTil(e:number) {
     if (e === e) {
         level = e
         pause(50)
     } 
    }
    //%block="Level is $l"
    export function b(l: number): boolean {
        if (l === l) {
            if (level === l) {
              return true;
            }
        }
        return false
    }
    //block="set $sprite spot to $tile for level $l"
    //tile.shadow=tileset_tile_picker
    //sprite.shadow=variables_get
    //export function st(tile: Image,sprite: Sprite,l:Levels): void {
       // if (l == 0) {
      //      tiles.placeOnRandomTile(sprite,tile)
     //   }
  //  }

  //block="Set $sprite tile spot to col $n row $n2 for $l"
  //sprite.shadow=variables_get
//export function sS(n: number,n2: number,sprite: Sprite,l:Levels): void {
   // if (l == 0) {
//tiles.placeOnTile(sprite, tiles.getTileLocation(n, n2))
   // }
//}
}