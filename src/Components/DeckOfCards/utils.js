// ---<Pokemons>---
import pikachu from '../../assets/pokemon/pikachu.png'
import bullbasaur from '../../assets/pokemon/bullbasaur.png'
import charmander from '../../assets/pokemon/charmander.png'
import jigglypuff from '../../assets/pokemon/jigglypuff.png'
import meowth from '../../assets/pokemon/meowth.png'
import psyduck from '../../assets/pokemon/psyduck.png'
import snorlax from '../../assets/pokemon/snorlax.png'
import squirtle from '../../assets/pokemon/squirtle.png'
import abra from '../../assets/pokemon/abra.png'
import bellsprout from '../../assets/pokemon/bellsprout.png'
import caterpie from '../../assets/pokemon/caterpie.png'
import dratini from '../../assets/pokemon/dratini.png'
import eevee from '../../assets/pokemon/eevee.png'
import mankey from '../../assets/pokemon/mankey.png'
import pidgey from '../../assets/pokemon/pidgey.png'
import venonat from '../../assets/pokemon/venonat.png'
import weedle from '../../assets/pokemon/weedle.png'
import zubat from '../../assets/pokemon/zubat.png'
import rattata from '../../assets/pokemon/rattata.png'
import superball from '../../assets/pokemon/superball.png'
import pokebola from '../../assets/pokemon/pokebola.png'
import ultraBola from '../../assets/pokemon/ultraBola.png'
import huevo from '../../assets/pokemon/huevo.png'
import huevoAfortunado from '../../assets/pokemon/huevoAfortunado.png'
import maullar from '../../assets/pokemon/maullar.png'

// ---<Animal>---
import abeja from '../../assets/animals/abeja.png'
import arana from '../../assets/animals/arana.png'
import ballena from '../../assets/animals/ballena.png'
import bufalo from '../../assets/animals/bufalo.png'
import buho from '../../assets/animals/buho.png'
import cangrejo from '../../assets/animals/cangrejo.png'
import cebra from '../../assets/animals/cebra.png'
import conejo from '../../assets/animals/conejo.png'
import elefante from '../../assets/animals/elefante.png'
import flamenco from '../../assets/animals/flamenco.png'
import gorila from '../../assets/animals/gorila.png'
import leon from '../../assets/animals/leon.png'
import loro from '../../assets/animals/loro.png'
import mantarraya from '../../assets/animals/mantarraya.png'
import mariquita from '../../assets/animals/mariquita.png'
import morsa from '../../assets/animals/morsa.png'
import panda from '../../assets/animals/panda.png'
import pezPayaso from '../../assets/animals/pezPayaso.png'
import pinonero from '../../assets/animals/pinonero.png'
import rana from '../../assets/animals/rana.png'
import raton from '../../assets/animals/raton.png'
import rinoceronte from '../../assets/animals/rinoceronte.png'
import serpiente from '../../assets/animals/serpiente.png'
import zorro from '../../assets/animals/zorro.png'
import mariposa from '../../assets/animals/mariposa.png'
import tiburon from '../../assets/animals/tiburon.png'

// ---<Tools>---
import axe from '../../assets/tools/axe.png'
import caliper from '../../assets/tools/caliper.png'
import circularSaw from '../../assets/tools/circularSaw.png'
import circularSawS from '../../assets/tools/circularSawS.png'
import clamp from '../../assets/tools/clamp.png'
import clampM from '../../assets/tools/clampM.png'
import drill from '../../assets/tools/drill.png'
import drillingMachine from '../../assets/tools/drillingMachine.png'
import grinder from '../../assets/tools/grinder.png'
import grooveJointPliers from '../../assets/tools/grooveJointPliers.png'
import hammer from '../../assets/tools/hammer.png'
import handSaw from '../../assets/tools/handSaw.png'
import hydraulicBreaker from '../../assets/tools/hydraulicBreaker.png'
import jigsaw from '../../assets/tools/jigsaw.png'
import measureTape from '../../assets/tools/measureTape.png'
import pipeWrench from '../../assets/tools/pipeWrench.png'
import plierU from '../../assets/tools/plierU.png'
import ruler from '../../assets/tools/ruler.png'
import screwdriver from '../../assets/tools/screwdriver.png'
import screwdriverP from '../../assets/tools/screwdriverP.png'
import sledgehammer from '../../assets/tools/sledgehammer.png'
import soldering from '../../assets/tools/soldering.png'
import spanner from '../../assets/tools/spanner.png'
import spatula from '../../assets/tools/spatula.png'
import wrench from '../../assets/tools/wrench.png'
import chisel from '../../assets/tools/chisel.png'

// ---<Export Function>---
export default () => [
        easy_p, medium_p, hard_p, expert_p,
        easy_a, medium_a, hard_a, expert_a,
        easy_t, medium_t, hard_t, expert_t,
    ]

// ---<Arrays of Info>---    
const easy_p=[
    pikachu,
    bullbasaur,
    charmander,
    jigglypuff,
    meowth,
    psyduck,
    abra,
    squirtle
]

const easy_a=[
    leon,
    rana,
    conejo,
    cangrejo,
    zorro,
    pinonero,
    buho,
    elefante
]

const easy_t=[
    plierU,
    hammer,
    handSaw,
    screwdriver,
    circularSaw,
    drill,
    grinder,
    caliper,
]

const medium_p=[
    pikachu,
    bullbasaur,
    charmander,
    jigglypuff,
    meowth,
    psyduck,
    abra,
    squirtle,
    bellsprout,
    caterpie,
    dratini,
    eevee,
    mankey,
    pidgey    
]

const medium_a=[
    leon,
    rana,
    mariquita,
    cangrejo,
    zorro,
    pinonero,
    buho,
    elefante,
    mariposa,
    pezPayaso,
    panda,
    raton,
    serpiente,
    abeja
]

const medium_t=[
    plierU,
    hammer,
    handSaw,
    screwdriver,
    circularSaw,
    drill,
    grinder,
    caliper,
    axe,
    clamp,
    measureTape,
    spatula,
    spanner,
    wrench,
]

const hard_p=[
    pikachu,
    bullbasaur,
    charmander,
    jigglypuff,
    meowth,
    psyduck,
    abra,
    squirtle,
    bellsprout,
    caterpie,
    dratini,
    eevee,
    mankey,
    pidgey,
    rattata,
    snorlax,
    venonat,
    zubat,
]

const hard_a=[
    leon,
    rana,
    mariquita,
    cangrejo,
    zorro,
    pinonero,
    buho,
    elefante,
    mariposa,
    pezPayaso,
    panda,
    raton,
    serpiente,
    abeja,
    arana,
    bufalo,
    ballena,
    morsa
]

const hard_t=[
    plierU,
    hammer,
    handSaw,
    screwdriver,
    circularSaw,
    drill,
    grinder,
    caliper,
    axe,
    clamp,
    measureTape,
    spatula,
    spanner,
    wrench,
    screwdriverP,
    soldering,
    drillingMachine,
    hydraulicBreaker
]

const expert_p=[
    pikachu,
    bullbasaur,
    charmander,
    jigglypuff,
    meowth,
    psyduck,
    abra,
    squirtle,
    bellsprout,
    caterpie,
    dratini,
    eevee,
    mankey,
    pidgey,
    rattata,
    snorlax,
    venonat,
    weedle,
    zubat,
    pokebola,
    superball,
    ultraBola,
    huevo,
    huevoAfortunado,
    maullar
]

const expert_a=[
    leon,
    rana,
    mariquita,
    cangrejo,
    zorro,
    pinonero,
    buho,
    elefante,
    mariposa,
    pezPayaso,
    panda,
    raton,
    serpiente,
    abeja,
    arana,
    bufalo,
    ballena,
    morsa,
    conejo,
    rinoceronte,
    mantarraya,
    loro,
    flamenco,
    cebra,
    gorila
]

const expert_t=[
    plierU,
    hammer,
    handSaw,
    screwdriver,
    circularSaw,
    drill,
    grinder,
    caliper,
    axe,
    clamp,
    measureTape,
    spatula,
    spanner,
    wrench,
    screwdriverP,
    soldering,
    drillingMachine,
    hydraulicBreaker,
    sledgehammer,
    circularSawS,
    clampM,
    grooveJointPliers,
    jigsaw,
    pipeWrench,
    ruler,
]