controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Macchina,
    [img`
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 7 7 7 7 7 8 8 . . . 
        . . . . 8 f 8 7 7 7 8 f 8 . . . 
        . . . . 8 f 8 8 8 8 8 f 8 . . . 
        . . . . 8 8 8 9 9 9 8 8 8 . . . 
        . . . . . 8 9 9 9 9 9 8 . . . . 
        . . . . . 8 9 8 8 8 9 8 . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 f 8 9 9 9 8 f 8 . . . 
        . . . . 8 f 8 9 9 9 8 f 8 . . . 
        . . . . 8 f 8 9 9 9 8 f 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Macchina,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 8 8 8 8 . . . . . 8 8 8 8 8 . 
        8 8 f f 8 8 8 8 8 8 8 f f f 8 8 
        8 7 8 8 8 9 9 8 8 8 8 8 8 8 8 8 
        8 7 7 8 9 9 8 8 8 8 8 9 9 9 8 8 
        8 7 7 8 9 9 8 8 8 8 8 9 9 9 8 8 
        8 7 7 8 9 9 8 8 8 8 8 9 9 9 8 8 
        8 7 8 8 8 9 9 8 8 8 8 8 8 8 8 8 
        8 8 f f 8 8 8 8 8 8 8 f f f 8 8 
        . 8 8 8 8 . . . . . 8 8 8 8 8 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Macchina,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 8 8 8 8 8 . . . . . 8 8 8 8 . 
        8 8 f f f 8 8 8 8 8 8 8 f f 8 8 
        8 8 8 8 8 8 8 8 8 9 9 8 8 8 7 8 
        8 8 9 9 9 8 8 8 8 8 9 9 8 7 7 8 
        8 8 9 9 9 8 8 8 8 8 9 9 8 7 7 8 
        8 8 9 9 9 8 8 8 8 8 9 9 8 7 7 8 
        8 8 8 8 8 8 8 8 8 9 9 8 8 8 7 8 
        8 8 f f f 8 8 8 8 8 8 8 f f 8 8 
        . 8 8 8 8 8 . . . . . 8 8 8 8 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Macchina,
    [img`
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 f 8 9 9 9 8 f 8 . . . . 
        . . . 8 f 8 9 9 9 8 f 8 . . . . 
        . . . 8 f 8 9 9 9 8 f 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . . 8 9 8 8 8 9 8 . . . . . 
        . . . . 8 9 9 9 9 9 8 . . . . . 
        . . . 8 8 8 9 9 9 8 8 8 . . . . 
        . . . 8 f 8 8 8 8 8 f 8 . . . . 
        . . . 8 f 8 7 7 7 8 f 8 . . . . 
        . . . 8 8 7 7 7 7 7 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        `],
    500,
    false
    )
})
let Macchina: Sprite = null
game.splash("MME LAST RACE ", "premi A per Iniziare  ")
tiles.setTilemap(tilemap`level1`)
let Start = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ffffffffffffffff
    cccccccccccccccc
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    1f1f1f1f1f1f1f1f
    f1f1f1f1f1f1f1f1
    cccccccccccccccc
    ffffffffffffffff
    `, SpriteKind.Player)
Start.setPosition(150, 13)
let Sasso1 = sprites.create(img`
    . . . . . c c b b b . . . . . . 
    . . . . c b d d d d b . . . . . 
    . . . . c d d d d d d b b . . . 
    . . . . c d d d d d d d d b . . 
    . . . c b b d d d d d d d b . . 
    . . . c b b d d d d d d d b . . 
    . c c c c b b b b d d d b b b . 
    . c d d b c b b b b b b b b d b 
    c b b d d d b b b b b d d b d b 
    c c b b d d d d d d d b b b d c 
    c b c c c b b b b b b b d d c c 
    c c b b c c c c b d d d b c c b 
    . c c c c c c c c c c c b b b b 
    . . c c c c c b b b b b b b c . 
    . . . . . . c c b b b b c c . . 
    . . . . . . . . c c c c . . . . 
    `, SpriteKind.Enemy)
Sasso1.setPosition(200, 7)
let Sasso2 = sprites.create(img`
    . . . . . c c b b b . . . . . . 
    . . . . c b d d d d b . . . . . 
    . . . . c d d d d d d b b . . . 
    . . . . c d d d d d d d d b . . 
    . . . c b b d d d d d d d b . . 
    . . . c b b d d d d d d d b . . 
    . c c c c b b b b d d d b b b . 
    . c d d b c b b b b b b b b d b 
    c b b d d d b b b b b d d b d b 
    c c b b d d d d d d d b b b d c 
    c b c c c b b b b b b b d d c c 
    c c b b c c c c b d d d b c c b 
    . c c c c c c c c c c c b b b b 
    . . c c c c c b b b b b b b c . 
    . . . . . . c c b b b b c c . . 
    . . . . . . . . c c c c . . . . 
    `, SpriteKind.Enemy)
Sasso2.setPosition(200, 248)
let Sasso3 = sprites.create(img`
    . . . . . c c b b b . . . . . . 
    . . . . c b d d d d b . . . . . 
    . . . . c d d d d d d b b . . . 
    . . . . c d d d d d d d d b . . 
    . . . c b b d d d d d d d b . . 
    . . . c b b d d d d d d d b . . 
    . c c c c b b b b d d d b b b . 
    . c d d b c b b b b b b b b d b 
    c b b d d d b b b b b d d b d b 
    c c b b d d d d d d d b b b d c 
    c b c c c b b b b b b b d d c c 
    c c b b c c c c b d d d b c c b 
    . c c c c c c c c c c c b b b b 
    . . c c c c c b b b b b b b c . 
    . . . . . . c c b b b b c c . . 
    . . . . . . . . c c c c . . . . 
    `, SpriteKind.Enemy)
Sasso3.setPosition(54, 152)
Macchina = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 8 8 8 8 8 . . . . . 8 8 8 8 . 
    8 8 f f f 8 8 8 8 8 8 8 f f 8 8 
    8 8 8 8 8 8 8 8 8 9 9 8 8 8 7 8 
    8 8 9 9 9 8 8 8 8 8 9 9 8 7 7 8 
    8 8 9 9 9 8 8 8 8 8 9 9 8 7 7 8 
    8 8 9 9 9 8 8 8 8 8 9 9 8 7 7 8 
    8 8 8 8 8 8 8 8 8 9 9 8 8 8 7 8 
    8 8 f f f 8 8 8 8 8 8 8 f f 8 8 
    . 8 8 8 8 8 . . . . . 8 8 8 8 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Macchina.setPosition(120, 7)
controller.moveSprite(Macchina, 100, 100)
scene.cameraFollowSprite(Macchina)
let Macchina_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 f f f 2 . . . . . 2 f f 2 . 
    2 2 f f f 2 2 2 2 2 2 2 f f 2 2 
    2 2 2 2 2 2 2 2 2 8 8 2 2 2 4 2 
    2 2 8 8 8 2 2 2 2 2 8 8 2 4 4 2 
    2 2 8 8 8 2 2 2 2 2 8 8 2 4 4 2 
    2 2 8 8 8 2 2 2 2 2 8 8 2 4 4 2 
    2 2 2 2 2 2 2 2 2 8 8 2 2 2 4 2 
    2 2 f f f 2 2 2 2 2 2 2 f f 2 2 
    . 2 f f f 2 . . . . . 2 f f 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Macchina_2.setPosition(120, 23)
