export const data = {
  id: 26,
  name: "Skull Candy",
  tagline: "Pacific Hopped Amber Bitter.",
  first_brewed: "02/2010",
  description:
    "The first beer that we brewed on our newly commissioned 5000 litre brewhouse in Fraserburgh 2009. A beer with the malt and body of an English bitter, but the heart and soul of vibrant citrus US hops.",
  image_url: "https://images.punkapi.com/v2/keg.png",
  abv: 3.5,
  ibu: 33,
  target_fg: 1012,
  target_og: 1038,
  ebc: 50,
  srm: 25,
  ph: 4.4,
  attenuation_level: 68.4,
  volume: { value: 20, unit: "litres" },
  boil_volume: { value: 25, unit: "litres" },
  method: {
    mash_temp: [{ temp: { value: 65, unit: "celsius" }, duration: 75 }],
    fermentation: { temp: { value: 19, unit: "celsius" } },
    twist: null,
  },
  ingredients: {
    malt: [
      { name: "Extra Pale", amount: { value: 2.81, unit: "kilograms" } },
      { name: "Caramalt", amount: { value: 0.63, unit: "kilograms" } },
      { name: "Crystal 120", amount: { value: 0.31, unit: "kilograms" } },
    ],
    hops: [
      {
        name: "Cascade",
        amount: { value: 25, unit: "grams" },
        add: "start",
        attribute: "bitter",
      },
      {
        name: "Cascade",
        amount: { value: 18.8, unit: "grams" },
        add: "end",
        attribute: "flavour",
      },
      {
        name: "Centennial",
        amount: { value: 18.8, unit: "grams" },
        add: "end",
        attribute: "flavour",
      },
      {
        name: "Amarillo",
        amount: { value: 25, unit: "grams" },
        add: "end",
        attribute: "flavour",
      },
      {
        name: "Simcoe",
        amount: { value: 31.3, unit: "grams" },
        add: "end",
        attribute: "flavour",
      },
    ],
    yeast: "Wyeast 1056 - American Ale™",
  },
  food_pairing: [
    "Haggis bon bons",
    "Rosemary and lemon roast chicken",
    "Oatmeal and cranberry cookies",
  ],
  brewers_tips:
    "Make sure your hops are well broken up and mixed in when added to the kettle for aroma additions. The wort is not boiling so is not agitating the hops to allow mixing. If the hops aren't steeped properly in the wort you won't get the maximum flavour impact.",
  contributed_by: "Sam Mason <samjbmason>",
};
