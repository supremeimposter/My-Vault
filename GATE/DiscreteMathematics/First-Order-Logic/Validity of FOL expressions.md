---
pdf: lec-32, lec-33, lec-34, lec-35
date: 2023-09-24-11:22
version: DM-2024
---

> [!danger] In FOL, Tautology $\not\equiv$ valid

- Valid = Always True
- Satisfiable = Possible to be true (sometime true)
- If valid, then satisfiable. But the converse is NOT true.

> [!abstract] Just think about this
> Can we somehow have an input to make an expression invalid? If not, then the expression is valid.

- Unless explicitly specified otherwise, the domains are non-empty and the domain is same for all the variables.
- Use an abstract domain {a, b, c, $\ldots$} and try to figure out.

- There are two methods to find the validity or satisfiability of FOL expressions.
	1. Logical thinking.
	2. Take a non-empty abstract domain {a, b, c, $\ldots$} unless explicitly specified otherwise and try to make the expression true.

> [!brain] The Domain in FOL is NEVER empty
> In a domain which is empty, there is no need for any logic. No observations can be made. 

- Let M be a FOL expression.
- M is valid iff M is always True for whatever non-empty domain and predicate.
- M is satisfiable iff M is possible to be True, for some domain and some predicate.

> [!tip] Some Tips
> - $\neg\;P(x)\; \lor \; \neg \; Q(x)$ can be considered as $A(x) \; \lor \; B(x)$.
> - When complements are used in the expression, De-Morgan's law of complement can be used.

#### Examples 
- $\forall x\; P(x)$ is satisfiable but not valid.
- $\exists x\; P(x)$ is satisfiable but not valid.

- $\forall x\; (P(x) \lor \neg P(x))$ is always valid.
- $\forall x\; P(x) \lor \forall x\; \neg P(x)$ is satisfiable but not valid.
- $\exists x\;(P(x) \land \neg P(x))$ is NOT satisfiable.
- $\forall x\; P(x) \; \land \; \exists y\; \neg P(y)$ is NOT satisfiable.

---
## Validity of FOL expressions with Implication

- $S = \alpha \rightarrow \beta$ , where $\alpha \; and\; \beta$ are FOL expressions.
- To prove that the given FOL expression S to be invalid, there are two approaches as discussed in [[Tautology in PL#Method 4 - Implication|Implication method]].
- Take a non-empty abstract domain containing {a, b, c, $\ldots$}
- You can put any value (True or False) to the variables and check if the expression is still valid.

> [!hint] Choose either of the approaches accordingly
> Choose any one of the approaches based on which approach demands minimum number of cases to be explored.

- $\alpha \models \beta$ means $\alpha \rightarrow \beta$ is valid in FOL ([[Arguments and Inference#Inference ( $ models$ )|Inference]]).   

> [!help] An interesting observation
> - For two FOL expressions to be logically equivalent, their implication must be valid. It is discussed [[Equivalence of FOL expressions|here]].
> $\alpha \equiv \beta$ means $\alpha \rightarrow \beta$ and $\beta \rightarrow \alpha$ must be valid.

### Examples

1. $\forall x \; (P(x) \land Q(x)) \rightarrow \forall x\; P(x) \land \forall x\; Q(x)$ is valid and its converse is also valid.
2. $\forall x \; (P(x) \land Q(x)) \rightarrow \forall y\; P(y)$ is valid.
3. $\forall x\; P(x) \rightarrow \exists x\; P(x)$ is valid.
4. $\forall x \; (P(x) \lor Q(x)) \rightarrow \forall x\; P(x) \lor \forall x\; Q(x)$ is invalid but satisfiable.
5. $\forall x\; P(x) \lor \forall x\; Q(x) \rightarrow \forall x \; (P(x) \lor Q(x))$ is valid.

---

