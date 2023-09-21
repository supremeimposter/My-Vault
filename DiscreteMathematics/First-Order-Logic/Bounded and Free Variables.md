```ad-abstract
To create a proposition from a predicate, replace all the free variables by some value from the domain or quantify free variables. 
```

- Bounded variables are called quantified variables and free variables are called non-quantified variables.
- Free variables have individual identity and their names cannot be changed, whereas Bounded variables do not have an individual identity.
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

![[Pasted image 20230920135505.png]]

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
Free variables' name should NEVER be changed.
```

- The predicates "E(x) : x is even" and "E(y) : y is even" are different, not the same.

---
### When does quantifiers have no effect on variables?
- Quantifiers have no effect on a predicate, if there are no free variables to bound.
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
---
P : "1 + 2 = 3" = true
$\forall x \; P \equiv P$
$\exists x \; P \equiv P$
```

---
## Scope of a Quantifier
- The part of the logical expression to which a quantifier is applied is called the scope of this quantifier.

```ad-example
![[Pasted image 20230920101319.png]]
![[Pasted image 20230920101759.png]]
```

$$
\begin{array}{}
D : \{ 2, 4, 9 \} \\
E(x) \text{ : x is even} \\
P(x) \text{ : x is prime} \\ \\
\forall x\; (P(x) \rightarrow E(x)) \equiv \forall y\; (P(y) \rightarrow E(y)) \\ \\
\text{ is different from }\\\\
\forall x \; P(x) \rightarrow \forall x \; E(x) \equiv \forall x \; P(x) \rightarrow \forall y \; E(y) \equiv \forall y \; P(y) \rightarrow \forall x \; E(x) 
\end{array}
$$

![[Pasted image 20230920135154.png]]


- Bounded variable's name can be changed along with the quantifier label, to avoid confusion.
- If bounded variables combined with free variables, then its still a predicate. The same variable can be bounded as well as free, in the same formula.
$$
\begin{array}{}
P(x) \text{ : } \forall x \; E(x) \; \lor \; E(x) \\
P(x) = False \; \lor E(x) = E(x)
\end{array}
$$

![[Pasted image 20230920135108.png]]

---
### Nested Quantification

- Every quantified or bounded variable refers to the nearest quantifier with the same name.
$\forall x \; \exists y \; P(x)$, $x$ is bounded by the universal quantifier and not the existential one.
$\forall x\; \exists x \; P(x) \equiv \forall x\; (\exists x \; P(x))$, $x$ is bounded by the nearest existential quantifier.

![[Pasted image 20230920135751.png]]
```ad-attention
Only the nearest quantification is taken, and the furthest quantifiers have no connection to the variable.
```

---

### Renaming a bound variable in a formula

- To avoid confusion because of the nested quantifiers and the variables bounded by them, bounded variables can be renamed.
![[Pasted image 20230920140751.png]]
- A clean formula is one in which both free and bound variables of the same variable does not exists.
![[Pasted image 20230920140905.png]]
- But only the bounded variables can be renamed, a free variable cannot be renamed.
- When changing the name of a bounded variable, it should be different from any free variable that exists in that formula.
- It is better to rename in a manner that every bounded variable is unique and different from free variables.

```ad-caution
A non clean formula does not mean it is invalid, but can be error-prone or confusing sometimes.
```

---

```ad-summary
A proposition can contain only bound variables, and no free variables.
A formula with no bound variables is called an open formula.
A formula with no free variables is called closed formula or sentence.
```
