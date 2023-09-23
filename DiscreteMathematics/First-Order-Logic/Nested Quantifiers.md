- Many interesting First Order Logic statements require a combination of quantifiers.
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
\forall x\; \forall y\; P(x, y)\\
\forall x\; \exists y\; P(x, y)\\
\exists x\; \forall y\; P(x, y)\\
\exists x\; \exists y\; P(x, y)\\
\end{array}
$$

---
## Examples

- There is a number which is lesser than all the number = false
- There is a number which is larger than all the number = false