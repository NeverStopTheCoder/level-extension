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
export function c(tile: tiles.TileMapData,l:Levels): void {
game.onUpdate(function() {
if (l === 0) {
if (level === 1) {
tiles.setCurrentTilemap(tile)
}

}else if (l === 1) {
if (level === 2) {
tiles.setCurrentTilemap(tile)
}
} 

else if (l === 2) {
if (level === 3) {
tiles.setCurrentTilemap(tile)
}
}

else if (l === 3)  {
if (level === 4) {
tiles.setCurrentTilemap(tile)
}
}
})

}
   
     //% block="set level to $e"
    //% cover.shadow=tileset_tile_picker
    //%sprite.shadow=variables_get
    export function coverTil(e:Levels) {
     if (e === 0) {
         level = 1
     } else if (e === 1) {
         level = 2
     }else if (e === 2) {
         level = 3
     }else if (e === 3) {
         level = 4
     }
    }
    //%block="Level is $l"
    export function b(l: Levels): boolean {
        if (l === 0) {
            if (level === 1) {
              return true;
            }

        } else if (l === 1) {
            if (level === 2) {
              return true;
            }
        }

        else if (l === 2) {
            if (level === 3) {
                return true;
            }
        }

        else if (l === 3) {
            if (level === 4) {
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