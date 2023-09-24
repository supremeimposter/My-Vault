---
pdf: lec-32, lec-33, lec-34, lec-35
date: 2023-09-24-11:22
version: DM-2024
---
> [!abstract] Just think about this
> Can we somehow have an input to make an expression invalid? If not, then the expression is valid.

- Unless explicitly specified otherwise, the domains are non-empty and the same domain for all the variables.
- Use an abstract domain {a, b, c, $\ldots$} and try to figure out.

- There are two methods to find the validity of FOL expressions
	1. Logical thinking 
	2. Take a non-empty abstract domain {a, b, c, $\ldots$} unless explicitly specified otherwise and try to make the expression true.


> [!info] An interesting argument
> In a domain which is empty, there is no need for any logic.

- $\forall x\; (P(x) \lor \neg P(x))$ is always valid.
- $\forall x\; P(x) \lor \forall x\; \neg P(x)$ is satisfiable but not valid.
- $\exists x\;(P(x) \land \neg P(x))$ is NOT satisfiable.
- $\forall x\; P(x) \; \land \; \exists y\; \neg P(y)$ is unsatisfiable.

---
## FOL expressions with Implication

- $S = \alpha \rightarrow \beta$ , where $\alpha \; and\; \beta$ are FOL expressions.
- To prove that the given FOL expression S to be invalid, $\alpha$ has to be True and $\beta$ has to be False.
- Take a non-empty abstract domain containing {a, b, c, $\ldots$}
- There are two approaches as discussed in [[Tautology in Propositional Logic#Method 4 - Implication|Implication method]]. 
- You can put any value (True or False) to the variables and check if the expression is still valid.

> [!hint] Choose either of the approaches accordingly
> Choose any one of the approaches based on which approach demands minimum number of cases to be explored.

> [!help] An interesting observation
> - For two FOL expressions to be logically equivalent, their implication must be valid.
> $\alpha \equiv \beta$ means $\alpha \rightarrow \beta$ and $\beta \rightarrow \alpha$ must be valid (tautology).

### Examples

1. $\forall x \; (P(x) \land Q(x)) \rightarrow \forall x\; P(x) \land \forall x\; Q(x)$ is valid and its converse is also valid.
2. $\forall x \; (P(x) \land Q(x)) \rightarrow \forall y\; P(y)$ is valid.
3. $\forall x \; (P(x) \lor Q(x)) \rightarrow \forall x\; P(x) \lor \forall x\; Q(x)$ is invalid but satisfiable.
4. $\forall x\; P(x) \lor \forall x\; Q(x) \rightarrow \forall x \; (P(x) \lor Q(x))$ is valid.

> [!note] Extended note
> Detailed discussion on quantifiers over logical connectives using implication is [[Distribution of Quantifiers over Logical Connectives|here]] 



