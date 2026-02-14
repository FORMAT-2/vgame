
export enum AppStage {
  START = 'START',
  GAME_1 = 'GAME_1', // Heart Catcher
  GALLERY_1 = 'GALLERY_1',
  GAME_2 = 'GAME_2', // Memory Match
  GALLERY_2 = 'GALLERY_2',
  GAME_3 = 'GAME_3', // Love Letter Scramble
  GALLERY_3 = 'GALLERY_3',
  FINAL = 'FINAL'
}

export interface GalleryItem {
  url: string;
  caption: string;
}

export interface GameResult {
  message: string;
  items: GalleryItem[];
}
