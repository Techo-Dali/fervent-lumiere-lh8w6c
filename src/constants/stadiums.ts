type StadiumName = string;
type StadiumLink = string;

interface Stadiums {
  [key: StadiumName]: {
    path: StadiumLink;
  };
}

const stadiums: Stadiums = {
  dfhStadium: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/4/44/DFH_Stadium_arena_preview.png",
  },
  Mannfield: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/b/b0/Mannfield_arena_preview.png",
  },
  championsField: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/e/e1/Champions_Field_arena_preview.png",
  },
  urbanCentral: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/0/04/Urban_Central_arena_preview.png",
  },
  beckwithPark: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/8/85/Beckwith_Park_arena_preview.png",
  },
  utopiaColiseum: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/4/43/Utopia_Coliseum_arena_preview.png",
  },
  wasteland: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/0/0d/Wasteland_arena_preview.png",
  },
  neoTokyo: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/6/6b/Neo_Tokyo_arena_preview.png",
  },
  AquaDome: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/a/a8/AquaDome_arena_preview.png",
  },
  Farmstead: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/5/5a/Farmstead_arena_preview.png",
  },
  forbiddenTemple: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/b/b1/Forbidden_Temple_arena_preview.png",
  },
  deadeyeCanyon: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/b/b1/Forbidden_Temple_arena_preview.png",
  },
  neonFields: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/a/a8/Neon_Fields_arena_preview.png",
  },
  saltyShores: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/a/ad/Salty_Shores_arena_preview.png",
  },
  starbaseArc: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/6/69/Starbase_ARC_arena_preview.png",
  },
  rivalsArena: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/9/91/Rivals_Arena_preview.png",
  },
  arcTagon: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/6/62/ARCtagon_arena_preview.png",
  },
  badlands: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/0/08/Badlands_arena_preview.png",
  },
  core707: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/2/23/Core_707_arena_preview.png",
  },
  dunkHouse: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/7/79/Dunk_House_arena_preview.png",
  },
  throwbackStadium: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/e/ec/Throwback_Stadium.jpg",
  },
  tokyoUnderpass: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/f/f7/Tokyo_Underpass_arena_preview.png",
  },
  badlandsNight: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/5/57/Badlands_%28Night%29_arena_preview.png",
  },
  beckwithParkMidnight: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/2/2a/Beckwith_Park_%28Midnight%29_arena_preview.png",
  },
  beckwithParkStorm: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/7/7b/Beckwith_Park_%28Stormy%29_arena_preview.png",
  },
  beckwithParkGotham: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/5/54/Beckwith_Park_%28Gotham_Night%29_arena_preview.png",
  },
  championsFieldDay: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/c/cb/Champions_Field_%28Day%29_arena_preview.png",
  },
  championsFieldNfl: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/6/66/Champions_Field_NFL_arena_preview.png",
  },
  dfhStadiumDay: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/0/07/DFH_Stadium_%28Day%29_arena_preview.png",
  },
  dfhStadiumSnowy: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/a/a8/DFH_Stadium_%28Snowy%29_arena_preview.png",
  },
  dfhStadiumStormy: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/4/4f/DFH_Stadium_%28Stormy%29_arena_preview.png",
  },
  dfhStadiumCircuit: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/a/a3/DFH_Stadium_%28Circuit%29_arena_preview.png",
  },
  forbiddenTempleDay: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/e/e2/Forbidden_Temple_%28Day%29_arena_preview.png",
  },
  farmsteadNight: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/2/24/Farmstead_%28Night%29_arena_preview.png",
  },
  farmsteadTheUpsideDown: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/4/43/Farmstead_%28The_Upside_Down%29_arena_preview.png",
  },
  mannfieldNight: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/7/7c/Mannfield_%28Night%29_arena_preview.png",
  },
  mannfieldSnowy: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/8/82/Mannfield_%28Snowy%29_arena_preview.png",
  },
  mannfieldStormy: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/d/dc/Mannfield_%28Stormy%29_arena_preview.png",
  },
  neoTokyoComic: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/2/26/Neo_Tokyo_%28Comic%29_arena_preview.png",
  },
  saltyShoresNight: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/1/15/Salty_Shores_%28Night%29_arena_preview.png",
  },
  starbaseArcAftermath: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/a/a9/Starbase_ARC_%28Aftermath%29_arena_preview.png",
  },
  throwbackStadiumSnowy: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/4/40/Throwback_Stadium_%28Snowy%29_arena_preview.png",
  },
  urbanCentralDawn: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/7/7c/Urban_Central_%28Dawn%29_arena_preview.png",
  },
  urbanCentralNight: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/a/ac/Urban_Central_%28Night%29_arena_preview.png",
  },
  urbanCentralHaunted: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/8/8e/Urban_Central_%28Haunted%29_arena_preview.png",
  },
  utopiaColiseumDusk: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/c/c8/Utopia_Coliseum_%28Dusk%29_arena_preview.png",
  },
  utopiaColiseumSnowy: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/e/e7/Utopia_Coliseum_%28Snowy%29_arena_preview.png",
  },
  wastelandNight: {
    path: "https://static.wikia.nocookie.net/rocketleague/images/0/05/Wasteland_%28Night%29_arena_preview.png",
  },
} as const;

export default stadiums;
