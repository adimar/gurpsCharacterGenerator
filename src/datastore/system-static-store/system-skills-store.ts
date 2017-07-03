
import {strEnum} from "../../helpers/str-enum";
import {AttributeIdConstTypes} from "./system-attributes-store";
import {AggregateDataStore} from "../aggregate-datastore";
import {SystemDataStore} from "./system-data-store";
export const SkillDifficultyConsts = strEnum(["E", "A", "H", "VH"]);
export type SkillDifficultyConstsTypes = keyof typeof SkillDifficultyConsts;



type Skill = {
    name: string;
    attributeId: AttributeIdConstTypes;
    difficulty: SkillDifficultyConstsTypes
}

type SkillListStore = { [skillId: string]: Skill };



const SystemSkillsListStoreInitialState: SkillListStore = {
    animalHandling:{ name:"Animal Handling",attributeId:"iq",difficulty:"A"},
    anthropology:{ name:"Anthropology",attributeId:"iq",difficulty:"H"},
    areaKnowledge:{ name:"Area Knowledge",attributeId:"iq",difficulty:"E"},
    armoury:{ name:"Armoury",attributeId:"iq",difficulty:"A"},
    artillery:{ name:"Artillery",attributeId:"iq",difficulty:"A"},
    artist:{ name:"Artist",attributeId:"iq",difficulty:"H"},
    beamWeapons:{ name:"Beam Weapons",attributeId:"dx",difficulty:"E"},
    bioengineering:{ name:"Bioengineering",attributeId:"iq",difficulty:"H"},
    biology:{ name:"Biology",attributeId:"iq",difficulty:"VH"},
    boating:{ name:"Boating",attributeId:"dx",difficulty:"A"},
    connoisseur:{ name:"Connoisseur",attributeId:"iq",difficulty:"A"},
    currentAffairs:{ name:"Current Affairs",attributeId:"iq",difficulty:"E"},
    disguise:{ name:"Disguise",attributeId:"iq",difficulty:"A"},
    driving:{ name:"Driving",attributeId:"dx",difficulty:"A"},
    electronicsOperation:{ name:"Electronics Operation",attributeId:"iq",difficulty:"A"},
    electronicsRepair:{ name:"Electronics Repair",attributeId:"iq",difficulty:"A"},
    engineer:{ name:"Engineer",attributeId:"iq",difficulty:"H"},
    expertSkill:{ name:"Expert Skill",attributeId:"iq",difficulty:"H"},
    explosives:{ name:"Explosives",attributeId:"iq",difficulty:"A"},
    fastDraw:{ name:"Fast-Draw",attributeId:"dx",difficulty:"E"},
    fortuneTelling:{ name:"Fortune-Telling",attributeId:"iq",difficulty:"A"},
    games:{ name:"Games",attributeId:"iq",difficulty:"E"},
    geography:{ name:"Geography",attributeId:"iq",difficulty:"H"},
    geology:{ name:"Geology",attributeId:"iq",difficulty:"H"},
    groupPerformance:{ name:"Group Performance",attributeId:"iq",difficulty:"A"},
    gunner:{ name:"Gunner",attributeId:"dx",difficulty:"E"},
    gunsPistol:{ name:"Guns/Pistol",attributeId:"dx",difficulty:"E"},
    gunsRifle:{ name:"Guns/Rifle",attributeId:"dx",difficulty:"E"},
    hazardousMaterials:{ name:"Hazardous Materials",attributeId:"iq",difficulty:"A"},
    hiddenLore:{ name:"Hidden Lore",attributeId:"iq",difficulty:"A"},
    history:{ name:"History",attributeId:"iq",difficulty:"H"},
    innateAttack:{ name:"Innate Attack",attributeId:"dx",difficulty:"E"},
    law:{ name:"Law",attributeId:"iq",difficulty:"H"},
    liquidProjector:{ name:"Liquid Projector",attributeId:"dx",difficulty:"E"},
    mathematics:{ name:"Mathematics",attributeId:"iq",difficulty:"H"},
    mechanic:{ name:"Mechanic",attributeId:"iq",difficulty:"A"},
    meteorology:{ name:"Meteorology",attributeId:"iq",difficulty:"A"},
    mimicry:{ name:"Mimicry",attributeId:"iq",difficulty:"H"},
    musicalInstrument:{ name:"Musical Instrument",attributeId:"iq",difficulty:"H"},
    naturalist:{ name:"Naturalist",attributeId:"iq",difficulty:"H"},
    navigation:{ name:"Navigation",attributeId:"iq",difficulty:"A"},
    paleontology:{ name:"Paleontology",attributeId:"iq",difficulty:"H"},
    pharmacy:{ name:"Pharmacy",attributeId:"iq",difficulty:"H"},
    philosophy:{ name:"Philosophy",attributeId:"iq",difficulty:"H"},
    physiology:{ name:"Physiology",attributeId:"iq",difficulty:"H"},
    piloting:{ name:"Piloting",attributeId:"dx",difficulty:"A"},
    religiousRitual:{ name:"Religious Ritual",attributeId:"iq",difficulty:"H"},
    riding:{ name:"Riding",attributeId:"dx",difficulty:"A"},
    ritualMagic:{ name:"Ritual Magic",attributeId:"iq",difficulty:"VH"},
    savoirFaire:{ name:"Savoir-Faire",attributeId:"iq",difficulty:"E"},
    shield:{ name:"Shield",attributeId:"dx",difficulty:"E"},
    shipHandling:{ name:"Shiphandling",attributeId:"iq",difficulty:"H"},
    smith:{ name:"Smith",attributeId:"iq",difficulty:"A"},
    strategy:{ name:"Strategy",attributeId:"iq",difficulty:"H"},
    submarine:{ name:"Submarine",attributeId:"dx",difficulty:"A"},
    survival:{ name:"Survival",attributeId:"per",difficulty:"A"},
    symbolDrawing:{ name:"Symbol Drawing",attributeId:"iq",difficulty:"H"},
    teamster:{ name:"Teamster",attributeId:"iq",difficulty:"A"},
    theology:{ name:"Theology",attributeId:"iq",difficulty:"H"},
    thrownWeapon:{ name:"Thrown Weapon",attributeId:"dx",difficulty:"E"},
    accounting:{ name:"Accounting",attributeId:"iq",difficulty:"H"},
    acrobatics:{ name:"Acrobatics",attributeId:"dx",difficulty:"H"},
    acting:{ name:"Acting",attributeId:"iq",difficulty:"A"},
    administration:{ name:"Administration",attributeId:"iq",difficulty:"A"},
    aerobatics:{ name:"Aerobatics",attributeId:"dx",difficulty:"H"},
    airshipman:{ name:"Airshipman",attributeId:"iq",difficulty:"E"},
    alchemy:{ name:"Alchemy",attributeId:"iq",difficulty:"VH"},
    aquabatics:{ name:"Aquabatics",attributeId:"dx",difficulty:"H"},
    archaeology:{ name:"Archaeology",attributeId:"iq",difficulty:"H"},
    architecture:{ name:"Architecture",attributeId:"iq",difficulty:"A"},
    astronomy:{ name:"Astronomy",attributeId:"iq",difficulty:"H"},
    autohypnosis:{ name:"Autohypnosis",attributeId:"will",difficulty:"H"},
    axeMace:{ name:"Axe/Mace",attributeId:"dx",difficulty:"A"},
    battlesuit:{ name:"Battlesuit",attributeId:"dx",difficulty:"A"},
    bicycling:{ name:"Bicycling",attributeId:"dx",difficulty:"E"},
    blindFighting:{ name:"Blind Fighting",attributeId:"per",difficulty:"VH"},
    blowpipe:{ name:"Blowpipe",attributeId:"dx",difficulty:"H"},
    bodyControl:{ name:"Body Control",attributeId:"ht",difficulty:"VH"},
    bodyLanguage:{ name:"Body Language",attributeId:"per",difficulty:"A"},
    bodySense:{ name:"Body Sense",attributeId:"dx",difficulty:"H"},
    bolas:{ name:"Bolas",attributeId:"dx",difficulty:"A"},
    bow:{ name:"Bow",attributeId:"dx",difficulty:"A"},
    boxing:{ name:"Boxing",attributeId:"dx",difficulty:"A"},
    brainHacking:{ name:"Brain Hacking",attributeId:"iq",difficulty:"H"},
    brainwashing:{ name:"Brainwashing",attributeId:"iq",difficulty:"H"},
    brawling:{ name:"Brawling",attributeId:"dx",difficulty:"E"},
    breakingBlow:{ name:"Breaking Blow",attributeId:"iq",difficulty:"H"},
    breathControl:{ name:"Breath Control",attributeId:"ht",difficulty:"H"},
    broadsword:{ name:"Broadsword",attributeId:"dx",difficulty:"A"},
    camouflage:{ name:"Camouflage",attributeId:"iq",difficulty:"E"},
    captivate:{ name:"Captivate",attributeId:"will",difficulty:"H"},
    carousing:{ name:"Carousing",attributeId:"ht",difficulty:"E"},
    carpentry:{ name:"Carpentry",attributeId:"iq",difficulty:"E"},
    cartography:{ name:"Cartography",attributeId:"iq",difficulty:"A"},
    chemistry:{ name:"Chemistry",attributeId:"iq",difficulty:"H"},
    climbing:{ name:"Climbing",attributeId:"dx",difficulty:"A"},
    cloak:{ name:"Cloak",attributeId:"dx",difficulty:"A"},
    computerHacking:{ name:"Computer Hacking",attributeId:"iq",difficulty:"VH"},
    computerOperation:{ name:"Computer Operation",attributeId:"iq",difficulty:"E"},
    computerProgramming:{ name:"Computer Programming",attributeId:"iq",difficulty:"H"},
    cooking:{ name:"Cooking",attributeId:"iq",difficulty:"A"},
    counterfeiting:{ name:"Counterfeiting",attributeId:"iq",difficulty:"H"},
    crewman:{ name:"Crewman",attributeId:"iq",difficulty:"E"},
    criminology:{ name:"Criminology",attributeId:"iq",difficulty:"A"},
    crossbow:{ name:"Crossbow",attributeId:"dx",difficulty:"E"},
    cryptography:{ name:"Cryptography",attributeId:"iq",difficulty:"H"},
    dancing:{ name:"Dancing",attributeId:"dx",difficulty:"A"},
    detectLies:{ name:"Detect Lies",attributeId:"per",difficulty:"H"},
    diagnosis:{ name:"Diagnosis",attributeId:"iq",difficulty:"H"},
    diplomacy:{ name:"Diplomacy",attributeId:"iq",difficulty:"H"},
    divingSuit:{ name:"Diving Suit",attributeId:"dx",difficulty:"A"},
    dreaming:{ name:"Dreaming",attributeId:"will",difficulty:"H"},
    dropping:{ name:"Dropping",attributeId:"dx",difficulty:"A"},
    economics:{ name:"Economics",attributeId:"iq",difficulty:"H"},
    electrician:{ name:"Electrician",attributeId:"iq",difficulty:"A"},
    enthrallment:{ name:"Enthrallment",attributeId:"will",difficulty:"H"},
    environmentSuit:{ name:"Environment Suit",attributeId:"dx",difficulty:"A"},
    eroticArt:{ name:"Erotic Art",attributeId:"dx",difficulty:"A"},
    escape:{ name:"Escape",attributeId:"dx",difficulty:"H"},
    esotericMedicine:{ name:"Esoteric Medicine",attributeId:"per",difficulty:"H"},
    exorcism:{ name:"Exorcism",attributeId:"will",difficulty:"H"},
    falconry:{ name:"Falconry",attributeId:"iq",difficulty:"A"},
    farming:{ name:"Farming",attributeId:"iq",difficulty:"A"},
    fastTalk:{ name:"Fast-Talk",attributeId:"iq",difficulty:"A"},
    filch:{ name:"Filch",attributeId:"dx",difficulty:"A"},
    finance:{ name:"Finance",attributeId:"iq",difficulty:"H"},
    fireEating:{ name:"Fire Eating",attributeId:"dx",difficulty:"A"},
    firstAid:{ name:"First Aid",attributeId:"iq",difficulty:"E"},
    fishing:{ name:"Fishing",attributeId:"per",difficulty:"E"},
    flail:{ name:"Flail",attributeId:"dx",difficulty:"H"},
    flight:{ name:"Flight",attributeId:"ht",difficulty:"A"},
    flyingLeap:{ name:"Flying Leap",attributeId:"iq",difficulty:"H"},
    forceSword:{ name:"Force Sword",attributeId:"dx",difficulty:"A"},
    forceWhip:{ name:"Force Whip",attributeId:"dx",difficulty:"A"},
    forcedEntry:{ name:"Forced Entry",attributeId:"dx",difficulty:"E"},
    forensics:{ name:"Forensics",attributeId:"iq",difficulty:"H"},
    forgery:{ name:"Forgery",attributeId:"iq",difficulty:"H"},
    forwardObserver:{ name:"Forward Observer",attributeId:"iq",difficulty:"A"},
    freeFall:{ name:"Free Fall",attributeId:"dx",difficulty:"A"},
    freightHandling:{ name:"Freight Handling",attributeId:"iq",difficulty:"A"},
    gambling:{ name:"Gambling",attributeId:"iq",difficulty:"A"},
    gardening:{ name:"Gardening",attributeId:"iq",difficulty:"E"},
    garrote:{ name:"Garrote",attributeId:"dx",difficulty:"E"},
    gesture:{ name:"Gesture",attributeId:"iq",difficulty:"E"},
    heraldry:{ name:"Heraldry",attributeId:"iq",difficulty:"A"},
    herbLore:{ name:"Herb Lore",attributeId:"iq",difficulty:"VH"},
    hiking:{ name:"Hiking",attributeId:"ht",difficulty:"A"},
    hobbySkillPhysical:{ name:"Hobby Skill (Physical)",attributeId:"dx",difficulty:"E"},
    hobbySkillMental:{ name:"Hobby Skill (Mental)",attributeId:"iq",difficulty:"E"},
    holdout:{ name:"Holdout",attributeId:"iq",difficulty:"A"},
    housekeeping:{ name:"Housekeeping",attributeId:"iq",difficulty:"E"},
    hypnotism:{ name:"Hypnotism",attributeId:"iq",difficulty:"H"},
    immovableStance:{ name:"Immovable Stance",attributeId:"dx",difficulty:"H"},
    intelligenceAnalysis:{ name:"Intelligence Analysis",attributeId:"iq",difficulty:"H"},
    interrogation:{ name:"Interrogation",attributeId:"iq",difficulty:"A"},
    intimidation:{ name:"Intimidation",attributeId:"will",difficulty:"A"},
    invisibilityArt:{ name:"Invisibility Art",attributeId:"iq",difficulty:"VH"},
    jeweler:{ name:"Jeweler",attributeId:"iq",difficulty:"H"},
    jitteSai:{ name:"Jitte/Sai",attributeId:"dx",difficulty:"A"},
    judo:{ name:"Judo",attributeId:"dx",difficulty:"H"},
    jumping:{ name:"Jumping",attributeId:"dx",difficulty:"E"},
    karate:{ name:"Karate",attributeId:"dx",difficulty:"H"},
    kiai:{ name:"Kiai",attributeId:"ht",difficulty:"H"},
    knife:{ name:"Knife",attributeId:"dx",difficulty:"E"},
    knotTying:{ name:"Knot-Tying",attributeId:"dx",difficulty:"E"},
    kusari:{ name:"Kusari",attributeId:"dx",difficulty:"H"},
    lance:{ name:"Lance",attributeId:"dx",difficulty:"A"},
    lasso:{ name:"Lasso",attributeId:"dx",difficulty:"A"},
    leadership:{ name:"Leadership",attributeId:"iq",difficulty:"A"},
    leatherworking:{ name:"Leatherworking",attributeId:"dx",difficulty:"E"},
    lifting:{ name:"Lifting",attributeId:"ht",difficulty:"A"},
    lightWalk:{ name:"Light Walk",attributeId:"dx",difficulty:"H"},
    linguistics:{ name:"Linguistics",attributeId:"iq",difficulty:"H"},
    lipReading:{ name:"Lip Reading",attributeId:"per",difficulty:"A"},
    literature:{ name:"Literature",attributeId:"iq",difficulty:"H"},
    lockpicking:{ name:"Lockpicking",attributeId:"iq",difficulty:"A"},
    machinist:{ name:"Machinist",attributeId:"iq",difficulty:"A"},
    mainGauche:{ name:"Main-Gauche",attributeId:"dx",difficulty:"A"},
    makeup:{ name:"Makeup",attributeId:"iq",difficulty:"E"},
    marketAnalysis:{ name:"Market Analysis",attributeId:"iq",difficulty:"H"},
    masonry:{ name:"Masonry",attributeId:"iq",difficulty:"E"},
    meditation:{ name:"Meditation",attributeId:"will",difficulty:"H"},
    mentalStrength:{ name:"Mental Strength",attributeId:"will",difficulty:"E"},
    merchant:{ name:"Merchant",attributeId:"iq",difficulty:"A"},
    metallurgy:{ name:"Metallurgy",attributeId:"iq",difficulty:"H"},
    mindBlock:{ name:"Mind Block",attributeId:"will",difficulty:"A"},
    monowireWhip:{ name:"Monowire Whip",attributeId:"dx",difficulty:"H"},
    mount:{ name:"Mount",attributeId:"dx",difficulty:"A"},
    musicalComposition:{ name:"Musical Composition",attributeId:"iq",difficulty:"H"},
    musicalInfluence:{ name:"Musical Influence",attributeId:"iq",difficulty:"VH"},
    nbcSuit:{ name:"NBC Suit",attributeId:"dx",difficulty:"A"},
    net:{ name:"Net",attributeId:"dx",difficulty:"H"},
    observation:{ name:"Observation",attributeId:"per",difficulty:"A"},
    occultism:{ name:"Occultism",attributeId:"iq",difficulty:"A"},
    packing:{ name:"Packing",attributeId:"iq",difficulty:"A"},
    panhandling:{ name:"Panhandling",attributeId:"iq",difficulty:"E"},
    parachuting:{ name:"Parachuting",attributeId:"dx",difficulty:"E"},
    parryMissileWeapons:{ name:"Parry Missile Weapons",attributeId:"dx",difficulty:"H"},
    performance:{ name:"Performance",attributeId:"iq",difficulty:"A"},
    persuade:{ name:"Persuade",attributeId:"will",difficulty:"H"},
    photography:{ name:"Photography",attributeId:"iq",difficulty:"A"},
    physician:{ name:"Physician",attributeId:"iq",difficulty:"H"},
    physics:{ name:"Physics",attributeId:"iq",difficulty:"VH"},
    pickpocket:{ name:"Pickpocket",attributeId:"dx",difficulty:"H"},
    poetry:{ name:"Poetry",attributeId:"iq",difficulty:"A"},
    poisons:{ name:"Poisons",attributeId:"iq",difficulty:"H"},
    polearm:{ name:"Polearm",attributeId:"dx",difficulty:"A"},
    politics:{ name:"Politics",attributeId:"iq",difficulty:"A"},
    powerBlow:{ name:"Power Blow",attributeId:"will",difficulty:"H"},
    pressurePoints:{ name:"Pressure Points",attributeId:"iq",difficulty:"H"},
    pressureSecrets:{ name:"Pressure Secrets",attributeId:"iq",difficulty:"VH"},
    professionalSkillPhysical:{ name:"Professional Skill (Physical)",attributeId:"dx",difficulty:"A"},
    professionalSkillMental:{ name:"Professional Skill (Mental)",attributeId:"iq",difficulty:"A"},
    propaganda:{ name:"Propaganda",attributeId:"iq",difficulty:"A"},
    prospecting:{ name:"Prospecting",attributeId:"iq",difficulty:"A"},
    psychology:{ name:"Psychology",attributeId:"iq",difficulty:"H"},
    publicSpeaking:{ name:"Public Speaking",attributeId:"iq",difficulty:"A"},
    push:{ name:"Push",attributeId:"dx",difficulty:"H"},
    rapier:{ name:"Rapier",attributeId:"dx",difficulty:"A"},
    research:{ name:"Research",attributeId:"iq",difficulty:"A"},
    running:{ name:"Running",attributeId:"ht",difficulty:"A"},
    saber:{ name:"Saber",attributeId:"dx",difficulty:"A"},
    scrounging:{ name:"Scrounging",attributeId:"per",difficulty:"E"},
    scuba:{ name:"Scuba",attributeId:"iq",difficulty:"A"},
    seamanship:{ name:"Seamanship",attributeId:"iq",difficulty:"E"},
    search:{ name:"Search",attributeId:"per",difficulty:"A"},
    sewing:{ name:"Sewing",attributeId:"dx",difficulty:"E"},
    sexAppeal:{ name:"Sex Appeal",attributeId:"ht",difficulty:"A"},
    shadowing:{ name:"Shadowing",attributeId:"iq",difficulty:"A"},
    shortsword:{ name:"Shortsword",attributeId:"dx",difficulty:"A"},
    singing:{ name:"Singing",attributeId:"ht",difficulty:"E"},
    skating:{ name:"Skating",attributeId:"ht",difficulty:"H"},
    skiing:{ name:"Skiing",attributeId:"ht",difficulty:"H"},
    sleightOfHand:{ name:"Sleight of Hand",attributeId:"dx",difficulty:"H"},
    sling:{ name:"Sling",attributeId:"dx",difficulty:"H"},
    smallsword:{ name:"Smallsword",attributeId:"dx",difficulty:"A"},
    smuggling:{ name:"Smuggling",attributeId:"iq",difficulty:"A"},
    sociology:{ name:"Sociology",attributeId:"iq",difficulty:"H"},
    soldier:{ name:"Soldier",attributeId:"iq",difficulty:"A"},
    spacer:{ name:"Spacer",attributeId:"iq",difficulty:"E"},
    spear:{ name:"Spear",attributeId:"dx",difficulty:"A"},
    spearThrower:{ name:"Spear Thrower",attributeId:"dx",difficulty:"A"},
    speedReading:{ name:"Speed-Reading",attributeId:"iq",difficulty:"A"},
    sports:{ name:"Sports",attributeId:"dx",difficulty:"A"},
    staff:{ name:"Staff",attributeId:"dx",difficulty:"A"},
    stageCombat:{ name:"Stage Combat",attributeId:"dx",difficulty:"A"},
    stealth:{ name:"Stealth",attributeId:"dx",difficulty:"A"},
    streetwise:{ name:"Streetwise",attributeId:"iq",difficulty:"A"},
    submariner:{ name:"Submariner",attributeId:"iq",difficulty:"E"},
    suggest:{ name:"Suggest",attributeId:"will",difficulty:"H"},
    sumoWrestling:{ name:"Sumo Wrestling",attributeId:"dx",difficulty:"A"},
    surgery:{ name:"Surgery",attributeId:"iq",difficulty:"VH"},
    swayEmotions:{ name:"Sway Emotions",attributeId:"will",difficulty:"H"},
    swimming:{ name:"Swimming",attributeId:"ht",difficulty:"E"},
    tactics:{ name:"Tactics",attributeId:"iq",difficulty:"H"},
    teaching:{ name:"Teaching",attributeId:"iq",difficulty:"A"},
    thaumatology:{ name:"Thaumatology",attributeId:"iq",difficulty:"VH"},
    throwing:{ name:"Throwing",attributeId:"dx",difficulty:"A"},
    throwingArt:{ name:"Throwing Art",attributeId:"dx",difficulty:"H"},
    tonfa:{ name:"Tonfa",attributeId:"dx",difficulty:"A"},
    tracking:{ name:"Tracking",attributeId:"per",difficulty:"A"},
    traps:{ name:"Traps",attributeId:"iq",difficulty:"A"},
    twoHandedAxeMace:{ name:"Two-Handed Axe/Mace",attributeId:"dx",difficulty:"A"},
    twoHandedFlail:{ name:"Two-Handed Flail",attributeId:"dx",difficulty:"H"},
    twoHandedSword:{ name:"Two-Handed Sword",attributeId:"dx",difficulty:"A"},
    typing:{ name:"Typing",attributeId:"dx",difficulty:"E"},
    urbanSurvival:{ name:"Urban Survival",attributeId:"per",difficulty:"A"},
    vaccSuit:{ name:"Vacc Suit",attributeId:"dx",difficulty:"A"},
    ventriloquism:{ name:"Ventriloquism",attributeId:"iq",difficulty:"H"},
    veterinary:{ name:"Veterinary",attributeId:"iq",difficulty:"H"},
    weatherSense:{ name:"Weather Sense",attributeId:"iq",difficulty:"A"},
    weirdScience:{ name:"Weird Science",attributeId:"iq",difficulty:"VH"},
    whip:{ name:"Whip",attributeId:"dx",difficulty:"A"},
    wrestling:{ name:"Wrestling",attributeId:"dx",difficulty:"A"},
    writing:{ name:"Writing",attributeId:"iq",difficulty:"A"},
    zenArchery:{ name:"Zen Archery",attributeId:"iq",difficulty:"VH"}
}


const SkillDifficultyStart = {
    "E": 0,
    "A": -1,
    "H": -2,
    "VH": -3
}

const SkillDifficultyCost = [1,2,4,8,12,16,20,24,28];


type SkillsStore = {
    list: SkillListStore;
    getStartingRelativeLevel: (skillDifficulty:string)=>number,
    getCost: (skillDifficulty:string, relativeLevel: number)=>number,
    getSkillLevel: (state: AggregateDataStore, skillId:string)=>number
}


export const SystemSkillsStoreInitialState: SkillsStore = {
    list: SystemSkillsListStoreInitialState,
    getStartingRelativeLevel: (skillDifficulty:string):number =>{
        return SkillDifficultyStart[skillDifficulty]
    },
    getCost: (skillDifficulty:string, relativeLevel: number):number => {
        var normalizedRelativeSkill = relativeLevel-SkillDifficultyStart[skillDifficulty];
        return SkillDifficultyCost[normalizedRelativeSkill];
    },
    getSkillLevel: (state: AggregateDataStore, skillId:string):number => {
        var relativeSkill:number = state.character.skills[skillId].relativeLevel;
        var systemSkill = SystemDataStore.skills.list[skillId];
        var attributeId = systemSkill.attributeId;
        var systemAttribute = SystemDataStore.attributes[attributeId];

        var attributeValue:number;
        if(systemAttribute.derived) {
            attributeValue = systemAttribute.derived.value(state);
        } else {
            attributeValue  = state.character.attributes[attributeId].value;
        }


        return attributeValue+relativeSkill;
    }
}