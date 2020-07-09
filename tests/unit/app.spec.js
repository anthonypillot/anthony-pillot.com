// Importer `shallowMount` de Vue Test Utils et le composant à tester
// import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

// Monter le composant
// const wrapper = shallowMount(App);

// Ici nous avons plusieurs tests avec Jest, cependant vous pouvez utiliser
// n'importe quel combo de lanceur de tests/bibliothèque d'assertions que vous préférez
describe("Application root", () => {
  // Inspecter l'objet d'options du composant
  it("have `created` hook", () => {
    expect(typeof App.created).toBe("function");
  });

  // Évaluer les résultats des fonctions dans
  // l'objet d'options du composant
  it("contain author name variable", () => {
    expect(typeof App.data).toBe("function");
    const defaultData = App.data();
    expect(defaultData.author).toBe("Anthony PILLOT");
  });
});
