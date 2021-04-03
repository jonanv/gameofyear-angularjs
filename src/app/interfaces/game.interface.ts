export interface Game {
  id: string;
  url: string;
  name: string;
  votes: number;
}

export interface Response {
  ok: boolean;
  message: string;
}
