export const TRACK_NAMES = ['Toon-Up', 'Trap', 'Lure', 'Throw', 'Squirt', 'Zap', 'Sound', 'Drop'] as const
export const GAG_NAMES = ['Feather', 'Megaphone', 'Lipstick', 'Bamboo Cane', 'Pixie Dust', 'Juggling Cubes', 'Confetti Cannon', 'High Dive', 'Banana Peel', 'Rake', 'Springboard', 'Marbles', 'Quicksand', 'Trapdoor', 'Wrecking Ball', 'TNT', '$1 Bill', 'Small Magnet', '$5 Bill', 'Big Magnet', '$10 Bill', 'Hypno-goggles', '$50 Bill', 'Presentation', 'Cupcake', 'Fruit Pie Slice', 'Cream Pie Slice', 'Birthday Cake Slice', 'Whole Fruit Pie', 'Whole Cream Pie', 'Birthday Cake', 'Wedding Cake', 'Squirting Flower', 'Glass of Water', 'Squirt Gun', 'Water Balloon', 'Seltzer Bottle', 'Fire Hose', 'Storm Cloud', 'Geyser', 'Joybuzzer', 'Lightbulb', 'Broken Radio', 'Kart Battery', 'Broken TV', 'Stagelight', 'Tesla Coil', 'Lightning', 'Kazoo', 'Bike Horn', 'Whistle', 'Bugle', 'Aoogah', 'Elephant Trunk', 'Foghorn', 'Opera Singer', 'Flower Pot', 'Sandbag', 'Bowling Ball', 'Anvil', 'Big Weight', 'Safe', 'Boulder', 'Grand Piano'] as const
export type TrackName = typeof TRACK_NAMES[number]
export type GagName = typeof GAG_NAMES[number]

// export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8


export type Gag = {
  track: TrackName;
  level: number;
  name: GagName;
  max: number;
  count: number;
  icon: string;
  unlocked: boolean;
}

export type GagTrack = {
  name: TrackName;
  // gags: [Gag<1>, Gag<2>, Gag<3>, Gag<4>, Gag<5>, Gag<6>, Gag<7>, Gag<8>]
  gagNames: GagName[];
  color: string;
  unlocked: boolean;
}