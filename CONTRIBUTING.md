# Contributing

## Contributing techniques

A technique page explains one **mechanism**: a physical or chemical process that
many recipes rely on, whether or not they mention it. Pages are organized by
what happens to the food, not by the ingredient that causes it or the name of
the method.

| Not a technique page | Why                                     | Where it belongs                                    |
| -------------------- | --------------------------------------- | --------------------------------------------------- |
| Salt                 | An agent. It drives several mechanisms. | A lever on Diffusion, Denaturation and Preservation |
| Brining              | A method. It uses a mechanism.          | A method on Diffusion and Denaturation              |
| Diffusion            | A mechanism.                            | Its own page                                        |

### Before you add a page

- **Is it a mechanism?** You should be able to describe it without naming a dish
    or an ingredient. "Proteins unfold and bind together" is a mechanism.
    "Marinating chicken" is not.
- **Is it already covered?** Check the existing pages. A new method or agent
    usually belongs on an existing page as a lever or a method, not on a new
    page.
- **Does a recipe use it?** Every page links to at least one recipe on the site.
    If none uses it yet, add the recipe first or wait.

### Where it goes

Technique pages are flat: each one lives directly under `techniques/`, for
example `techniques/diffusion/`. There are no sections or subpages. Connect
related pages with **See also** links instead.

### Page structure

Each page connects the science to the method in four steps:

1. **Mechanism:** what happens, in one or two plain sentences.
2. **Levers:** what controls it. Agents (salt, acid, fat, sugar, water) go here,
    along with time, temperature, concentration and size. Say which way each
    lever pushes.
3. **Methods:** the named techniques that use those levers, and what each is
    trying to achieve.
4. **Recipes:** where the methods appear on the site.

```markdown
# Diffusion

Salt, sugar and flavor move from where they are concentrated toward where
they are not, so a soak seasons food from the outside in.[^source]

## Levers

- **Time:** the flavored layer deepens the longer the food soaks.
- **Temperature:** warmth speeds diffusion; refrigeration slows it.
- **Distance:** going twice as deep takes about four times as long.

## Methods

### Brining

...

[Soy-marinated eggs](../../recipes/eggs/...) soak for days so the
seasoning reaches the yolk.

## See also

- [Denaturation](...) -- why brined meat stays juicy.

[^source]: Author. ["Title."](https://...) *Publication.* Date.
```

### Writing style

- **Lead with the mechanism.** The first sentence says what happens, not what
    the technique is called.
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

- Tag each recipe that uses the technique with `technique/<page-slug>`. The
    page's Recipes list is built from these tags.
- Name at least one recipe in the page's prose, saying how it uses the
    mechanism.
- When a technique spans several pages, link them under **See also** with a
    one-line reason for each link.

### Changing existing pages

- **Merging:** If two pages describe the same mechanism, merge them and move the
    methods under the surviving page.
- **Splitting:** If a page covers two mechanisms with different levers, split
    it.
- **Redirecting:** When you move or rename a page, update every recipe tag and
    **See also** link that points to it.
