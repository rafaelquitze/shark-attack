controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 6 6 9 . . . . . . . . 
        . . . 9 6 9 1 1 6 . . . . . . . 
        . . . 6 9 6 9 1 6 . . . . . . . 
        . . . 9 9 9 6 9 9 . . . . . . . 
        . . . 6 9 9 9 1 9 . . . . . . . 
        . . . 9 6 1 9 9 6 . . . . . . . 
        . . . . 9 9 6 6 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, other_sprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let ENEMY_SPRITE: Sprite = null
let projectile: Sprite = null
let other_sprite: Sprite = null
scene.setBackgroundColor(9)
other_sprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(other_sprite)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ddddd99999ddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ddddd99999ddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999ddddd99999ddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd99999999999999999
    999999999999999999999999ddddd99999ddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddd9999999999999999
    999999999999999999999999ddddd99999ddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddd9999999999999999
    9999999999ddddddd9999999ddddd99999ddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddd9999999999999999
    999999999dddddddd9999999ddddd99999ddddd99999999ddddd9999999999999999999999999999999999999999ddddd9999999999999999999999999999999999999dddddddddd999ddddd99999999
    999999999dddddddd9999999ddddd99999ddddd99999999ddddd999999999999999999999999999999999ddddd99ddddd9999999999999999999999999999999999999dddddddddd999dddddd9999999
    999999999dddddddd999999dddddd99999ddddd99999999ddddd999999999999999999999999999999999ddddd99ddddd99999999999999999999999999999999999999ddddddddd999dddddd9999999
    999999999dddddddd999999dddddd99999ddddd99999999ddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd999999999999999999999999ddddddddd999dddddd9999999
    999999999dddddddd999999dddddd99999ddddd99999999ddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd999999999999999999999999ddddddddd999dddddd9999999
    99999999ddddddddd999999dddddd99999ddddd99999999ddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd999999999999999999999999ddddddddd9999ddddd9999999
    99999999ddddddddd999999dddddd99999ddddd99999999ddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999ddddddddd9999ddddd9999999
    99999999ddddddddd999999dddddddddd9dddddd9999999ddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999ddddddddd9999ddddd9999999
    9999999dddddddddd999999dddddddddd9dddddd9999999ddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999ddddddddd9999ddddd9999999
    9999999dddddddddd999999ddddddddddddddddd999999dddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999dddddddddd999ddddd9999999
    9999999dddddddddd999999ddddddddddddddddd999999dddddd999999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999dddddddddd999dddddd999999
    9999999dddddddddd999999ddddddddddddddddd999999ddddddd99999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999dddddddddd999dddddd999999
    9999999dddddddddd999999ddddddddddddddddd999999ddddddd99999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999dddddddddd999dddddd999999
    9999999dddddddddd999999ddddddddddd9ddddd99999dddddddd99999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd99999999999dddddddddd999dddddd999999
    9999999dddddddddd999999ddddddddddd9ddddd99999dddddddd99999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999ddddd999999
    9999999dddddddddd999999ddddddddddddddddd99999dddddddd99999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999ddddd999999
    9999999dddddddddd999999ddddddddddddddddd99999dddddddd99999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999ddddd999999
    9999999dddddddddd999999ddddddddddddddddd9999ddddddddd99999999999999999999999999999999ddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999ddddd999999
    9999999dddddddddd99999dddddddddddddddddddddd9dddddddd9999999999999999999999999999999dddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999ddddd999999
    9999999dddddddddd99999ddddddddddddddddddddddddddddddd9999999999999999999999999999999dddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999dddddd99999
    9999999dddddddddd99999ddddddddddddddddddddddddddddddd999999999999999999999dddddd9999dddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999dddddd99999
    9999999dddddddddd99999ddddddddddddddddddddddddddddddd999999999999999999999dddddd9999dddddd99ddddd999999999ddddd99999999ddddd999ddddd999dddddddddd9999dddddd99999
    9999999dddddddddd99999ddddddddddddddddddddddddddddddd999999999999999999999dddddd9999ddddd999ddddd999999999ddddd99999999ddddd999ddddd999ddddddddddd999dddddd99999
    99999999ddddddddd9999dddddddddddddddddddddddddddddddd999999999999999999999dddddd9999ddddd999ddddd999999999ddddd99999999ddddd999ddddd99dddddddddddd9999ddddd99999
    99999999ddddddddd99dddddddddddddddddddddddddddddddddd999999999999999999999dddddd999dddddd999ddddd999999999ddddd99999999ddddd999ddddd99dddddddddddd9999ddddd99999
    99999999ddddddddd9dddddddddddddddddddddddddddddddddddd99999999999999999999ddddd9999dddddd99dddddd999999999ddddd99999999ddddd999ddddd999ddddddddddd9999ddddd99999
    99999999ddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999ddddd99999ddddd99dddddd999999999ddddd99999999ddddd999ddddd9ddddddddddddd9999ddddd99999
    99999999dddddddddddddddddddddddddddddddddddddddddddddddd999999999999999999ddddd999ddddddd99dddddd999999999ddddd99999999ddddd999dddddd9dddddddddddd9999ddddd99999
    99999999ddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999999ddddd9999dddddd99dddddd999999999ddddd99999999ddddd999ddddd99dddddddddddd9999ddddd99999
    999999999ddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999ddddd9999dddddd9ddddddd999999999ddddd99999999ddddd999dddddddddddddddddd99999ddddd99999
    999999999ddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999dddddd9dddddddd9ddddddd99999999dddddd99999999ddddd999dddddddddddddddddd9999dddddd99999
    999999999ddddddddddddddddddddddbbbbbbdddddddddddddddddddddd99999999999999dddddd9dddddddddd9dddddd99999999dddddd99999999ddddd999ddddd99ddddddddddddd999ddddd99999
    99999999ddddddddddddddddddddbbbbbbbbbbbddddddddddddddddddddd99999999999999ddddddd99dddddd99ddddddd999999ddddddd99999999ddddd99dddddddddddddddddddddd99ddddd99999
    9999999dddddddddddddddddddbbbbbbbbbbbbbbbdddddddddddddddddddd9999999999999dddddd99ddddddd9dddddddd99999dddddddd99999999ddddd999dddddddddddddddddddddddddddd99999
    999999dddddddddddddddddbbbbbbbbbbbbbbbbbbbdddddddddddddddddddd99999999999ddddddddddddddddddddddddd99999d9dddddd99999999ddddd999dddddddddddddddddddddddddddd99999
    99999dddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddd99999999999ddddddddddddddddddddddddd99999ddddddd99999999ddddd999ddddddddddddddbbbbbbbbbbdddd99999
    999ddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddd9999999999ddddddddddddddddddddddddddd99dddddddd99999999ddddd99dddddddddddbbbbbbbbbbbbbbbbbbbb999
    99dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddd99999999dddddddddddddddddddddddddddddd9ddddddd99999999ddddd99ddddddddbbbbbbbbbbbbbbbbbbbbbbbbbb
    9dddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddd99999ddddddddddddddddddddddddddddddddddddddd99999999ddddd9dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddd999dddddddddddddddddddddddddddddddddddddddd99999999ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999ddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbbbbbbbbbbbbbbbbbddddddddddddddddddddddd9999dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
for (let index = 0; index <= 10; index++) {
    other_sprite = sprites.create(img`
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
        .........888....
        .......88668....
        ......86688.....
        .....8768.......
        ....8778........
        ....8778........
        ...8778.........
        ...8578.........
        ...8558.........
        ...8758......88.
        ...87678....878.
        ...87678...878..
        ....87678.8768..
        ....876768678...
        .....87668778...
        ......8668766...
        .......8687678..
        ........8667678.
        ........8685756.
        ....88..86665756
        ...868..86685656
        ..8668..86687678
        .8668..868687678
        .868..8688667678
        8768.88886876778
        8768.8888877678.
        876688888676778.
        87676888668778..
        .876776868668...
        .87766778868....
        ..877667688.....
        ...86767788.....
        `, SpriteKind.Food)
    other_sprite.setPosition(16 * index, 96)
}
game.onUpdateInterval(500, function () {
    ENEMY_SPRITE = sprites.create(img`
        . . . . . . . . . . . c c . . . 
        . . . . . . . c c c c 6 3 c . . 
        . . . . . . c 6 3 3 3 3 6 c . . 
        . . c c . c 6 c c 3 3 3 3 3 c . 
        . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
        b 5 4 b 4 4 4 4 b b 5 c b b . . 
        c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
        c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . c c c c c c c c c . . c c c . 
        `, SpriteKind.Enemy)
    ENEMY_SPRITE.setPosition(randint(0, 160), randint(0, 120))
})
