# Writing Recipes
Write new recipes in the exact format, voice, and style used throughout the repository.

## Requirement Severity
The requirements below use [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) key words to clarify severity; i.e.
1. **MUST** This word means that the definition is an absolute requirement of the recipe.
2. **MUST NOT** This phrase means that the definition is an absolute prohibition of the recipe.
3. **SHOULD** This word means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full recipe must be understood and carefully weighed before choosing a different course.
4. **SHOULD NOT** This phrase means that there may exist valid reasons in particular circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood and the case carefully weighed before implementing any behavior described with this label.
5. **MAY** This word, or the adjective "OPTIONAL", mean that an item is truly optional.  You may choose to include the item because a particular recipe requires it or because you feel that it enhances the recipe while someone else may omit the same item.


## Requirements
* The filename MUST be kebab-case
  e.g. `mushroom-risotto.md`
* The file
  * MAY have yaml frontmatter
    ```yaml
    ---
    title: Millet pulao
    tags:
        - vegan
    ---
    ```
  * MAY have an h1 header
    Use when the title differs from what is automatically rendered by converting kebab-case to Sentence case
    ```markdown
    # Blueberry pie
    ```
  * MUST have an ingredients block
    ```markdown
    === "Ingredients"
        * 100 g Dry White Couscous
        * 250 g Water
        * 1/4 t Salt
    ```
  * SHOULD have a directions block
    ```markdown
    === "Directions"
        1. **Preheat oven** to 350ºF (177ºC).
        2. **Mix dry mix.** Whisk dry mix and spices until combined.
    ```
  * MAY use post-tab admonitions to advise storage, technique, equipment, etc
    Such admonitions are defined outside the ingredients and direction blocks
    ```markdown
    !!! info "Yields 4 servings"
    ```
  * SHOULD have citations
    ```markdown
    [^mitzewich]:
        Mitzewich, John. ["French Toast - The Fancy Brunch Restaurant Style."](https://foodwishes.blogspot.com/2007/09/french-toast-fancy-brunch-restaurant.html) _Food Wishes._ 17 September 2007.

    ```
* When present, the file's yaml frontmatter
  * MAY define only `tags`
  * MAY define `tags` and `title`
  * MUST NOT define only `title`
    Use the h1 header instead
* When present, every tag in `tags` MUST be one of "vegan", "vegetarian", "weeknight meal"
* When present, the file's h1 header MUST be sentence case
  e.g. "Roasted potatoes"
  e.g. "Tortilla Española" because Española is a proper noun
* The ingredients block
  * MUST begin with '=== "Ingredients"'
  * MUST include an unordered list of ingredients
  * MAY use an `!!! info` post-tab admonition to denote yield after the ingredients
    e.g. `!!! info "Yields 4 servings"`
  * MAY include optional ingredients
    e.g. `1/4 t Cinnamon (optional)`
* Every ingredient
  * SHOULD be prefixed by a measurement
    e.g. `100 g Green Peas`
  * MAY have no measurement, deferring to the cook's discretion
    e.g. `Salt`
  * MUST be named in its whole, unprocessed form; processing belongs in the preparation
    Good: `Black Peppercorn, ground`
    Bad: `Black Pepper, ground`
  * MUST be formatted in Title Case
  * MAY be followed by ingredient preparations
    e.g. 1 Onion, minced
  * MAY x-link to another recipe
    e.g. `1000 g [Vegetable Stock](../../soups/stocks/vegetable-stock.md)`
    e.g. `4 [Yellow Onions, halved, thinly sliced, caramelized](../../vegetables/caramelized-onions.md)`
    When x-linking, include all ingredient preparations inside the link text
* Every ingredient preparation
  * MUST be formatted in lower case
  * MUST be separated from the ingredient by a trailing comma
    e.g. 1 Onion, minced
  * MAY include multiple preparations separated by commas
    Good: `3 Potatoes, parboiled, chopped`
    Bad: `3 Potatoes, parboiled and chopped`
  * SHOULD use "minced", "chopped" or "roughly chopped" when referring to cuts
    Good: `3 Potatoes, roughly chopped`
    Good: `1 Onion, minced`
    Bad: `1 Onion, diced`
  * MAY use a more specific description when precision matters for the recipe
    e.g. `150 g Haloumi or Paneer, chopped into ~7 mm thick slices`
* Every ingredient measurement
  * MUST use one of the following units: g (grams), t (teaspoons), T (tablespoons)
  * MUST NOT use size qualifiers (e.g. large, medium, small) as a measurement
    Bad: `1 large Onion, diced`
    Good: `1 Onion, diced`
    Good: `150 g Onion, diced`
  * SHOULD be denoted by a whole number or fraction and a unit
    e.g. 1/2 t Black Peppercorn
    e.g. 1 t Salt
    e.g. 2 T Flour
    e.g. 240 g Water
  * MAY be denoted only by a number
    e.g. 1 Celery Stalk
    e.g. 2 Onions
* Every optional ingredient MUST be suffixed with `(optional)`
* The directions block
  * MUST begin with '=== "Directions"'
  * MUST include an ordered list of directions
  * MAY use a `!!! tip` post-tab admonition
    ```markdown
    !!! tip "Chill dough 30 minutes before baking if the kitchen is hot and the dough is loose and greasy."
    ```
  * MAY use a `!!! warning` post-tab admonition
    ```markdown
    ??? warning "Do not drain in a fine mesh colander."
        We want to keep the dry, starchy outsides of the potatoes. These will crisp and help the texture. A fine colander will grate these off.
    ```
* Every direction
  * MUST use imperative voice (see [voice and tone](#voice-and-tone))
    Good: `Boil water.`
    Good: `Bring water to the boil.`
    Bad: `The water should be boiling.`
    Bad: `You should boil the water when you're ready.`
  * MUST begin with a command formatted in bold
    ```markdown
    1. **Preheat oven** to 200ºC (400ºF).
    ```
  * SHOULD avoid definite articles
    Good: `Cook vegetables.`
    Bad: `Cook the vegetables.`
  * SHOULD have a description following the command
    Good: `1. **Mix ingredients.**`
    Good: `1. **Preheat oven** to 200ºC (400ºF).`
    Good: `1. **Season.** Mix bread and garlic oil to coat evenly. Add seasonings. Mix evenly.`
  * MAY begin with an imperative sentence fragment
    ```markdown
    1. **Infuse garlic oil.** Mix oil and garlic. Rest at least 1 hour at room temperature. Strain garlic.
    ```
  * MUST be imperative.
* Every direction advising temperatures MUST express ºC first with ºF in parentheses
  e.g. `177ºC (350ºF)`
* Every direction advising timing
  * MAY express times as a range
    e.g. `5-7 minutes`, `25-30 minutes`
  * SHOULD advise how one knows when to stop
    Good: `**Sweat** onions 5-7 minutes until soft and translucent.`
    Bad: `**Saute** onions 5-7 minutes.`
    Passive steps with a fixed duration are exempt: e.g. `**Soak lentils** 30 minutes in salted water.`


## Voice and Tone
- **Direct and technical**: precise measurements, temperatures, and times
- **No narrative**: no personal stories, no "my grandmother used to..."
- **Imperative**: "Whisk until smooth", not "You should whisk until smooth"
- **Anticipatory**: include a tip when a step is tricky or has a common failure mode
- **No filler**: if a step is simple, the description is simple


## Standard Ingredient Names
The ingredients below must follow their standard naming convention to avoid ambiguity between recipes.


### Spices
* **Black Peppercorn**; a.k.a. Black Pepper, Pepper
  Good: 1/2 t Black Peppercorn, ground
  Bad: 1/2 t Black Pepper
  Bad: 1/2 t Pepper
* **Paprika**
* **Garlic Powder**
* **Onion Powder**


### Seeds
Seeds are often easily prepared from whole.
* **Cumin Seed**; a.k.a. Cumin
  Good: 1 t Cumin Seed
  Good: 1 t Cumin Seed, ground
  Bad: 1 t Cumin
* **Coriander Seed**
* **Dried Cayenne Pepper**; a.k.a. Cayenne, Cayenne Pepper
  Good: 1/4 t Dried Cayenne Pepper, ground
  Bad: 1/4 t Cayenne


### Herbs
* Herbs
  * MUST be named as fresh or dried
    Good: Dried Coriander Leaves
    Good: Fresh Coriander Leaves
    Bad: Coriander
  * MUST name what part of the plant
    Good: Dried Coriander Leaves
    Good: Fresh Coriander Leaves and Stems
    Good: Fresh Coriander Roots
    Bad: Fresh Coriander
