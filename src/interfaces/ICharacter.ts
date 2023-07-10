export interface ICharacter {
  id: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
  type: string;
  location: {
    name: string;
    type: string;
  }
}
