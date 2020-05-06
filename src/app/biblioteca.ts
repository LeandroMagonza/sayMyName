import { Carta, EstadoCarta } from './models/carta';

export const biblioteca: Carta[] = [
  {
  id: 1,
  palabraSecreta: "casa",
  palabraProhibida: "vivir",
  palabraTipo: "lugar",
  estado: EstadoCarta.MAZO
  },
  {
  id: 2,
  palabraSecreta: "queso",
  palabraProhibida: "leche",
  palabraTipo: "comida",
  estado: EstadoCarta.MAZO
  },
  {
  id: 3,
  palabraSecreta: "budismo",
  palabraProhibida: "monje",
  palabraTipo: "religión",
  estado: EstadoCarta.MAZO
  },
  {
  id: 4,
  palabraSecreta: "motocicleta",
  palabraProhibida: "dos",
  palabraTipo: "vehiculo",
  estado: EstadoCarta.MAZO
  },
  {
  id: 5,
  palabraSecreta: "rusia",
  palabraProhibida: "comunismo",
  palabraTipo: "pais",
  estado: EstadoCarta.MAZO
  }
];
