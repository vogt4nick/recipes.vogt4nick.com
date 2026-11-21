# Writing Recipes

This guide covers English recipes under `src/en/recipes/`. Austrian recipes
under `src/at/` follow their own older conventions (`Zutaten`, `Zubereitung`,
prose directions); for those, copy the format of a sibling file.

The key words MUST, MUST NOT, SHOULD, SHOULD NOT and MAY follow
[RFC 2119](https://www.rfc-editor.org/rfc/rfc2119). Only MUST and MUST NOT are
hard requirements. A SHOULD can be broken for a good reason.

## Workflow

1. **Read the whole source.** If the page won't load, ask the user to paste the
    recipe text. Never rebuild a recipe from search snippets or memory.
2. **Pick a location.** Put the file in the category folder that fits the dish
    and look at two or three siblings there before writing. Navigation is
    sorted by title automatically, so no nav file needs editing.
3. **Copy the [template](#template)** and fill it in.
4. **Look up ingredient names.** Before naming an ingredient, search existing
    recipes for the name already in use, e.g.
    `grep -rhoE 'Garlic[A-Za-z ]*' src/en/recipes | sort | uniq -c | sort -rn`.
5. **Run `prek run --all-files`** and fix every failure. mdformat rewraps lines
    to 80 columns and renumbers lists, so don't hand-wrap. The strict Zensical
    build catches broken links and tags that aren't allowed.
6. **Go through the [checklist](#checklist).**

## Fidelity to the source

The user checks every draft against its source and deletes anything that was
added or guessed.

- MUST NOT invent quantities, yields, temperatures, times or dates the source
    doesn't give. Leave the yield out if the source doesn't state one. If the
    publication date can't be found, ask the user for it.
- MUST NOT add preparations the source doesn't give (e.g. "torn by hand").
- MUST NOT add substitutions, serving suggestions or tips the source doesn't
    give.
- MUST convert measurements to the site's [units](#measurements).
- SHOULD order directions the way a cook works through them, even when the
    source orders them differently, e.g. starting the pasta water before
    rendering the guanciale.

## Template

```markdown
---
tags:
  - cuisine/mediterranean
  - occasion/weekday-dinner
---

# Pasta e ceci

=== "Ingredients"

    - 320 g Dry Ditalini
    - 2 T Olive Oil
    - 2 Garlic Cloves, minced
    - 1 Fresh Rosemary Sprig
    - 400 g Cooked Chickpeas
    - 1000 g [Vegetable Stock](../soups/stocks/vegetable-stock.md)
    - For Serving
        - 30 g Parmigiano-Reggiano, finely grated
        - Black Peppercorn, ground
        - Salt

    !!! info "Yields 4 servings"

=== "Directions"

    1. **Sweat garlic.** Warm oil over medium-low heat. Add garlic and rosemary.
        Cook 1-2 minutes until fragrant.
    2. **Simmer chickpeas.** Add chickpeas and stock. Simmer 10 minutes. Remove
        rosemary.
    3. **Cook pasta** in pot 10-12 minutes until al dente, stirring often.
    4. **Serve** with parmigiano and pepper.

    ??? tip "Mash a third of the chickpeas before adding pasta."

        The broken chickpeas thicken the broth.

[^hazan]: {{ cite.hazan_italian_cooking }} 112.
```

A file has these parts, in this order: frontmatter, h1, the tabs, any
admonitions about the whole recipe, the citation.

## File

- The filename MUST be kebab-case and SHOULD be the short dish name, e.g.
    `carbonara.md`, not the source URL's slug.
- A recipe whose variants live in its own folder MUST be that folder's
    `index.md`, e.g. `grains/rice/japanese-rice/index.md` beside `onigiri.md`.
- Frontmatter MAY define `tags`. Every tag MUST appear in `tags_allowed` in
    `zensical.toml`. Any other tag fails the build.
- Frontmatter MAY define `title` alongside `tags`, but MUST NOT define `title`
    alone; use an h1 instead.
- The h1 MAY be added when the title generated from the filename would be wrong,
    e.g. a proper noun ("Tortilla Española", "Eastern North Carolina vinegar
    sauce"), a hyphenated word ("tomato-vinegar"), or an `index.md`. It MUST be
    sentence case.

## Tabs

- A recipe MUST have an `=== "Ingredients"` tab and SHOULD follow it with an
    `=== "Directions"` tab.
- A recipe MAY add other tabs, e.g. a variant's ingredients
    (`=== "Japanese Ingredients"`), `=== "Nutrition"` or
    `=== "Baker's Percentage"`.
- Tab content MUST be indented 4 spaces.

## Ingredients

- Ingredients MUST be an unordered list using `-`.
- Ingredients SHOULD be listed in the order they're used.
- Each ingredient is written as `measurement Name, preparation, preparation`,
    e.g. `150 g Guanciale, rind removed, chopped into ~1 cm thick strips`.
- Related ingredients that go into the pot together MAY be grouped under a label
    with the items nested beneath it. Existing labels include `Seasonings`,
    `Spices`, `Sauce`, `Dressing`, `Filling`, `Garnish` and `For Serving`.
- An ingredient MAY link to another recipe with a relative path to its `.md`
    file. The preparations MUST be inside the link text, e.g.
    `4 [Yellow Onions, halved, caramelized](../vegetables/caramelized-onions.md)`.

### Measurements

- A measurement MUST use `g`, `t` (teaspoon) or `T` (tablespoon), or be a bare
    count, e.g. `2 Onions`, `1 Bay Leaf`, `3 Garlic Cloves`.
- A measurement MUST NOT be a size such as large, medium or small. Write
    `1 Onion` or `150 g Onion`, not `1 large Onion`.
- Amounts SHOULD be whole numbers or fractions, e.g. `1/2 t`, `240 g`.
- An ingredient MAY have no measurement when the amount is to taste, e.g.
    `Salt`.

### Names

- The name MUST be Title Case.
- The name MUST be the whole, unprocessed ingredient; processing goes in the
    preparation. Write `Black Peppercorn, ground`, not `Black Pepper`.
- Dry pasta and grains SHOULD be prefixed `Dry`, e.g. `Dry Spaghetti`,
    `Dry Basmati Rice`.
- Herbs MUST say fresh or dried and which part of the plant, e.g.
    `Fresh Coriander Leaves and Stems`, `Dried Thyme Leaves`, never `Coriander`.
- Spices MUST use these names: `Black Peppercorn` (not Pepper or Black Pepper),
    `Cumin Seed` (not Cumin), `Coriander Seed`, `Dried Cayenne Pepper` (not
    Cayenne), `Paprika`, `Garlic Powder`, `Onion Powder`.
- Alternatives MAY be joined with "or", e.g. `Ketchup or Tomato Sauce`.
- An optional ingredient MUST end with `(optional)`.

### Preparations

- Preparations MUST be lower case and follow the name after a comma.
- Several preparations MUST be separated by commas, not "and". Write
    `3 Potatoes, parboiled, chopped`, not `parboiled and chopped`.
- Cuts SHOULD be "minced", "chopped" or "roughly chopped", not "diced". A more
    exact cut MAY be given when it matters, e.g. `chopped into ~7 mm slices`.

## Directions

- Directions MUST be an ordered list. A recipe with a single step MAY write it
    as one unnumbered line, e.g. `**Mix ingredients** until combined.`
- Each step MUST open with a bolded imperative command. The command is either a
    fragment followed by a period (`**Render guanciale.** Cook guanciale...`) or
    the start of the sentence (`**Preheat oven** to 200ºC (400ºF).`).
- Steps MUST be imperative. Write `Boil water.`, not
    `The water should be boiling.` or `You'll want to boil the water.`
- Steps SHOULD be terse and SHOULD drop "the". Write `Boil water.`, not
    `Bring a large pot of salted water to the boil.`
- Steps MUST NOT editorialize, praise or encourage. Write
    `until edges are browned`, not `until beautifully caramelized` or
    `this is the secret to great texture!`

### Temperatures

- Temperatures MUST give ºC first and ºF in parentheses, e.g. `177ºC (350ºF)`.
- The degree mark MUST be `º` (U+00BA), which the site already uses, not `°`.

### Times

- A time MAY be a range joined with a hyphen, e.g. `5-7 minutes`.
- A time MUST come before its doneness cue. Write
    `Sweat onions 5-7 minutes until translucent.`, not
    `Sweat onions until translucent, about 5-7 minutes.`
- A timed step SHOULD say how to tell it's done. Passive steps of fixed length
    are exempt, e.g. `**Soak lentils** 30 minutes.`
- Times of an hour or more SHOULD be written `2 hours`, or `1h 30m` when minutes
    are included.

## Admonitions

- An admonition SHOULD go inside the tab it concerns, indented with that tab's
    content: yield and storage in Ingredients, technique in Directions. It MAY
    go after the tabs, unindented, when it concerns the whole recipe.
- Use `!!!` when the cook must see it, and `???` (collapsed) when it has a body
    the cook can skip.
- A body MUST be separated from the title line by a blank line and indented 4
    more spaces than the title line.
- The type SHOULD match the purpose, because the site prints the type before the
    title:
    - `info` for yield and storage, e.g. `!!! info "Yields 4 servings"`.
    - `tip` for a step that's easy to get wrong.
    - `question` for a substitution the source gives.
    - `caution` or `warning` for a step that ruins the dish if done wrong.
    - `note` for background.
    - `quote` for a quoted passage, with the attribution as the title, e.g.
        `!!! quote "Julia Child in _Mastering the Art of French Cooking_"`.
- The title MUST NOT repeat the type. Write `!!! tip "Chill dough."`, not
    `!!! tip "Tip: Chill dough."`
- Admonitions SHOULD be rare. Add one only for a tip in the source that no step
    already covers. Don't add "serve immediately", restatements of a step, or
    substitutions the source doesn't give.

## Citations

- A recipe SHOULD cite its source as a footnote at the end of the file. The
    footnote isn't referenced from the text; the build keeps it anyway.
- The footnote key SHOULD be the author's surname or the site name in lower
    case, e.g. `[^mitzewich]`, `[^giallozafferano]`. Numbered keys like `[^1]`
    are legacy.
- A web page with a named author:
    ```markdown
    [^mitzewich]: Mitzewich, John.
        ["French Toast - The Fancy Brunch Restaurant Style."](https://foodwishes.blogspot.com/2007/09/french-toast-fancy-brunch-restaurant.html)
        _Food Wishes._ 17 September 2007.
    ```
- A web page with no named author leads with the linked site name:
    ```markdown
    [^giallozafferano]: [_GialloZafferano._](https://ricette.giallozafferano.it/)
        ["Spaghetti alla Carbonara."](https://ricette.giallozafferano.it/Spaghetti-alla-Carbonara.html)
        3 December 2006.
    ```
- A book MUST be cited with its key from `[project.extra.cite]` in
    `zensical.toml`, followed by page numbers or a chapter, e.g.
    `[^bittman]: {{ cite.bittman_how_to_cook_everything }} "Lentils, Six Ways."`
    A book that isn't listed yet MUST be added there first.

## Checklist

Before finishing, confirm each of these:

- No quantity, yield, time, temperature, date, preparation or tip that isn't in
    the source.
- Tags are all in `tags_allowed`.
- Every measurement is `g`, `t`, `T` or a count; no cups, ounces or sizes.
- Every ingredient name was checked against existing recipes, is Title Case, and
    names the unprocessed ingredient.
- Every step opens with a bold imperative and drops "the".
- Every temperature is `ºC (ºF)` with `º`.
- Every time comes before its doneness cue.
- Every admonition earns its place.
- The citation footnote has a date, or the user has been asked for one.
- `prek run --all-files` passes.
