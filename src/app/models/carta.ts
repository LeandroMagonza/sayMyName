export interface Carta {
  id: number;
  palabraSecreta: string;
  palabraProhibida: string;
  palabraTipo: string;
  estado: EstadoCarta;
}
export enum EstadoCarta {
MAZO = "enMazo",
DESCARTE = "enDescarte",
JUGADOR = "enJugador"

}
