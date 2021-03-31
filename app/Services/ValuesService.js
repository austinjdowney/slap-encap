import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class ValuesService {
  addValue() {
    //add the new value to the end of the values array
    //'.push() will not trigger listener... (... <- attaches to end of array)
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}
// only exporting the one thing.. all the different up to date ValuesService().. Singleton Pattern
export const valuesService = new ValuesService();

