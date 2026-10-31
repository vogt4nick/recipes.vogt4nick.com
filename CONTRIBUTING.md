# Contributing

## Contributing techniques

Techniques are split into three kinds of page, each in its own directory under
`techniques/`.

| Kind     | What it explains                                        | Example   | Directory              |
| -------- | ------------------------------------------------------- | --------- | ---------------------- |
| Mechanic | A physical or chemical change that many recipes rely on | Diffusion | `techniques/mechanics` |
| Method   | Something a recipe tells the cook to do                 | Braising  | `techniques/methods`   |
| Agent    | An ingredient that works on several mechanics           | Salt      | `techniques/agents`    |

### Before you add a page

- **Which kind is it?** A mechanic can be described without naming a dish or an
    ingredient: "proteins unfold and bind together." A method is a verb a recipe
    uses: "brine," "fold," "sear." An agent is an ingredient that shows up as a
    lever on more than one mechanic.
- **Is it already covered?** A new method usually belongs as a section on an
    existing method page, and a new lever belongs on an existing mechanic page.
- **Does it teach something?** If every cook already knows what it does, it
    doesn't need a page.
- **Does a recipe use it?** Every mechanic and method page names at least one
    recipe. If none uses it yet, add the recipe first or wait.

### Mechanic pages

1. **Mechanism:** what happens, in one or two plain sentences.
2. **Levers:** what controls it. Agents, time, temperature, concentration and
    size go here. Say which way each lever pushes.
3. **Methods:** one line per method that uses the mechanic, linking to its
    section on a method page and saying what the mechanic does there.
4. **Recipes:** the tag listing.
5. **See also:** related mechanics, each with a one-line reason.

### Method pages

Method pages group methods the way cooking schools teach them: cooking by what
carries the heat (moist heat, dry heat, fat, or a combination), mixing by what
it does to a dough or batter, and the cold kitchen by what preserves the food
(salt, acid, or microbes).

The page opens with what its category does to food. Each method gets an `##`
section that explains it, links the mechanics it relies on, and names recipes
that use it. The explanation of a method lives only here; mechanic pages link to
it.

### Agent pages

An agent page opens with one sentence on what the agent is. Then it lists each
mechanic the agent works on, with a sourced sentence on what it does there and a
link to the method where it matters most. Levers stay on the mechanic pages.

### Writing style

- **Lead with what happens.** The first sentence says what happens to the food,
    not what the technique is called.
- **Connect every claim to a method.** If a fact doesn't change what the cook
    does, cut it.
- **Treat agents as causes.** Write "salt draws water out", not "the Salt
    technique".
- **Keep it short.** Use plain words and short sentences, and one idea per
    paragraph.
- **Give numbers only when they're sourced.** Temperatures, times and ratios
    need a citation.

### Sources

- Cite every factual claim with a footnote:
    `Author. ["Title."](URL) *Publication.* Date.`
- Add a line under the footnote when it helps, such as the exact figure the
    source gives.
- Prefer food-science references, test kitchens and peer-reviewed work. Avoid
    content farms and pages with garbled or spun text.
- Paraphrase. Quote only when the exact wording matters, and keep quotes short.

### Linking recipes

- Tag each recipe with `technique/<mechanic-slug>` for each mechanic it relies
    on. A mechanic page's Recipes list is built from these tags. Methods and
    agents aren't tagged.
- On method pages, name recipes in prose, saying how each one uses the method.

### Changing existing pages

- **Merging:** If two pages describe the same thing, merge them and update the
    links that point to the page that goes away.
- **Splitting:** If a mechanic page covers two mechanisms with different levers,
    split it.
- **Redirecting:** When you move or rename a page, update every recipe tag and
    every link that points to it.
