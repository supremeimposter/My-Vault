```ad-abstract
To create a proposition from a predicate, replace all the free variables by some value from the domain or quantify free variables. 
```

- Bounded variables are called quantified variables and free variables are called non-quantified variables.
- Proposition does not contain any variables, whereas predicates (propositional functions) take variables.

![[Pasted image 20230919212107.png]]

- Free variables are free to take any values from their domain. Bounded variables are bounded by a quantifier and do not take any values, and are dummy variables.

$$
\forall x \; E(x) \; \lor \; E(y) \; = \; P(y)
$$
- $\forall x \; E(x)$, here $x$ is a bounded variable and $E(y)$, here $y$ is a free variable.
$$
\forall n \; E(2, n) \text{ is a proposition whereas }
E(2, n) \text{ is a predicate.}
$$

---
### What happens when a predicate is bounded by a quantifier?
- When a predicate is bounded by a quantifier, the variable becomes dummy and the predicate becomes a proposition.
$$
\begin{array}{}
E(x) = \text{ x is even}\\
\forall x \; E(x) \equiv \forall y\; E(y) \equiv \forall m \; E(m)
\end{array}
$$
- "For every natural number x, x is even" $\equiv$ "Every natural number is even".
- Here it is no longer a predicate, it is a proposition.

---
### Predicate vs proposition in case of variables

- $P(y) : \forall x \; P(x, y)$ is a **predicate** in which $x$ is a bounded variable and $y$ is a free variable.
- $P(2) : \forall x \; P(x, 2)$ is a **proposition** because there is no free variable and $x$ is a bounded variable.

```ad-note
P(y) is a predicate but P(2) is a proposition.
```

- $S(y) : \exists x \; (x \gt y)$ is a valid predicate
- $S(x) : \exists x \; (x \gt y)$ is not a valid predicate, as $x$ should not be a input as it is bounded.
- $S(y) : \exists x \; E(x)$ should not be a predicate, since $\forall x\; E(x)$ is a proposition.

```ad-important
Bounded variable should NEVER take a variable.
```

### When does quantifiers have no effect on variables?
- Quantifiers have no effect on a predicate, if it does not contain the variable it is trying to bound.
- If $\alpha$ does not contain the free variable $x$, then
$$
\begin{array}{rcl}
\forall x \; \alpha \equiv \alpha\\
\exists x \; \alpha \equiv \alpha\\\\
\forall m \; \alpha \not\equiv \alpha\\
\exists k \; \alpha \not\equiv \alpha
\end{array}
$$
- For $\forall m \; \alpha \text{ and } \exists k \; \alpha$, it depends on $\alpha$.

```ad-example
D $\in \mathbb{Z}$
E(y) : y is even

$\forall x \; \exists x \; E(x)$
if $\alpha = \exists x \; E(x)$, then
$\forall x \; \alpha \; \equiv \; \alpha$
```

---

```ad-summary
A proposition can contain only bound variables, no free variables.
```
