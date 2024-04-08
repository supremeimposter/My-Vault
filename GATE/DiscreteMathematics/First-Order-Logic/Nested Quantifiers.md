---
pdf: nested-quantifiers.pdf
---
> [!important] Look at all the examples and the diagrams in the pdf

- Nested quantifier means one quantifier is within the scope of other.
- Many interesting First Order Logic statements require a combination of quantifiers.
- They are important to express many expressions in computer science and mathematics.
- The quantifiers must be read from *left to right.*
$$
\forall x\; \exists y\; P(x, y)\; \equiv \; \text{For all x, there exists a y, such that P(x, y)}
$$

## Ordering of quantifiers

- When different quantifiers are used, ordering matters.
$$
\forall x\; \exists y\; \alpha \not\equiv \forall y\; \exists x\; \alpha
$$
$$
\exists x\; \forall y\; \alpha \not\equiv \exists y\; \forall y\; \alpha
$$
- When similar quantifiers are used, ordering does not matter.
$$
\forall x\; \forall y\; \alpha \equiv \forall y\; \forall x\; \alpha
$$
$$
\exists x\; \exists y\; \alpha \equiv \exists y\; \exists x\; \alpha
$$

## Standard templates

$$
\begin{array}{}
\forall x\; \forall y\; P(x, y) \\
\forall x\; \exists y\; P(x, y) \\
\exists x\; \forall y\; P(x, y) \\
\exists x\; \exists y\; P(x, y) \\
\end{array}
$$

- Quantification of two variables : when they are true and when they are false? <mark style="background: #BBFABBA6;">Pg No. 91 - 92</mark>
- Nested quantification is analogous to nested loops in programming.

---
## Examples

- There is a number which is lesser than all the number = false
- There is a number which is larger than all the number = false

```ad-note
For every given nested quantified statements, use the diagram method to understand and interpret the given predicate <mark style="background: #BBFABBA6;">Pg 38 - 40</mark>
```

- how to read nested quantification of more than 2 quantifiers. <mark style="background: #BBFABBA6;">Pg no. - 95</mark>
