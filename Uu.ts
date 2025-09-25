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
    let level2 = 0
    let l2 = ""
//%block="set level $l to $tile"
//%tile.shadow=tiles_tilemap_editor
//%group=Basic
export function c(tile: tiles.TileMapData,l:number): void {
forever(function() {
if (l === l) {
if (level === l) {
tiles.setCurrentTilemap(tile)
}
}
})
}
//%block="set level $s to $n as $t"
//%group="Advanced"
//%t.shadow=tiles_tilemap_editor
//%s.defl=Dungeon
export function c2(t: tiles.TileMapData,n: number,s: string): void {
forever(function() {
if (n === n && s === s) {
    if (level2 === n && l2 === s) { 
tiles.setCurrentTilemap(t)
}
}
})
}
   
     //% block="set level to $e"
    //% cover.shadow=tileset_tile_picker
    //%sprite.shadow=variables_get
    //%group=Basic
    export function coverTil(e:number) {
     if (e === e) {
         level = e
         pause(50)
     } 
    }
    //%block="set level to $n as $s"
    //%group="Advanced"
    //%s.defl=Dungeon
    export function coverTil2(n: number,s:string): void {
        if (n === n && s === s) {
            level2 = n
            l2 = s
            pause(50)
        }
    }
    //%block="Level is $l"
    //%group=Basic
    export function b(l: number): boolean {
        if (l === l) {
            if (level === l) {
              return true;
            }
        }
        return false
    }
    //%block="Level is $n and $s"
    //%group="Advanced"
    //%s.defl=Dungeon
    export function b2(n: number,s:string): boolean {
        if (n === n && s === s) {
            if (level2 === n && l2 === s) {
                return true;
            }
        }
        return false;
    }
    //%block="change level by $n Basic"
    //%group="Change Level"
    export function cn(n: number): void {
        level += n
    }

    //%block="change level by $n Advanced"
    //%group="Change Level Advanced"
    export function cn2(n: number): void {
        level2 += n
    }

    //%block="Current Level Basic"
    //%group="Basic"
    export function cn3(): number {
       return level
    }
    //%block="Current Level Advanced"
    //%group="Advanced"
    export function cn4(): number {
        return level2
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
    //block="level to $tile"
    //tile.shadow=tiles_tilemap_editor
    //group=Basic
   // export function c3(tile: tiles.TileMapData): any {
   //     return tile
   // }
}
