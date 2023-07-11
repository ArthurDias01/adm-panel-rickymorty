export interface ICharacter {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
  type: string;
  origin?: {
    name: string;
    dimension: string;
  }
  location: {
    name: string;
    type: string;
    dimension?: string;
  }
}
