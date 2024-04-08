> [!tip] Pg No. 86
> DM-23/First-Order-Logic/english-fol_translation.pdf

```ad-note
at least = $\exists$
at most = $\forall$
exactly = both quantifiers with $\exists$ in the outer and $\forall$ as the inner quantifier
every other = (x $\not=$ y)
```

---
There is at least one element

$\exists x\; (x)$`

---
There are at least two elements 

$\exists x \exists y\; (x \not= y)$

---
There are at least three elements

$\exists x\; \exists y\; \exists z \; (\; (x \not= y) \land (x \not= z) \land (y \not= z) \;)$

---
There is at most one element
$\equiv$ There is no element $\lor$ There is exactly one element

$\forall x \; \forall y\; (x=y)$

---
> [!attention] Tricky 

There is exactly one element
$\equiv$ There is at most one element $\land$ There is at least one element

$\exists x\; cube(x)\; \land \forall x\; \forall y\; (\; (cube(x) \land cube(y)) \rightarrow (x = y) \;)$
$\equiv \exists x\; (\; cube(x) \land \forall y\;(cube(y) \rightarrow (x = y)) \;)$
$\equiv \exists x\; \forall x\;(cube(x) \leftrightarrow (x=y))$

---
There are at most two elements

$$
\forall x\; \forall y\; \forall z\; (\; (cube(x) \land cube(y) \land cube(z)) \rightarrow (\;(x = y) \lor (y = z) \lor (x = z)\;) \; )
$$
---
There are exactly two elements

$$
\exists x\; \exists y\; (\; (x \not= y) \land cube(x) \land cube(y) \land \; \forall z\; (cube(z) \rightarrow (x = y) \lor (x = z)) \;)
$$

---

## Examples

> [!tip] Pg No. 115
> DM-23/First-Order-Logic/english-fol_translation.pdf

- In property (predicate over 1 variable) like English statements, x is not bounded with a quantifier. It has to remain a predicate over variable x.
- "infinite number" means there exists a number larger than x.
- 