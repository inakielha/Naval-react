import { deployRoute } from "../pathImages";

export const routes = [
  { name: 'MODELOS', path: deployRoute },
  // { name: 'DEMO', path: "", redirect: false },
  // { name: 'SUMATE A LA RED', path: "", redirect: false },
  { name: 'Concesionarios', path: deployRoute + 'concesionarios', redirect: false },
]