// main.js
console.log('Ciao, mondo!');
kaboom({width: 1470,
    height: 740,
    scale: 1}) //inizializzare la libreria Kaboom
//debug.inspect = true //COMANDO IMPORTANTISSIMO PER VEDERE LE HITBOXES DEI PERSONAGGI
//loadSpriteAtlas per un immagine che contiene più "tiles" o più sprite
//loadSprite per un immagine che contiene un singolo sprite
//SPRITE DEL TERRENO DI GIOCO
loadSpriteAtlas("assets/pngegg.png", {
    "sand": { //oltre all'etichetta "sand" bisogna specificare le coordinate in cui si trova lo sprite nell'immagine
        "x": 55,
        "y": 0,
        "width":444,
        "height":197
    }
})
//il primo parametro del loadSprite indica il nome spriet
loadSprite("palm tree", "assets/palm tree.png", {
    sliceX: 4, sliceY: 4, anims: { "palmtree": { from: 0, to: 14, speed: 20, loop: true}}
})//"palmtree" è un'etichetta che verrà utilizzata per la funzione play() che servirà per far partire l'animazione


//CARICAMENTO DEI SUONI
loadSound("teleport sound", "sound/teleport sound.mp3")
loadSound("jump sound","sound/jump sound.mp3")
loadSound("jump landing sound","sound/jump landing sound.mp3")
loadSound("punch sound","sound/punch sound.mp3")
loadSound("ki blast sound","sound/ki blast sound.mp3")
loadSound("death fall sound","sound/death fall sound 1.mp3")
loadSound("kamehameha speak sound","sound/kamehameha speak sound.mp3")
loadSound("kamehameha sound","sound/kamehameha sound.mp3")
loadSound("kamehameha charge sound","sound/kamehameha charge sound.mp3")
loadSound("garlick gun speak sound","sound/garlick gun speak sound.mp3")
loadSound("garlick gun sound","sound/garlick gun sound.mp3")
loadSound("garlick gun charge sound","sound/garlick gun charge sound.mp3")
loadSound("air punch sound","sound/air punch sound.mp3")

loadSound("goku damaged scream","sound/goku damaged scream.mp3")
loadSound("goku damaged scream 1","sound/goku damaged scream 1.mp3")
loadSound("goku damaged scream 2","sound/goku damaged scream 2.mp3")
loadSound("vegeta damaged scream","sound/vegeta damaged scream.mp3")
loadSound("vegeta damaged scream 1","sound/vegeta damaged scream 1.mp3")
loadSound("vegeta damaged scream 2","sound/vegeta damaged scream 2.mp3")
loadSound("goku jump scream sound","sound/goku jump scream sound.mp3")
loadSound("goku jump scream sound 1","sound/goku jump scream sound 1.mp3")
loadSound("vegeta jump scream sound","sound/vegeta jump scream sound.mp3")
loadSound("vegeta jump scream sound 1","sound/vegeta jump scream sound 1.mp3")


loadSound("menu sound","sound/menu sound.mp3")
//CARICAMENTO DELLE OST
loadSound("menu soundtrack","sound/menu soundtrack.mp3")
loadSound("fight soundtrack","sound/fight soundtrack.mp3")

//CARICAMENTO DEI FONT
loadFont("Round", "./assets/Round9x13.ttf")




//CARICAMENTO DEGLI SPRITE DEI COMANDI
loadSprite("W", "controls/W_Key_Dark.png")
loadSprite("A", "controls/A_Key_Dark.png")
loadSprite("S", "controls/S_Key_Dark.png")
loadSprite("D", "controls/D_Key_Dark.png")
loadSprite("E", "controls/E_Key_Dark.png")
loadSprite("Q", "controls/Q_Key_Dark.png")
loadSprite("space", "controls/Space_Key_Dark.png")

loadSprite("up", "controls/Arrow_Up_Key_Dark.png")
loadSprite("down", "controls/Arrow_Down_Key_Dark.png")
loadSprite("left", "controls/Arrow_Left_Key_Dark.png")
loadSprite("right", "controls/Arrow_Right_Key_Dark.png")
loadSprite("shift", "controls/Shift_Key_Dark.png")
loadSprite("minus", "controls/Minus_Key_Dark.png")
loadSprite("backspace", "controls/Backspace_Key_Dark.png")



//CARICAMENTO DEGLI SFONDI
loadSprite("menu","assets/menu.png")
loadSprite("background","assets/kame house.png") //caricare lo sfondo del combattimento che deve essere uno sprite background 


loadSprite("dragon ball 1","assets/dragon ball 1.png")
loadSprite("dragon ball 2","assets/dragon ball 2.png")
loadSprite("dragon ball 3","assets/dragon ball 3.png")
loadSprite("health","assets/health.png")
loadSprite("stamina","assets/stamina.png")
loadSprite("health mirrored","assets/health mirrored.png")
loadSprite("stamina mirrored","assets/stamina mirrored.png")
loadSprite("home","assets/home.png")
loadSprite("restart","assets/restart.png")


loadSprite("blast", "assets/blast.png")
loadSprite("blastmirrored", "assets/blast mirrored.png")
loadSprite("blast 1", "assets/blast 1.png")
loadSprite("blast 1 mirrored", "assets/blast 1 mirrored.png")
loadSprite("blastmove-player1", "assets/goku blast.png", {
    sliceX: 2, sliceY: 1, anims: { "blastmove": { from: 0, to: 1, speed: 7}}
})
loadSprite("super-attack-player1", "assets/kamehameha.png", {
    sliceX: 1, sliceY: 3, anims: { "superattack": { from: 0, to: 2, speed: 20, loop: true}}
})
loadSprite("super-attack-mirrored-player1", "assets/kamehameha mirrored.png", {
    sliceX: 1, sliceY: 3, anims: { "superattack": { from: 0, to: 2, speed: 20, loop: true}}
})
//SPRITE DEL PERSONAGGIO 1 CON ANIMAZIONI
loadSprite("idle-player1", "assets/goku idle.png", {
    sliceX: 1, sliceY: 1, anims: { "idle": { from: 0, to: 0, speed: 12, loop: true}}
})
loadSprite("jump-player1", "assets/goku jump.png", {
    sliceX: 1, sliceY: 1, anims: { "jump": { from: 0, to: 0, speed: 12, loop: true}}
})
loadSprite("punch-player1", "assets/goku punch.png", {
    sliceX: 2, sliceY: 1, anims: { "punch": { from: 0, to: 1, speed: 4}}
}) //sliceX è il numero di frame per righe, mentre sliceY è il numero di righe dei frame
loadSprite("kick-player1", "assets/goku kick.png", {
    sliceX: 3, sliceY: 1, anims: { "kick": { from: 0, to: 2, speed: 7}}
})
loadSprite("super-attack-move-player1", "assets/goku kamehameha.png", {
    sliceX: 6, sliceY: 1, anims: { "superattackmove": { from: 0, to: 5, speed: 9}}
})
loadSprite("run-player1", "assets/goku run.png", {
    sliceX: 6, sliceY: 1, anims: { "run": { from: 0, to: 5, speed: 40}}
}) 
loadSprite("stunned-player1", "assets/goku stunned.png", {
    sliceX: 3, sliceY: 1, anims: { "stunned": { from: 0, to: 2, speed: 5, loop: true}}
}) 
loadSprite("stunned1-player1", "assets/goku stunned mirrored.png", {
    sliceX: 3, sliceY: 1, anims: { "stunned1": { from: 0, to: 2, speed: 5, loop: true}}
})

loadSprite("damaged-player1", "assets/goku damaged.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-1-player1", "assets/goku damaged 1.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged1": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-2-player1", "assets/goku damaged 2.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged2": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-mirrored-player1", "assets/goku damaged mirrored.png", {
    sliceX: 1, sliceY: 1, anims: { "damagedmirrored": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-1-mirrored-player1", "assets/goku damaged 1 mirrored.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged1mirrored": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-2-mirrored-player1", "assets/goku damaged 2 mirrored.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged2mirrored": { from: 0, to: 0, speed: 12}}
})


loadSprite("teleportation-in-player1", "assets/goku teleportation in.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationin": { from: 0, to: 2, speed: 8}}
})
loadSprite("teleportation-out-player1", "assets/goku teleportation out.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationout": { from: 0, to: 2, speed: 8}}
})
loadSprite("teleportation-in-mirrored-player1", "assets/goku teleportation in mirrored.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationinmirrored": { from: 0, to: 2, speed: 8}}
})
loadSprite("teleportation-out-mirrored-player1", "assets/goku teleportation out mirrored.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationoutmirrored": { from: 0, to: 2, speed: 8}}
})
loadSprite("aura-player1", "assets/aura ssgss 1.png", {
    sliceX: 5, sliceY: 1, anims: { "aura": { from: 0, to: 4, speed: 8, loop: true}}
})

loadSprite("death-player1", "assets/goku death.png", {
    sliceX: 2, sliceY: 1, anims: { "death": { from: 0, to: 1, speed: 10}}
})


//SPRITE DEL PERSONAGGIO 2 CON ANIMAZIONI
loadSprite("blastmove-player2", "assets/vegeta blast.png", {
    sliceX: 2, sliceY: 1, anims: { "blastmove": { from: 0, to: 1, speed: 7}}
})
loadSprite("super-attack-player2", "assets/garlick gun.png", {
    sliceX: 1, sliceY: 3, anims: { "superattack": { from: 0, to: 2, speed: 20, loop: true}}
})
loadSprite("super-attack-mirrored-player2", "assets/garlick gun mirrored.png", {
    sliceX: 1, sliceY: 3, anims: { "superattack": { from: 0, to: 2, speed: 20, loop: true}}
})
loadSprite("idle-player2", "assets/vegeta idle.png", {
    sliceX: 1, sliceY: 1, anims: { "idle": { from: 0, to: 0, speed: 12, loop: true}}
})
loadSprite("jump-player2", "assets/vegeta jump.png", {
    sliceX: 1, sliceY: 1, anims: { "jump": { from: 0, to: 0, speed: 12, loop: true}}
})
loadSprite("punch-player2", "assets/vegeta punch.png", {
    sliceX: 2, sliceY: 1, anims: { "punch": { from: 0, to: 1, speed: 4}}
})
loadSprite("kick-player2", "assets/vegeta kick.png", {
    sliceX: 2, sliceY: 1, anims: { "kick": { from: 0, to: 1, speed: 5}}
})
loadSprite("super-attack-move-player2", "assets/vegeta garlick gun.png", {
    sliceX: 3, sliceY: 1, anims: { "superattackmove": { from: 0, to: 2, speed: 2}}
})
loadSprite("run-player2", "assets/vegeta run.png", {
    sliceX: 5, sliceY: 1, anims: { "run": { from: 0, to: 4, speed: 40}}
})
loadSprite("stunned-player2", "assets/vegeta stunned.png", {
    sliceX: 3, sliceY: 1, anims: { "stunned": { from: 0, to: 2, speed: 5, loop: true}}
}) 
loadSprite("stunned1-player2", "assets/vegeta stunned mirrored.png", {
    sliceX: 3, sliceY: 1, anims: { "stunned1": { from: 0, to: 2, speed: 5, loop: true}}
})
loadSprite("damaged-player2", "assets/vegeta damaged.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-1-player2", "assets/vegeta damaged 1.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged1": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-2-player2", "assets/vegeta damaged 2.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged2": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-mirrored-player2", "assets/vegeta damaged mirrored.png", {
    sliceX: 1, sliceY: 1, anims: { "damagedmirrored": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-1-mirrored-player2", "assets/vegeta damaged 1 mirrored.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged1mirrored": { from: 0, to: 0, speed: 12}}
})
loadSprite("damaged-2-mirrored-player2", "assets/vegeta damaged 2 mirrored.png", {
    sliceX: 1, sliceY: 1, anims: { "damaged2mirrored": { from: 0, to: 0, speed: 12}}
})

loadSprite("teleportation-in-player2", "assets/goku teleportation in.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationin": { from: 0, to: 2, speed: 8}}
})
loadSprite("teleportation-out-player2", "assets/vegeta teleportation out.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationout": { from: 0, to: 2, speed: 8}}
})
loadSprite("teleportation-in-mirrored-player2", "assets/vegeta teleportation in mirrored.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationinmirrored": { from: 0, to: 2, speed: 8}}
})
loadSprite("teleportation-out-mirrored-player2", "assets/vegeta teleportation out mirrored.png", {
    sliceX: 3, sliceY: 1, anims: { "teleportationoutmirrored": { from: 0, to: 2, speed: 8}}
})
loadSprite("aura-player2", "assets/aura ssgss.png", {
    sliceX: 5, sliceY: 1, anims: { "aura": { from: 0, to: 4, speed: 8}}
})



loadSprite("death-player2", "assets/vegeta death.png", {
    sliceX: 2, sliceY: 1, anims: { "death": { from: 0, to: 1, speed: 10}}
})



//DEFINIRE LA SCENA IN CUI VENGONO AGGIUNTI TUTTI GLI ELEMENTI
//RAPPRESENTA IL "CONTENITORE" DI TUTTI GLI ELEMENTI
//funzione scena in cui nel primo parametro è presente una stringa che rappresenta il nome della scena, mentre nel secondo è presente una funzione che contiene il codice di tutta la scena
scene("fight", () => { //è stata creata la costante(o l'oggetto) background
    const fightSoundtrack = play("fight soundtrack", {
        loop: true,
        volume: 0.5
    })
    const background=add([ //funzione add per aggiungere gli sprite caricati prima nella scena attraverso un array che contiene i componenti
        sprite("background"),
        scale(2,2.5), //componente scale per gestire la grandezza dello sfondo (larghezz,altezza)
        pos(-600,0)
    ])


//addLevel per gestire i livelli nella scena, in questo caso per gestire il terreno di gioco
    const groundTiles=addLevel([ //viene definita la costante(o l'oggetto) groundTiles
        "","","","","","","","","", //nel primo paragrafo, che è costituito da una stringa, bisogna definire la posizione del terreno attraverso dei simboli scelti a piacere associati allo sprite del terreno
        "d" //in questo caso viene utilizzato il simbolo "d"
    ], {
        tileWidth: 1,
        tileHeight: 16.5,
        tiles: {
            "d": () => [ //viene associata la lettera "d" allo sprite della sabbia(sand)
                sprite("sand"),
                area(), //viene creato attorno all'oggetto, ovvero il terreno di gioco in questo caso, la sua hitbox, ovvero la zona in cui l'oggetto può essere colpito
                body({isStatic: true}) //body per dire che il terreno risponde alla gravità
                //isStatic per dire che il terreno è statico e non è affetto dalla gravità
            ],
        }
    })
    groundTiles.use(scale(4)) //per gestire la grandezza del terreno nello schermo
    //.use è una funzione che viene utilizzata per aggiungere un componente a un oggetto già inizializzato
    groundTiles.use(scale(4))

    const palmtree = background.add([
        sprite("palm tree"),
        pos(400, 40),
    ])
    const palmtree1 = background.add([
        sprite("palm tree"),
        pos(250, 60),
    ])
    const palmtree2 = background.add([
        sprite("palm tree"),
        pos(700, 30),
    ])
    const palmtree3 = background.add([
        sprite("palm tree"),
        pos(850, 70)
    ])

    palmtree.play("palmtree")
    palmtree1.play("palmtree")
    palmtree2.play("palmtree")
    palmtree3.play("palmtree")

//aggiungere un muro invisibile per impedire ai personaggi di andare al di là dello schermo
//MURO INVISIBILE SINISTRO
add([
    rect(16, 720),
    area(),
    body({isStatic: true}),
    pos(-16,0)// -16 per farlo andare ancora più a sinistra dello schermo per "renderlo" invisibile
   ])

//MURO INVISIBILE DESTRO
   add([
    rect(16, 720), //viene creato un rettangolo
    area(),
    body({isStatic: true}),
    pos(1470,0)
   ])
//viene creata una funzione makePlayer attraverso function
function makePlayer(posX, posY, width, height, scaleFactor, id) {
    return add([
        pos(posX, posY),
        scale(scaleFactor),
        area({shape: new Rect(vec2(0), width, height)}), //viene definita l'area con una hitbox attorno al personaggio, stavolta personalizzata, modificando le misure del rettangolo(rect) attraverso la larghezza(width) e la lunghezza(height)
        anchor("center"), //mette il "punto di ancoraggio" al centro (invece che in alto a sinistra che è il default)
        body({stickToPlatform: true}),//per non avere problemi con il personaggio che colpisce il terreno
        z(3),
        id, //in questo modo associato un tag per ogni personaggio
        {
        //IN QUESTA SEZIONE è STATO CREATO UN OGGETTO JAVASCRIPT CHE CONTIENE DELLE PROPRIETà (O ATTRIBUTI COME NELLE CLASSI IN JAVA)
        //queste proprietà sono: "isCurrentlyJumping" per vedere se il personaggio sta saltando o no; la salute e infine gli sprites, che sono le sue varie mosse
        //questo javascript object è DIVERSO dal game object, come "background" e "groundTiles"
            isCurrentlyJumping: false,
            health: 500,
            sprites: {
                idle: "idle-" + id,
                run: "run-" + id,
                jump: "jump-" + id,
                punch: "punch-" + id,
                kick: "kick-" + id,
                blastmove: "blastmove-" + id,
                superattackmove: "super-attack-move-" + id,
                death: "death-" + id,
                superattack: "super-attack-" + id,
                stunned: "stunned-" + id,
                stunned1: "stunned1-" + id,
                damaged: "damaged-" + id,
                damaged1: "damaged-1-" + id,
                damaged2: "damaged-2-" + id,
                damagedmirrored: "damaged-mirrored-" + id,
                damaged1mirrored: "damaged-1-mirrored-" + id,
                damaged2mirrored: "damaged-2-mirrored-" + id,
                teleportationin: "teleportation-in-" + id,
                teleportationout: "teleportation-out-" + id,
                teleportationinmirrored: "teleportation-in-mirrored-" + id,
                teleportationoutmirrored: "teleportation-out-mirrored-" + id,
                aura: "aura-" + id
            }
        }
    ])
}
setGravity(1000) //modificare a seconda delle esigenze la gravità

const player1 = makePlayer(200, 100, 16, 42, 4, "player1") //viene creato un oggetto e viene utilizzata la funzione appena creata, mettendo i parametri
player1.use(sprite(player1.sprites.idle)) //viene aggiunto tramite .use all'oggetto player1 il componente sprite con all'interno lo sprite dell'immagine "goku idle.png"
//sprites si riferisce alla proprietà che abbiamo aggiunto nella funzione "makePlayer" e idle invece è una delle propietà di sprites
player1.play("idle")
onUpdate(() => {
    if(player1.curAnim() == "death") {
        player1.area.shape.width = 35
        player1.area.shape.height = 10
    }
})

//CODICE AURA PLAYER1
let auraEntity = add([
    sprite("aura-player1", {
        anim: "aura"
    }),
    scale(1.5),
    pos(player1.pos),
    anchor("center"),
    z(2), //determina l'ordine su come vanno disposti gli sprite su un livello. Se il valore è superiore verrà posizionato sopra l'immagine con il valore minore
    "aura"
]);
auraEntity.play("aura");
onUpdate(() => {
    auraEntity.pos=player1.pos
    if(player1.curAnim() == "death") {
        destroy(auraEntity)
    }
})


//CODICE COMANDO RUN
let isRunning = false; // Stato della corsa del giocatore
let isRunning1 = false
function run(player, speed, flipPlayer) { 
    if (player.health <= 0) { 
        return;
    }

    // Avvia l'animazione della corsa solo se non è già in corso e il giocatore non sta saltando
    if (!isRunning && player.curAnim() !== "run" && !player.isCurrentlyJumping) { 
        player.use(sprite(player.sprites.run));
        player.play("run");
        isRunning = true; // Imposta lo stato della corsa a true
    }

    player.move(speed, 0); 
    player.flipX = flipPlayer; 
}
function run1(player, speed, flipPlayer) { 
    if (player.health <= 0) { 
        return;
    }

    // Avvia l'animazione della corsa solo se non è già in corso e il giocatore non sta saltando
    if (!isRunning1 && player.curAnim() !== "run" && !player.isCurrentlyJumping) { 
        player.use(sprite(player.sprites.run));
        player.play("run");
        isRunning1 = true; // Imposta lo stato della corsa a true
    }

    player.move(speed, 0); 
    player.flipX = flipPlayer; 
}

function resetPlayerToIdle(player) { 
    player.use(sprite(player.sprites.idle));
    player.play("idle");
    isRunning = false; // Imposta lo stato della corsa a false
}
function resetPlayerToIdle1(player) { 
    player.use(sprite(player.sprites.idle));
    player.play("idle");
    isRunning1 = false; // Imposta lo stato della corsa a false
}

onKeyDown("d", () => {
    if (currentSuperAttack == 0){
        if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
            return
        } else {      
    run(player1, 500, false);
    }
}
});

onKeyRelease("d", () => {
    if (currentSuperAttack == 0) {
        if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
            return
        } else {
    if (player1.health > 0) {
        resetPlayerToIdle(player1);
        player1.flipX = false;
    }
}
    }
});

onKeyDown("a", () => { 
    if (currentSuperAttack == 0){
        if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
            return
        } else {
    run(player1, -500, true);
    }
}
});

onKeyRelease("a", () => {
    if (currentSuperAttack == 0){
        if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
            return
        } else {
    if (player1.health > 0) {
        resetPlayerToIdle(player1);
        player1.flipX = true;
    }
}
    }
});


    //CODICE COMANDO JUMP
    let numJumps = 0;
    let numJumps1 = 0;
    let currentFlip = true
    let currentFlip1 = true
    function makeJump(player) {
        if (player.health <= 0) { //se il personaggio viene ucciso e quindi la sua salute è 0 non può più utilizzare nessuna mossa (in questo caso la mossa jump)
            return
        }
            currentFlip = player.flipX //currnetFlip per determinare verso quale direzione è diretto il salto
            player.jump() //funzione .jump() di Kaboom che permette di portare il personaggio in alto e quindi di farlo saltare (ma senza animazione)
            player.use(sprite(player.sprites.jump))
            player.flipX = currentFlip //per orientare il personaggio nella direzione che aveva prima del salto
            player.play("jump") //avvia l'animazione del salto
            player.isCurrentlyJumping = true
            numJumps++
    }
    function makeJump1(player) {
        if (player.health <= 0) { //se il personaggio viene ucciso e quindi la sua salute è 0 non può più utilizzare nessuna mossa (in questo caso la mossa jump)
            return
        }
            currentFlip1 = player.flipX //currnetFlip per determinare verso quale direzione è diretto il salto
            player.jump() //funzione .jump() di Kaboom che permette di portare il personaggio in alto e quindi di farlo saltare (ma senza animazione)
            player.use(sprite(player.sprites.jump))
            player.flipX = currentFlip1 //per orientare il personaggio nella direzione che aveva prima del salto
            player.play("jump") //avvia l'animazione del salto
            player.isCurrentlyJumping = true
            numJumps1++
    }
    
    function resetAfterJump(player, currentFlip) {
        if (player.health === 0) {
            return
        } else
        if (player.isGrounded() && player.isCurrentlyJumping) { //se il personaggio è a terra (.isGrounded)
            player.isCurrentlyJumping = false //setta la variabile "isCurrentlyJumping" in false
        if (player.curAnim() !== "idle" && currentSuperAttack == 0 && player.curAnim() !== "stunned" && player.health > 0 && player.curAnim() !== "punch" && player.curAnim() !== "kick" && player.curAnim() !== "blastmove") { //se l'animazione che sta andando non è idle 
            if (player.curAnim() !== "stunned1"){
                resetPlayerToIdle(player) //viene riportato il personaggio dopo il salto nella posizione ferma (idle)
                if (currentFlip == true) {
                    player.flipX = true
                } else {
                    player.flipX = false
                }
            }
        }
            numJumps = 0
            play("jump landing sound", {
                volume: 0.2
            })
        }
    }
    function resetAfterJump1(player, currentFlip) {
        if (player.health === 0) {
            return
        } else
        if (player.isGrounded() && player.isCurrentlyJumping) { //se il personaggio è a terra (.isGrounded)
            player.isCurrentlyJumping = false //setta la variabile "isCurrentlyJumping" in false
            if (player.curAnim() !== "idle" && currentSuperAttack1 == 0 && player.curAnim() !== "stunned" && player.health > 0  && player.curAnim() !== "punch" && player.curAnim() !== "kick" && player.curAnim() !== "blastmove") { //se l'animazione che sta andando non è idle 
                if (player.curAnim() !== "stunned1"){
                resetPlayerToIdle1(player) //viene riportato il personaggio dopo il salto nella posizione ferma (idle)
                if (currentFlip == true) {
                    player.flipX = true
                } else {
                    player.flipX = false
                }
            }
        }
            numJumps1 = 0
            play("jump landing sound", {
                volume: 0.2
            })
        }
    }

    let currentJumpScream = 0
    onKeyPress("w", () => {
        if (currentSuperAttack == 0){
            if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
                return
            } else {
        if(numJumps<2){
        makeJump(player1)
        play("jump sound", {
            volume: 0.2
        })
        if(currentJumpScream == 0){
        play("goku jump scream sound",{
            volume: 0.1
        })
        currentJumpScream = 1
    } else {
        play("goku jump scream sound 1",{
            volume: 0.1
        })
        currentJumpScream = 0
    }
        }
    }
}
    })

    player1.onUpdate(() => resetAfterJump(player1, currentFlip)) //funzione .onUpdate() per chiamare la funzione "resetAfterJump" ad ogni frame di salto, in modo che venga sempre controllata questa condizione "if (player.isGrounded() && player.isCurrentlyJumping)"
    

    
    //CODICE COMANDO PUNCH
    let attackmove = 0
    let attackmove1 = 0
    function punch(player, excludedKeys) { //con exclude keys vengono esclusi i tasti in modo che il personaggio attacchi solo quando questi tasti non sono premuti
        if (player.health <= 0) {
            return
        }
    
        for (const key of excludedKeys) { //ciclo che controlla ogni volta se questi tasti sono premuti
            if (isKeyDown(key)) {
                return
            }
        }
        const currentFlip = player.flipX //currnetFlip per determinare verso quale direzione è diretto il pugno
        if (player.curAnim() !== "punch" && player.curAnim() !== "kick") {
            player.use(sprite(player.sprites.punch))
            player.flipX = currentFlip //per orientare il personaggio nella direzione che aveva prima del pugno
            const slashX = player.pos.x + 30 //costanti per gestire l'hitbox del personaggio in modo che si allarghi e rientri nell'hitbox dell'avversario
            const slashXFlipped = player.pos.x - 80
            const slashY = player.pos.y - 20
            
            add([
                rect(45,50),
                area(),
                pos(currentFlip ? slashXFlipped: slashX, slashY), //le costanti create prima rappresentano la posizione del rettangolo creato prima che rappresenta l'hitbox del personaggio quando tira un pugno
                opacity(0),//viene messa l'opacità a zero in modo che non si veda l'hitbox
                player.id + "attackHitbox" //utilizziamo questo tag in modo da distruggere l'hitbox avversaria dopo che è finito il pugno
            ])
            //da notare che playr.play() si trova ancora nell'if iniziale
            player.play("punch", { //viene fatta partire l'animazione del pugno
                onEnd: () => { //onEnd modifica il comportamento del personaggio dopo l'animazione del pugno mantenendolo in posizione da fermo (idle)
                    resetPlayerToIdle(player)
                    player.flipX = currentFlip
                }
            })
            play("air punch sound", {
                volume: 0.5
            })
            attackmove++
        }
    }
    function punch1(player, excludedKeys) { //con exclude keys vengono esclusi i tasti in modo che il personaggio attacchi solo quando questi tasti non sono premuti
        if (player.health <= 0) {
            return
        }
    
        for (const key of excludedKeys) { //ciclo che controlla ogni volta se questi tasti sono premuti
            if (isKeyDown(key)) {
                return
            }
        }
        const currentFlip = player.flipX //currnetFlip per determinare verso quale direzione è diretto il pugno
        if (player.curAnim() !== "punch" && player.curAnim() !== "kick") {
            player.use(sprite(player.sprites.punch))
            player.flipX = currentFlip //per orientare il personaggio nella direzione che aveva prima del pugno
            const slashX = player.pos.x + 30 //costanti per gestire l'hitbox del personaggio in modo che si allarghi e rientri nell'hitbox dell'avversario
            const slashXFlipped = player.pos.x - 80
            const slashY = player.pos.y - 20
            
            add([
                rect(45,50),
                area(),
                pos(currentFlip ? slashXFlipped: slashX, slashY), //le costanti create prima rappresentano la posizione del rettangolo creato prima che rappresenta l'hitbox del personaggio quando tira un pugno
                opacity(0),//viene messa l'opacità a zero in modo che non si veda l'hitbox
                player.id + "attackHitbox" //utilizziamo questo tag in modo da distruggere l'hitbox avversaria dopo che è finito il pugno
            ])
            //da notare che playr.play() si trova ancora nell'if iniziale
            player.play("punch", { //viene fatta partire l'animazione del pugno
                onEnd: () => { //onEnd modifica il comportamento del personaggio dopo l'animazione del pugno mantenendolo in posizione da fermo (idle)
                    resetPlayerToIdle1(player)
                    player.flipX = currentFlip
                }
            })
            play("air punch sound", {
                volume: 0.5
            })
            attackmove1++
        }
    }

    onKeyPress("s", () => { //la differenza che ha onKeyPress con onKeyDown è che il tasto space non può essere mantenuto premuto per spammare pugni, ma ad ogni space premuto viene dato un solo pugno
        if (currentSuperAttack == 0){
            if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
                return
            } else {
        if (attackmove == 0){
        punch(player1, ["a", "d", "w"])
        } else {
            kick(player1, ["a", "d", "w"])
        }
    }
        }
    })

    onKeyRelease("s", () => {
        if (currentSuperAttack == 0){
            if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
                return
            } else {
        destroyAll(player1.id + "attackHitbox")
        }
    }
    })






    //CODICE COMANDO KICK 
    function kick(player, excludedKeys) { //con exclude keys vengono esclusi i tasti in modo che il personaggio attacchi solo quando questi tasti non sono premuti
        if (player.health <= 0) {
            return
        }
    
        for (const key of excludedKeys) { //ciclo che controlla ogni volta se questi tasti sono premuti
            if (isKeyDown(key)) {
                return
            }
        }
    
        const currentFlip = player.flipX //currentFlip per determinare verso quale direzione è diretto il pugno
        if (player.curAnim() !== "kick" && player.curAnim() !== "punch") {
            player.use(sprite(player.sprites.kick))
            player.flipX = currentFlip //per orientare il personaggio nella direzione che aveva prima del pugno
            const slashX = player.pos.x + 30 //costanti per gestire l'hitbox del personaggio in modo che si allarghi e rientri nell'hitbox dell'avversario
            const slashXFlipped = player.pos.x - 80
            const slashY = player.pos.y - 20
            
            add([
                rect(50,80),
                area(),
                pos(currentFlip ? slashXFlipped: slashX, slashY), //le costanti create prima rappresentano la posizione del rettangolo creato prima che rappresenta l'hitbox del personaggio quando tira un pugno
                opacity(0),//viene messa l'opacità a zero in modo che non si veda l'hitbox
                player.id + "attackHitbox" //utilizziamo questo tag in modo da distruggere l'hitbox avversaria dopo che è finito il pugno
            ])
            //da notare che playr.play() si trova ancora nell'if iniziale
            player.play("kick", { //viene fatta partire l'animazione del pugno
                onEnd: () => { //onEnd modifica il comportamento del personaggio dopo l'animazione del pugno mantenendolo in posizione da fermo (idle)
                    resetPlayerToIdle(player)
                    player.flipX = currentFlip
                }
            })
            play("air punch sound", {
                volume: 0.5
            })
            attackmove = 0
        }
    }
    function kick1(player, excludedKeys) { //con exclude keys vengono esclusi i tasti in modo che il personaggio attacchi solo quando questi tasti non sono premuti
        if (player.health <= 0) {
            return
        }
    
        for (const key of excludedKeys) { //ciclo che controlla ogni volta se questi tasti sono premuti
            if (isKeyDown(key)) {
                return
            }
        }
    
        const currentFlip = player.flipX //currentFlip per determinare verso quale direzione è diretto il pugno
        if (player.curAnim() !== "kick" && player.curAnim() !== "punch") {
            player.use(sprite(player.sprites.kick))
            player.flipX = currentFlip //per orientare il personaggio nella direzione che aveva prima del pugno
            const slashX = player.pos.x + 30 //costanti per gestire l'hitbox del personaggio in modo che si allarghi e rientri nell'hitbox dell'avversario
            const slashXFlipped = player.pos.x - 80
            const slashY = player.pos.y - 20
            
            add([
                rect(50,80),
                area(),
                pos(currentFlip ? slashXFlipped: slashX, slashY), //le costanti create prima rappresentano la posizione del rettangolo creato prima che rappresenta l'hitbox del personaggio quando tira un pugno
                opacity(0),//viene messa l'opacità a zero in modo che non si veda l'hitbox
                player.id + "attackHitbox" //utilizziamo questo tag in modo da distruggere l'hitbox avversaria dopo che è finito il pugno
            ])
            //da notare che playr.play() si trova ancora nell'if iniziale
            player.play("kick", { //viene fatta partire l'animazione del pugno
                onEnd: () => { //onEnd modifica il comportamento del personaggio dopo l'animazione del pugno mantenendolo in posizione da fermo (idle)
                    resetPlayerToIdle1(player)
                    player.flipX = currentFlip
                }
            })
            play("air punch sound", {
                volume: 0.5
            }) 
            attackmove1 = 0
        }
    }




    //CODICE COMANDO BLAST
    const BLAST_SPEED = 700;
    onKeyPress("e", () => {
        if (currentSuperAttack == 0){
            if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
                return
            } else {
            if (player1EnergyBar.width >= 25){
        spawnBlast(player1, player1.pos);
        updatePlayer1EnergyBar()
        play("ki blast sound", {
            volume: 0.2
        })
        }
    }
}
      });
    onKeyPress("shift", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
            if (player2EnergyBar.width >= 25){
        spawnBlast1(player2, player2.pos);
        updatePlayer2EnergyBar()
        play("ki blast sound", {
            volume: 0.2
        })
        }
    }
}
      });
      function spawnBlast(player, blastpos) {
        if (player.health <= 0) {
            return
        }
        const currentFlip = player.flipX
        player.use(sprite(player.sprites.blastmove))
        player.flipX = currentFlip
        player.play("blastmove", {
            onEnd: () => {
                resetPlayerToIdle(player)
                player.flipX = currentFlip
            }
        }) 
        if (player.flipX == true) {
          blastpos = blastpos.sub(90, 0);
        } else if (player.flipX == false) {
          blastpos = blastpos.add(90, 0);
        }
        if (player.flipX == false) {
        add([
            sprite("blast"),
            scale(4),
            pos(blastpos),
            area({shape: new Rect(vec2(0), 12, 12)}),
            anchor("center"), //utilizzato al posto del componente "origin()"
            "blast1",
            z(2),
            player.id + "blastHitbox",
          {
            blastSpeed: player.flipX == true ? -1 * BLAST_SPEED : BLAST_SPEED
          }
        ]); } else {
        add([
            sprite("blastmirrored"),
            scale(4),
            pos(blastpos),
            area({shape: new Rect(vec2(0), 12, 12)}),
            anchor("center"), //utilizzato al posto del componente "origin()"
            "blast1",
            z(2),
            player.id + "blastHitbox",
          {
            blastSpeed: player.flipX == true ? -1 * BLAST_SPEED : BLAST_SPEED
          }
        ]); }
      };

      function spawnBlast1(player, blastpos) {
        if (player.health <= 0) {
            return
        }
        const currentFlip = player.flipX
        player.use(sprite(player.sprites.blastmove))
        player.flipX = currentFlip
        player.play("blastmove", {
            onEnd: () => {
                resetPlayerToIdle(player)
                player.flipX = currentFlip
            }
        }) 
        if (player.flipX == true) {
          blastpos = blastpos.sub(90, 0);
        } else if (player.flipX == false) {
          blastpos = blastpos.add(90, 0);
        }
        if (player.flipX == false) {
        add([
            sprite("blast 1"),
            scale(4),
            pos(blastpos),
            area({shape: new Rect(vec2(0), 12, 12)}),
            anchor("center"), //utilizzato al posto del componente "origin()"
            "blast1",
            z(2),
            player.id + "blastHitbox",
          {
            blastSpeed: player.flipX == true ? -1 * BLAST_SPEED : BLAST_SPEED
          }
        ]); } else {
        add([
            sprite("blast 1 mirrored"),
            scale(4),
            pos(blastpos),
            area({shape: new Rect(vec2(0), 12, 12)}),
            anchor("center"), //utilizzato al posto del componente "origin()"
            "blast1",
            z(2),
            player.id + "blastHitbox",
          {
            blastSpeed: player.flipX == true ? -1 * BLAST_SPEED : BLAST_SPEED
          }
        ]); }
      };
    
      onUpdate("blast1", (b) => {
        b.move(b.blastSpeed, 0);
        if ((b.pos.x < 0) || (b.pos.x > 1470)) {
          destroy(b);
        }
      });
      onCollide("blast1", "player2" , (blast, player) => {
        destroy(blast);
      });
      
      onCollide("blast1", "player1" , (blast, player) => {
        destroy(blast);
      });


      //CODICE COMANDO SUPERATTACK
      const SUPERATTACK_SPEED = 0;
      let currentSuperAttack = 0;
      let currentSuperAttack1 = 0;
      let currentDamagedHitbox = 0
      let currentDamagedHitbox1 = 0
      onKeyPress("space", () => {
        if (player1EnergyBar.width >= 400){
            if (currentSuperAttack == 0){
                if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
                    return
                } else {
          spawnSuperAttack(player1, player1.pos);
          currentSuperAttack = 1;
        }
        player1EnergyBar.width = 0;
    }
}
    });
    onKeyPress("backspace", () => {
        if (player2EnergyBar.width >= 400){
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
            spawnSuperAttack1(player2, player2.pos);
            currentSuperAttack1 = 1
          }
          player2EnergyBar.width = 0;
        }
    }
        });
        function spawnSuperAttack(player, superattackpos) {
          if (player.health <= 0) {
              return
          }
          const currentFlip = player.flipX
          player.use(sprite(player.sprites.superattackmove))
          player.flipX = currentFlip
          player.play("superattackmove", {
            onEnd: () => {
                wait(4, () => { // Ritardo aggiunto per far durare più a lungo l'ultimo frame
                    if (player.health > 0){
                    resetPlayerToIdle(player);
                    player.flipX = currentFlip;
                    currentSuperAttack = 0
                    }
                });
            }
        });
        play("kamehameha speak sound", {
            volume: 0.2
        })
        play("kamehameha charge sound", {
            volume: 0.2
        })
          if (player.flipX == true) {
            superattackpos = superattackpos.sub(560, 0);
          } else if (player.flipX == false) {
            superattackpos = superattackpos.add(560, 0);
          }
          if (player.flipX == false) {
        wait(0.7, () => {
          let superAttackEntity = add([
            sprite("super-attack-player1", {
                anim: "superattack"
            }),
            scale(3.9),
            pos(superattackpos),
            area({ shape: new Rect(vec2(0), 260, 43) }),
            anchor("center"),
            z(4),
            player.id + "superattackHitbox",
            {
                blastSpeed: player.flipX == true ? -1 * SUPERATTACK_SPEED : SUPERATTACK_SPEED
            },
            "superattack",
        ]);
    
        // Avvia l'animazione del super attacco per l'entità appena creata
        superAttackEntity.play("superattack");
        onUpdate(() => {
            if (player.flipX == true){
            superAttackEntity.pos = player.pos.sub(560, 0);
            } else {
            superAttackEntity.pos = player.pos.add(560, 0); 
            }
        });
        onUpdate(() => {
            if (player1.health <= 0){
                destroy(superAttackEntity)
            }
        })
        onUpdate(() => {
            if(currentDamagedHitbox1 == 1){
            destroy(superAttackEntity)
        }
        })
        if (currentDamagedHitbox1 == 1){
            currentDamagedHitbox1 = 0
        }
        play("kamehameha sound", {
            volume: 0.2
        })
        wait(4, () => {
            destroy(superAttackEntity);
        });
        })
    } else {
        wait(0.7, () => {
        let superAttackEntity = add([
            sprite("super-attack-mirrored-player1", {
                anim: "superattack"
            }),
            scale(3.9),
            pos(superattackpos),
            area({ shape: new Rect(vec2(0), 260, 43) }),
            anchor("center"),
            z(4),
            player.id + "superattackHitbox",
            {
                blastSpeed: player.flipX == true ? -1 * SUPERATTACK_SPEED : SUPERATTACK_SPEED
            },
            "superattack"
        ]);
        // Avvia l'animazione del super attacco per l'entità appena creata
        superAttackEntity.play("superattack");
        onUpdate(() => {
            if (player.flipX == true){
            superAttackEntity.pos = player.pos.sub(560, 0);
            } else {
            superAttackEntity.pos = player.pos.add(560, 0); 
            }
        });
        onUpdate(() => {
            if (player1.health <= 0){
                destroy(superAttackEntity)
            }
        })
        onUpdate(() => {
            if(currentDamagedHitbox1 == 1){
            destroy(superAttackEntity)
        }
        })
        
        if (currentDamagedHitbox1 == 1){
            currentDamagedHitbox1 = 0
        }
        play("kamehameha sound", {
            volume: 0.2
        })
        wait(4, () => {
            destroy(superAttackEntity);
        });
    })
    }
}



function spawnSuperAttack1(player, superattackpos) {
    if (player.health <= 0) {
        return
    }
    let currentFlip = player.flipX
    player.use(sprite(player.sprites.superattackmove))
    player.flipX = currentFlip
    player.play("superattackmove", {
      onEnd: () => {
          wait(3.2, () => { // Ritardo aggiunto per far durare più a lungo l'ultimo frame
            if (player.health > 0){
              resetPlayerToIdle(player);
              player.flipX = currentFlip;
              currentSuperAttack1 = 0
            }
          });
      }
  });
  play("garlick gun speak sound", {
    volume: 0.2
})
play("garlick gun charge sound", {
    volume: 0.2
})
    if (player.flipX == true) {
      superattackpos = superattackpos.sub(530, 0);
    } else if (player.flipX == false) {
      superattackpos = superattackpos.add(530, 0);
    }
    if (player.flipX == false) {
  wait(0.7, () => {
    let superAttackEntity1 = add([
      sprite("super-attack-player2", {
          anim: "superattack"
      }),
      scale(3.9),
      pos(superattackpos),
      area({ shape: new Rect(vec2(0), 260, 43) }),
      anchor("center"),
      z(4),
      player.id + "superattackHitbox",
      {
          blastSpeed: player.flipX == true ? -1 * SUPERATTACK_SPEED : SUPERATTACK_SPEED
      },
      "superattack"
  ]);

  // Avvia l'animazione del super attacco per l'entità appena creata
  superAttackEntity1.play("superattack");
  onUpdate(() => {
    if (player.flipX == true){
    superAttackEntity1.pos = player.pos.sub(560, 0);
    } else {
    superAttackEntity1.pos = player.pos.add(560, 0); 
    }
});
onUpdate(() => {
    if (player2.health <= 0){
        destroy(superAttackEntity1)
    }
})

onUpdate(() => {
    if(currentDamagedHitbox == 1){
    destroy(superAttackEntity1)
}
})

if (currentDamagedHitbox == 1){
    currentDamagedHitbox = 0
}

play("garlick gun sound", {
    volume: 0.2
})
  wait(4, () => {
      destroy(superAttackEntity1);
  });
  })
} else {
  wait(0.7, () => {
  let superAttackEntity1 = add([
      sprite("super-attack-mirrored-player2", {
          anim: "superattack"
      }),
      scale(3.9),
      pos(superattackpos),
      area({ shape: new Rect(vec2(0), 260, 43) }),
      anchor("center"),
      z(4),
      player.id + "superattackHitbox",
      {
          blastSpeed: player.flipX == true ? -1 * SUPERATTACK_SPEED : SUPERATTACK_SPEED
      },
      "superattack"
  ]);

  // Avvia l'animazione del super attacco per l'entità appena creata
  superAttackEntity1.play("superattack");
  onUpdate(() => {
    if (player.flipX == true){
    superAttackEntity1.pos = player.pos.sub(560, 0);
    } else {
    superAttackEntity1.pos = player.pos.add(560, 0); 
    }
});
onUpdate(() => {
    if (player2.health <= 0){
        destroy(superAttackEntity1)
    }
})
onUpdate(() => {
    if(currentDamagedHitbox == 1){
    destroy(superAttackEntity1)
}
})
if (currentDamagedHitbox == 1){
    currentDamagedHitbox = 0
}

play("garlick gun sound", {
    volume: 0.2
})
  wait(4, () => {
      destroy(superAttackEntity1);
  });
})
}
}

    // CODICE COMANDO TELETRASPORTO
    onKeyPress("q", () => {
        if (currentSuperAttack == 0){
            if (player1.curAnim() == "stunned" || player1.curAnim() == "stunned1"){
                return
            } else {
            if (player1EnergyBar.width >= 50){
                if (player1.flipX == false){
                updatePlayer1EnergyBar1()
                player1.use(sprite(player1.sprites.teleportationin))
                player1.play("teleportationin")
                play("teleport sound", {
                    volume: 0.1
                })
                player1.moveTo(rand(0, width()), rand(0, 550))
                player1.use(sprite(player1.sprites.teleportationout))
                player1.play("teleportationout")
                
                wait(0.5, () => {
                    resetPlayerToIdle(player1)
                })
            } else {
                updatePlayer1EnergyBar1()
                player1.use(sprite(player1.sprites.teleportationinmirrored))
                player1.play("teleportationinmirrored")
                play("teleport sound", {
                    volume: 0.1
                })
                player1.moveTo(rand(0, width()), rand(0, 550))
                player1.use(sprite(player1.sprites.teleportationoutmirrored))
                player1.play("teleportationoutmirrored")
                wait(0.5, () => {
                    resetPlayerToIdle(player1)
                    player1.flipX = true
                })
            }
        }
    }
        }
    });
    onKeyPress("-", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
            if (player2EnergyBar.width >= 50){
                if (player2.flipX == false){
                    updatePlayer2EnergyBar1()
                    player2.use(sprite(player2.sprites.teleportationin))
                    player2.play("teleportationin")
                    play("teleport sound", {
                        volume: 0.1
                    })
                    player2.moveTo(rand(0, width()), rand(0, 550))
                    player2.use(sprite(player2.sprites.teleportationout))
                    player2.play("teleportationout")
                    wait(0.5, () => {
                        resetPlayerToIdle1(player2)
                    })
                } else {
                    updatePlayer2EnergyBar1()
                    player2.use(sprite(player2.sprites.teleportationinmirrored))
                    player2.play("teleportationinmirrored")
                    play("teleport sound", {
                        volume: 0.1
                    })
                    player2.moveTo(rand(0, width()), rand(0, 550))
                    player2.use(sprite(player2.sprites.teleportationoutmirrored))
                    player2.play("teleportationoutmirrored")
                    wait(0.5, () => {
                        resetPlayerToIdle1(player2)
                        player2.flipX = true
                    })
                }
        }
    }
        }
    });




    const player2 = makePlayer(1200, 200, 16, 42, 4, "player2")
    player2.use(sprite(player2.sprites.idle))
    player2.flipX = true //viene orientato il personaggio verso sinistra essendo l'avversario
    onUpdate(() => {
        if(player2.curAnim() == "death") {
            player2.area.shape.width = 35
            player2.area.shape.height = 10
        }
    })

    //CODICE AURA PLAYER2
    let auraEntity1 = add([
        sprite("aura-player1", {
            anim: "aura"
        }),
        scale(1.5),
        pos(player2.pos),
        anchor("center"),
        z(2),
        "aura"
    ]);
    auraEntity1.play("aura");
    onUpdate(() => {
        auraEntity1.pos=player2.pos
        if(player2.curAnim() == "death") {
            destroy(auraEntity1)
        }
    })





    onKeyDown("right", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
        run1(player2, 500, false)
        }
    }
    })
    onKeyRelease("right", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
        if (player2.health > 0) {
            resetPlayerToIdle1(player2)
            player2.flipX = false
        }
    }
}
    })

    onKeyDown("left", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
        run1(player2, -500, true)
        }
    }
    })
    onKeyRelease("left", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
        if (player2.health > 0) {
            resetPlayerToIdle1(player2)
            player2.flipX = true
        }
    }
}
    })

    let currentJumpScream1 = 0
    onKeyPress("up", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
        if(numJumps1<2){
        makeJump1(player2)
        play("jump sound", {
            volume: 0.2
        })
        if(currentJumpScream1 == 0){
            play("vegeta jump scream sound",{
                volume: 0.1
            })
            currentJumpScream1 = 1
        } else {
            play("vegeta jump scream sound 1",{
                volume: 0.1
            })
            currentJumpScream1 = 0
        }
        }
    }
}
    })

    player2.onUpdate(() => resetAfterJump1(player2, currentFlip1))

    onKeyPress("down", () => {
        if (currentSuperAttack1 == 0){
            if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
                return
            } else {
        if (attackmove1 == 0){
        punch1(player2, ["left", "right", "up"])
        } else {
            kick1(player2, ["left", "right", "up"])  
        }
    }
}
    })

    onKeyRelease("down", () => {
        if (player2.curAnim() == "stunned" || player2.curAnim() == "stunned1"){
            return
        } else {
        if (currentSuperAttack1 == 0){
        destroyAll(player2.id + "attackHitbox")
        }
    }
    })

    const counter = add([ //viene creato l'oggetto count che rappresenta il quadrato del conteggio
        rect(100,100),
        pos(center().x-2, center().y-305), //center() per posizionare un oggetto al centro dello schermo. In questo caso viene posizionato al centro solo rispetto all'asse x, mentre rispetto l'asse y viene "alzato" dal centro di 250
        color(10,10,10),
        area(),
        anchor("center")
       ])
    
    const count = counter.add([ //viene creato il conteggio vero e proprio con i numeri aggiunto all'oggetto creato prima "counter"
        text("180"), //text() per mostrare il testo all'interno del parametro. Nel secondo parametro è possibile mettere un oggetto in cui si può definire il font del testo che andiamo a rappresentare (che abbiamo caricato prima)
        area(),
        anchor("center"),
        {
            timeLeft: 180,
        }
    ])

    const winningText = add([
        text("",{
            font: "Round"
        }),
        area(),
        anchor("center"),
        pos(center())
    ])
    
    let gameOver = false //viene creata una variabile globale gameOver, ovvero una variabile a cui si può accedere da qualsiasi parte di codice
    onKeyDown("enter", () => gameOver ? go("fight") : null) //? : è un operatore ternario più compatto e conciso di "if...else". Spiegata in questo modo: "condizione (se gameOver è true)? espressione1 (si verifica go(fight)): espressione2 (altrimenti viene restituito null)"

    function declareWinner(winningText, player1, player2) {
        if (player1.health > 0 && player2.health > 0
            || player1.health <= 0 && player2.health <= 0) {
            winningText.text = "Tie!"
        } else if (player1.health > 0 && player2.health <= 0) {
            winningText.text = "Player 1 won!"
            player2.use(sprite(player2.sprites.death))
            player2.play("death")
            play("death fall sound", {
                volume: 0.2
            })
        } else {
            winningText.text = "Player 2 won!"
            player1.use(sprite(player1.sprites.death))
            player1.play("death")
            play("death fall sound", {
                volume: 0.2
            })
        }
        const message = add([
            text("Press [ Enter ] to Restart the Game", {
                size: 24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(center().x, center().y+100),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"]),
        ])
        message.onStateEnter("flash-up", async () => {
            await tween(
              message.opacity,
              0,
              0.5,
              (opacity) => (message.opacity = opacity),
              easings.linear
            )
            message.enterState("flash-down")
          })
      
          message.onStateEnter("flash-down", async () => {
            await tween(
              message.opacity,
              1,
              0.5,
              (opacity) => (message.opacity = opacity),
              easings.linear
            )
            message.enterState("flash-up")
          })
    }
    //'() =>' è una forma abbreviata di Javascript utilizzata per definire una funzione anonima. È una modalità più concisa per definire le funzioni rispetto alla sintassi tradizionale con la parola chiave 'function'.
    const countInterval = setInterval(() => { //setInterval() funzione di Javascript per eseguire una determinata funzione ad intervalli regolari di tempo
        if (count.timeLeft === 0) { //il primo parametro di 'setInterval' è tutta questa funzione
            clearInterval(countInterval) //clearInterval() funzione di Javascript per fermare l'esecuzione di una funzione che è stata avviata precedentemente con setInterval(). In questo caso per fermare "countInterval", ovvero il conteggio, in modo da evitare che vada sotto lo 0
            declareWinner(winningText, player1, player2)
            gameOver = true //settiamo gameOver a true in modo che si possa premere 'enter' per restartare il gioco
    
            return
        }
        count.timeLeft-- //viene ridotto sempre di più il conteggio
        count.text = count.timeLeft  //viene mostrato il tempo rimanente
    }, 1000) //si può notare che il secondo parametro di 'setInterval' è 1000 ovvero che la funzione appena definita si ripete ogni 1000 millisecondi (1 secondo)
    add([
        sprite("home"),
        scale(0.13),
        pos(center().x-120,center().y-350),
        area(),
        "home"
    ])

    add([
        sprite("restart"),
        scale(0.12),
        pos(center().x+50,center().y-347),
        area(),
        "restart"
    ]) 

    onClick("home", () => 
    go("menu"),
    play("menu sound")
    )

    onClick("home", () => 
    fightSoundtrack.paused = !fightSoundtrack.paused
    )

    onClick("restart", () =>
    go("fight"),
    play("menu sound"))

    onClick("restart", () => 
    fightSoundtrack.paused = !fightSoundtrack.paused
    )




    const player1HealthContainer = add([ //rappresenta solo il contenitore
        rect(500, 70),
        area(),
        outline(5), //outline() crea un contorno al rettangolo
        pos(110, 20),
        color(200,0,0),
        z(0)
       ])
       
    const player1HealthBar = player1HealthContainer.add([ //rappresenta la barra verde all'interno del contenitore 'player1HealthContainer' creato prima che infatti aggiungiamo a quest'ultimo oggetto tramite add()
        rect(498, 65), 
        color(0,180,0),
        pos(498, 70 - 2.5),
        rotate(180), //in modo che la barra verde venga ridotta verso il lato opposto, ovvero verso il quadrato del conteggio 
        z(0)
    ])

    add([
        sprite("health"),
        scale(0.2),
        pos(center().x-700,center().y-370),
        z(1)
    ])

    add([
        sprite("health mirrored"),
        scale(0.2),
        pos(center().x+580,center().y-370),
        z(1)
    ])

    add([
        sprite("stamina mirrored"),
        scale(0.95),
        pos(center().x-765,center().y-335),
        z(1)
    ])
    add([
        sprite("stamina"),
        scale(0.95),
        pos(center().x+510,center().y-335),
        z(1)
    ])


    const player1EnergyContainer = add([ 
        rect(400, 40),
        area(),
        outline(5), 
        pos(110, 110),
        color(255,255,255)
       ])

    const player1EnergyBar = player1EnergyContainer.add([ 
        rect(200, 35), 
        color(228, 208, 10),
        pos(1, 5 - 2.5)
    ])

    function updatePlayer1EnergyBar() {
        if (player1EnergyBar.width > 0){
            player1EnergyBar.width -= 25
        }
    }
    function updatePlayer1EnergyBar1() {
        if (player1EnergyBar.width > 0){
            player1EnergyBar.width -= 50
        }
    }

    function increasePlayer1EnergyBar() {
        if (player1EnergyBar.width < 400){
        player1EnergyBar.width += 10 // Aumenta la larghezza della barra di 10 ogni volta che viene chiamata
        }
    }


    loop(0.5, () => {
        increasePlayer1EnergyBar();
    });


let damagedmove = 0
let currentScream = 0
    player1.onCollide(player2.id + "attackHitbox", () => {
        if (gameOver) {
            return
        } //se gameOver è true lasciamo ai giocatori di muoversi liberamente però senza fare danno
        currentDamagedHitbox1 = 1
        if (player1.flipX == false && damagedmove == 0){
            player1.use(sprite(player1.sprites.damaged))
            player1.play("damaged")
            damagedmove = 1
            play("punch sound", {
                volume: 0.1
            })
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            } 
            wait(0.4, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                }
            })
        } else if (player1.flipX == false && damagedmove == 1){ 
            player1.use(sprite(player1.sprites.damaged1))
            player1.play("damaged1")
            damagedmove = 0
            play("punch sound", {
                volume: 0.1
            })
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            } 
            wait(0.4, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                }
            })
        } else if (player1.flipX == true && damagedmove == 0){
            player1.use(sprite(player1.sprites.damagedmirrored))
            player1.play("damagedmirrored")
            damagedmove = 1
            play("punch sound", {
                volume: 0.1
            })
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            } 
            wait(0.4, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                player1.flipX = true
                }
            })
        } else {
            player1.use(sprite(player1.sprites.damaged1mirrored))
            player1.play("damaged1mirrored")
            damagedmove = 0
            play("punch sound", {
                volume: 0.1
            }) 
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            }
            wait(0.4, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                player1.flipX = true
                }
            })
        }
        
        if (player1.health !== 0) {
            player1.health -= 10 //riduciamo la barra della salute di 50

            //tween() viene utilizzato in modo che la barra della salute venga ridotta in modo 'smooth' senza venir ridotta immediatamente (a scatti)
            tween(player1HealthBar.width, player1.health, 1, (val) => { //il terzo parametro sono i secondi che ci mette la barra a scendere in modo "smooth"
                player1HealthBar.width = val //viene assegnato il nuovo valore della larghezza della barra verde al valore della grandezza della barra verde in quel momento
            }, easings.easeOutSine) //l'ultimo parametro 'easings.easeOutSine' è una delle funzioni di easing di Kaboom.js ed è un tipo di funzione di easing che modifica gradualmente la velocità di un'animazione, rendendola più lenta all'inizio e più veloce verso la fine.
        } 
        
        if (player1.health <= 0) {
            clearInterval(countInterval) //viene fermato il conteggio   
            declareWinner(winningText, player1, player2)
            gameOver = true
        }
    })




    player1.onCollide(player2.id + "blastHitbox", () => {
        if (gameOver) {
            return
        } //se gameOver è true lasciamo ai giocatori di muoversi liberamente però senza fare danno
        currentDamagedHitbox1 = 1
        if (player1.flipX == false){
            player1.use(sprite(player1.sprites.damaged2))
            player1.play("damaged2")
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            }
            wait(0.07, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                }
            })
        } else {
            player1.use(sprite(player1.sprites.damaged2mirrored))
            player1.play("damaged2mirrored")
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            }
            wait(0.07, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                player1.flipX = true
                }
            })
        }
        
        if (player1.health !== 0) {
            player1.health -= 20

            //tween() viene utilizzato in modo che la barra della salute venga ridotta in modo 'smooth' senza venir ridotta immediatamente (a scatti)
            tween(player1HealthBar.width, player1.health, 1, (val) => { //il terzo parametro sono i secondi che ci mette la barra a scendere in modo "smooth"
                player1HealthBar.width = val //viene assegnato il nuovo valore della larghezza della barra verde al valore della grandezza della barra verde in quel momento
            }, easings.easeOutSine) //l'ultimo parametro 'easings.easeOutSine' è una delle funzioni di easing di Kaboom.js ed è un tipo di funzione di easing che modifica gradualmente la velocità di un'animazione, rendendola più lenta all'inizio e più veloce verso la fine.
        } 
        
        if (player1.health <= 0) {
            clearInterval(countInterval) //viene fermato il conteggio   
            declareWinner(winningText, player1, player2)
            gameOver = true
        }
    })




    player1.onCollide(player2.id + "superattackHitbox", () => {
        if (gameOver) {
            return
        } //se gameOver è true lasciamo ai giocatori di muoversi liberamente però senza fare danno
        currentDamagedHitbox1 = 1
        if (player1.flipX == false){
            player1.use(sprite(player1.sprites.stunned))
            player1.play("stunned")
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            }
            wait(6, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                }
            })
        } else {
            player1.use(sprite(player1.sprites.stunned1))
            player1.play("stunned1")
            if(player1.curAnim() == "damaged" || player1.curAnim() == "damaged1" || player1.curAnim() == "damaged2" || player1.curAnim() == "damagedmirrored" || player1.curAnim() == "damaged1mirrored" || player1.curAnim() == "damaged2mirrored"){
                if(currentScream == 0){
                play("goku damaged scream",{
                    volume: 0.1
                })
                currentScream += 1
                } else if(currentScream == 1){
                    play("goku damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream += 1
                } else if(currentScream == 2){
                    play("goku damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream = 0
                }
            }
            wait(6, () => {
                if (player1.health > 0){
                resetPlayerToIdle(player1)
                player1.flipX = true
                }
            })
        }
        
        if (player1.health !== 0) {
            player1.health -= 150 //riduciamo la barra della salute di 50

            //tween() viene utilizzato in modo che la barra della salute venga ridotta in modo 'smooth' senza venir ridotta immediatamente (a scatti)
            tween(player1HealthBar.width, player1.health, 1, (val) => { //il terzo parametro sono i secondi che ci mette la barra a scendere in modo "smooth"
                player1HealthBar.width = val //viene assegnato il nuovo valore della larghezza della barra verde al valore della grandezza della barra verde in quel momento
            }, easings.easeOutSine) //l'ultimo parametro 'easings.easeOutSine' è una delle funzioni di easing di Kaboom.js ed è un tipo di funzione di easing che modifica gradualmente la velocità di un'animazione, rendendola più lenta all'inizio e più veloce verso la fine.
        } 
        
        if (player1.health <= 0) {
            clearInterval(countInterval) //viene fermato il conteggio   
            declareWinner(winningText, player1, player2)
            gameOver = true
        }
    })




    const player2HealthContainer = add([
        rect(500, 70),
        area(),
        outline(5),
        pos(850, 20),
        color(200,0,0)
    ])
       
    const player2HealthBar = player2HealthContainer.add([
        rect(498, 65),
        color(0,180,0),
        pos(2.5, 2.5),
    ])


    const player2EnergyContainer = add([
        rect(400, 40),
        area(),
        outline(5),
        pos(950, 110),
        color(255,255,255),
        z(0)
    ])
       
    const player2EnergyBar = player2EnergyContainer.add([
        rect(200, 35),
        color(228, 208, 10),
        pos(399, 37.5),
        rotate(180),
        z(0)
    ])


    function updatePlayer2EnergyBar() {
        if (player2EnergyBar.width > 0){
            player2EnergyBar.width -= 25
        }
    }
    function updatePlayer2EnergyBar1() {
        if (player2EnergyBar.width > 0){
            player2EnergyBar.width -= 50
        }
    }

    function increasePlayer2EnergyBar() {
        if (player2EnergyBar.width < 400){
        player2EnergyBar.width += 10 // Aumenta la larghezza della barra di 10 ogni volta che viene chiamata
        }
    }

    loop(0.5, () => {
        increasePlayer2EnergyBar();
    });


    let damagedmove1 = 0
    let currentScream1 = 0
    player2.onCollide(player1.id + "attackHitbox", () => {
        if (gameOver) {
            return
        }
        currentDamagedHitbox = 1
        if (player2.flipX == false && damagedmove1 == 0){
            player2.use(sprite(player2.sprites.damaged))
            player2.play("damaged")
            damagedmove1 = 1
            play("punch sound", {
                volume: 0.1
            })
            if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
                if(currentScream1 == 0){
                play("vegeta damaged scream",{
                    volume: 0.1
                })
                currentScream1 += 1
                } else if(currentScream1 == 1){
                    play("vegeta damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream1 += 1
                } else if(currentScream1 == 2){
                    play("vegeta damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream1 = 0
                }
            }
            wait(0.4, () => {
                if (player2.health > 0){
                resetPlayerToIdle(player2)
                }
            })
        } else if (player2.flipX == false && damagedmove1 == 1){ 
            player2.use(sprite(player2.sprites.damaged1))
            player2.play("damaged1")
            damagedmove1 = 0
            play("punch sound", {
                volume: 0.1
            })
            if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
                if(currentScream1 == 0){
                play("vegeta damaged scream",{
                    volume: 0.1
                })
                currentScream1 += 1
                } else if(currentScream1 == 1){
                    play("vegeta damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream1 += 1
                } else if(currentScream1 == 2){
                    play("vegeta damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream1 = 0
                }
            } 
            wait(0.4, () => {
                if (player2.health > 0){
                resetPlayerToIdle(player2)
                }
            })
        } else if (player2.flipX == true && damagedmove1 == 0){
            player2.use(sprite(player2.sprites.damagedmirrored))
            player2.play("damagedmirrored")
            damagedmove1 = 1
            play("punch sound", {
                volume: 0.1
            }) 
            if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
                if(currentScream1 == 0){
                play("vegeta damaged scream",{
                    volume: 0.1
                })
                currentScream1 += 1
                } else if(currentScream1 == 1){
                    play("vegeta damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream1 += 1
                } else if(currentScream1 == 2){
                    play("vegeta damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream1 = 0
                }
            }
            wait(0.4, () => {
                if (player2.health > 0){
                resetPlayerToIdle(player2)
                player2.flipX = true
                }
            })
        } else {
            player2.use(sprite(player2.sprites.damaged1mirrored))
            player2.play("damaged1mirrored")
            damagedmove1 = 0
            play("punch sound", {
                volume: 0.1
            }) 
            if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
                if(currentScream1 == 0){
                play("vegeta damaged scream",{
                    volume: 0.1
                })
                currentScream1 += 1
                } else if(currentScream1 == 1){
                    play("vegeta damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream1 += 1
                } else if(currentScream1 == 2){
                    play("vegeta damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream1 = 0
                }
            }
            wait(0.4, () => {
                if (player2.health > 0){
                resetPlayerToIdle(player2)
                player2.flipX = true
                }
            })
        }
        
        if (player2.health !== 0) {
            player2.health -= 10 
            tween(player2HealthBar.width, player2.health, 1, (val) => { //il terzo parametro sono i secondi che ci mette la barra a scendere in modo "smooth"
                player2HealthBar.width = val //viene assegnato il nuovo valore della larghezza della barra verde al valore della grandezza della barra verde in quel momento
            }, easings.easeOutSine) //l'ultimo parametro 'easings.easeOutSine' è una delle funzioni di easing di Kaboom.js ed è un tipo di funzione di easing che modifica gradualmente la velocità di un'animazione, rendendola più lenta all'inizio e più veloce verso la fine.
        } 
        
        if (player2.health <= 0) {
            clearInterval(countInterval) //viene fermato il conteggio
            declareWinner(winningText, player1, player2)
            gameOver = true
        }
    })




    player2.onCollide(player1.id + "blastHitbox", () => {
        if (gameOver) {
            return
        }
        currentDamagedHitbox = 1
        if (player2.flipX == false){
            player2.use(sprite(player2.sprites.damaged2))
            player2.play("damaged2")
            if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
                if(currentScream1 == 0){
                play("vegeta damaged scream",{
                    volume: 0.1
                })
                currentScream1 += 1
                } else if(currentScream1 == 1){
                    play("vegeta damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream1 += 1
                } else if(currentScream1 == 2){
                    play("vegeta damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream1 = 0
                }
            }
            wait(0.07, () => {
                if (player2.health > 0){
                resetPlayerToIdle(player2)
                }
            })
        } else {
            player2.use(sprite(player2.sprites.damaged2mirrored))
            player2.play("damaged2mirrored")
            if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
                if(currentScream1 == 0){
                play("vegeta damaged scream",{
                    volume: 0.1
                })
                currentScream1 += 1
                } else if(currentScream1 == 1){
                    play("vegeta damaged scream 1",{
                        volume: 0.1
                    })
                    currentScream1 += 1
                } else if(currentScream1 == 2){
                    play("vegeta damaged scream 2",{
                        volume: 0.1
                    })
                    currentScream1 = 0
                }
            }
            wait(0.07, () => {
                if (player2.health > 0){
                resetPlayerToIdle(player2)
                player2.flipX = true
                }
            })
        }
        
        if (player2.health !== 0) {
            player2.health -= 20 
            tween(player2HealthBar.width, player2.health, 1, (val) => { //il terzo parametro sono i secondi che ci mette la barra a scendere in modo "smooth"
                player2HealthBar.width = val //viene assegnato il nuovo valore della larghezza della barra verde al valore della grandezza della barra verde in quel momento
            }, easings.easeOutSine) //l'ultimo parametro 'easings.easeOutSine' è una delle funzioni di easing di Kaboom.js ed è un tipo di funzione di easing che modifica gradualmente la velocità di un'animazione, rendendola più lenta all'inizio e più veloce verso la fine.
        } 
        
        if (player2.health <= 0) {
            clearInterval(countInterval) //viene fermato il conteggio
            declareWinner(winningText, player1, player2)
            gameOver = true
        }
    })




    player2.onCollide(player1.id + "superattackHitbox", () => {
        if (gameOver) {
            return
        }
        currentDamagedHitbox = 1
        if (player2.flipX == false){
        player2.use(sprite(player2.sprites.stunned))
        player2.play("stunned")
        if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
            if(currentScream1 == 0){
            play("vegeta damaged scream",{
                volume: 0.1
            })
            currentScream1 += 1
            } else if(currentScream1 == 1){
                play("vegeta damaged scream 1",{
                    volume: 0.1
                })
                currentScream1 += 1
            } else if(currentScream1 == 2){
                play("vegeta damaged scream 2",{
                    volume: 0.1
                })
                currentScream1 = 0
            }
        }
        wait(6, () => {
            if (player2.health > 0){
            resetPlayerToIdle(player2)
            }
        })
    } else {
        player2.use(sprite(player2.sprites.stunned1))
        player2.play("stunned1")
        if(player2.curAnim() == "damaged" || player2.curAnim() == "damaged1" || player2.curAnim() == "damaged2" || player2.curAnim() == "damagedmirrored" || player2.curAnim() == "damaged1mirrored" || player2.curAnim() == "damaged2mirrored"){
            if(currentScream1 == 0){
            play("vegeta damaged scream",{
                volume: 0.1
            })
            currentScream1 += 1
            } else if(currentScream1 == 1){
                play("vegeta damaged scream 1",{
                    volume: 0.1
                })
                currentScream1 += 1
            } else if(currentScream1 == 2){
                play("vegeta damaged scream 2",{
                    volume: 0.1
                })
                currentScream1 = 0
            }
        }
        wait(6, () => {
            if (player2.health > 0){
            resetPlayerToIdle(player2)
            player2.flipX = true
            }
        })
    }
        
        if (player2.health !== 0) {
            player2.health -= 150 
            tween(player2HealthBar.width, player2.health, 1, (val) => { //il terzo parametro sono i secondi che ci mette la barra a scendere in modo "smooth"
                player2HealthBar.width = val //viene assegnato il nuovo valore della larghezza della barra verde al valore della grandezza della barra verde in quel momento
            }, easings.easeOutSine) //l'ultimo parametro 'easings.easeOutSine' è una delle funzioni di easing di Kaboom.js ed è un tipo di funzione di easing che modifica gradualmente la velocità di un'animazione, rendendola più lenta all'inizio e più veloce verso la fine.
        } 
        
        if (player2.health <= 0) {
            clearInterval(countInterval) //viene fermato il conteggio
            declareWinner(winningText, player1, player2)
            gameOver = true
        }
    })



})

let menuSoundtrack = 0
scene("menu", () => {
    menuSoundtrack = play("menu soundtrack", {
        loop: true,
        volume: 0.5
    })
    const background=add([
        sprite("menu"),
        scale(0.8,0.7), 
        pos(0,0)
    ])


    add([
        text("Il Cap  lav  r  ", {
            size: 100,
            font: "Round"
        }),
        pos(center().x-380,center().y-300),
        color(255,215,0)
    ])


    add([
        sprite("dragon ball 1"),
        pos(center().x-50,center().y-300),
        scale(0.4)
    ])

    add([
        sprite("dragon ball 2"),
        pos(center().x+200,center().y-300),
        scale(0.4)
    ])


    add([
        sprite("dragon ball 3"),
        pos(center().x+330,center().y-300),
        scale(0.4)
    ])

    const message = add([
        text("Press [ Enter ] to Start Game", {
            size: 24,
            font: "Round"
        }),
        color(255,215,0),
        area(),
        anchor("center"),
        pos(center().x, center().y),
        opacity(),
        state("flash-up", ["flash-up", "flash-down"]),
    ])
    message.onStateEnter("flash-up", async () => {
        await tween(
          message.opacity,
          0,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-down")
      })
  
      message.onStateEnter("flash-down", async () => {
        await tween(
          message.opacity,
          1,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-up")
      })

      onKeyPress("enter", () => {
        go("controls")
        play("menu sound")
      })
      onClick(() =>
      go("controls"),
      play("menu sound")
      )
})






scene("controls", () => {
    const background=add([
        sprite("menu"),
        scale(0.8,0.7), 
        pos(0,0)
    ])

    const message = add([
        text("Press [ Enter ] to Start Game", {
            size: 24,
            font: "Round"
        }),
        area(),
        color(255,215,0),
        anchor("center"),
        pos(center().x, center().y),
        opacity(),
        state("flash-up", ["flash-up", "flash-down"]),
    ])
    message.onStateEnter("flash-up", async () => {
        await tween(
          message.opacity,
          0,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-down")
      })
  
      message.onStateEnter("flash-down", async () => {
        await tween(
          message.opacity,
          1,
          0.5,
          (opacity) => (message.opacity = opacity),
          easings.linear
        )
        message.enterState("flash-up")
      })

      add([
        text("Controls", {
            size: 50,
            font: "Round"
        }),
        area(),
        color(255,215,0),
        anchor("center"),
        pos(center().x, center().y-250),
      ])

      add([
        text("Player 1", {
            size: 40,
            font: "Round"
        }),
        area(),
        color(255,215,0),
        anchor("center"),
        pos(center().x-390, center().y-190),
      ])

      add([
        text("Player 2", {
            size: 40,
            font: "Round"
        }),
        color(255,215,0),
        area(),
        anchor("center"),
        pos(center().x+400, center().y-190),
      ])

      add([sprite("W"), pos(center().x-450, center().y-170)])
      add([sprite("A"), pos(center().x-570, center().y-60)])
      add([sprite("S"), pos(center().x-450, center().y-60)])
      add([sprite("D"), pos(center().x-330, center().y-60)])
      add([sprite("E"), pos(center().x-570, center().y+65)])
      add([sprite("Q"), pos(center().x-330, center().y+65)])
      add([sprite("space"), pos(center().x-450, center().y+65)])
      add([sprite("up"), pos(center().x+350, center().y-170)])
      add([sprite("down"), pos(center().x+350, center().y-60)])
      add([sprite("left"), pos(center().x+230, center().y-60)])
      add([sprite("right"), pos(center().x+470, center().y-60)])
      add([sprite("shift"), pos(center().x+230, center().y+65)])
      add([sprite("minus"), pos(center().x+470, center().y+65)])
      add([sprite("backspace"), pos(center().x+350, center().y+65)])
      add([
        text("Jump", { font: "Round", size: 24 }),
        pos(center().x-350, center().y-130),
        color(255,215,0),
    ])
    
    add([
        text("Left", { font: "Round", size: 24 }),
        pos(center().x-550, center().y+35),
        color(255,215,0),
    ])

    add([
        text("Right", { font: "Round", size: 24 }),
        pos(center().x-318, center().y+35),
        color(255,215,0),
      ])

    add([
        text("Attack", { font: "Round", size: 24 }),
        pos(center().x-445, center().y+35),
        color(255,215,0),
      ])

      add([
        text("Blast", { font: "Round", size: 24 }),
        pos(center().x-555, center().y+160),
        color(255,215,0),
      ])
      add([
        text("Super", { font: "Round", size: 24 }),
        pos(center().x-438, center().y+160),
        color(255,215,0),
      ])
      add([
        text("Attack", { font: "Round", size: 24 }),
        pos(center().x-445, center().y+190),
        color(255,215,0),
      ])
      add([
        text("Teleport", { font: "Round", size: 24 }),
        pos(center().x-335, center().y+160),
        color(255,215,0),
      ])



      add([
        text("Jump", { font: "Round", size: 24 }),
        pos(center().x+450, center().y-130),
        color(255,215,0),
    ])
    
    add([
        text("Left", { font: "Round", size: 24 }),
        pos(center().x+250, center().y+35),
        color(255,215,0),
    ])

    add([
        text("Right", { font: "Round", size: 24 }),
        pos(center().x+482, center().y+35),
        color(255,215,0),
      ])

    add([
        text("Attack", { font: "Round", size: 24 }),
        pos(center().x+355, center().y+35),
        color(255,215,0),
      ])

      add([
        text("Blast", { font: "Round", size: 24 }),
        pos(center().x+245, center().y+160),
        color(255,215,0),
      ])
      add([
        text("Super", { font: "Round", size: 24 }),
        pos(center().x+362, center().y+160),
        color(255,215,0),
      ])
      add([
        text("Attack", { font: "Round", size: 24 }),
        pos(center().x+355, center().y+190),
        color(255,215,0),
      ])
      add([
        text("Teleport", { font: "Round", size: 24 }),
        pos(center().x+465, center().y+160),
        color(255,215,0),
      ])

      onKeyPress("enter", () => {
        go("fight")
        play("menu sound")
      })
      onClick(() =>
      go("fight"),
      play("menu sound"),
      )

      onClick(() =>
      menuSoundtrack.paused = !menuSoundtrack.paused
      )
})

go("menu") //fa partire la scena che ha per nome l'etichetta "menu"