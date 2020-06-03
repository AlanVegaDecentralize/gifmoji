export interface UserGifs {
  file: File;
  id: string;
  gif: string;
}

export interface UserAudio {
  file: File;
  id: string;
}

export const GifTypes = {
  GIF: "gif",
};

export interface DragItem {
  type: string;
  id: string;
  top: number;
  left: number;
}
