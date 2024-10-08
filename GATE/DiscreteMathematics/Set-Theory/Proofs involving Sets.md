---
pdf: lec-10-12
module: 5
lecture: "10"
date: 2023-10-07T09:08:00
version:
  - DM-24
last-revision: 2024-07-22T13:48:00
notes-taken: true
---
# Proofs involving Sets

> [!youtube]  [Proofs involving Sets](https://www.youtube.com/watch?v=MqdZvHmkgvo) lec-10

## Proofs involving Subsets

![[Proofs involving Sets-20240719102921641.webp]]

Pick any arbitrary element $a \in A$, then prove that $a \in B$.

![[Proofs involving Sets-20240719105742471.webp]]

> [!observation] 
> ![[Proofs involving Sets-20240722090730441.webp]]

![[Proofs involving Sets-20240722090757412.webp]]

## Proving Equality of Sets

If there are two sets $A, B$, then

$A = B$ iff $A \subseteq B$ and $B \subseteq A$ or
$A = B$ iff $\forall x\: \bigg(\,(x \in A) \to (x \in B) \land (x \in B) \to (x \in A)\,\bigg)$

To show that two sets are equal, it is necessary and sufficient to show that $A \subseteq B$ and $B \subseteq A$.

![[Proofs involving Sets-20240719103342028.webp]]

To prove equality of sets $A$ and $B$, prove the quantified statement, $\forall x\: \bigg(\, \big(\, (x \in A) \to (x \in B) \, \big) \land \big(\, (x \in B) \to (x \in A)\, \big)\, \bigg)$

![[Proofs involving Sets-20240718174457985.webp]]

## Proofs involving Powersets

> [!youtube] [Proofs involving Power Sets](https://www.youtube.com/watch?v=ibrifgABSok) - Lec-12

- Consider a set $A$ and $\mathcal{P} \, (A)$ is the powerset of $A$ and $X$ is a subset of $A$,
$$
X \subseteq A \text{ iff } X \in \mathcal{P}(A)
$$

- $\phi$ may NOT be in a set $A$, but definitely $\phi \in \mathcal{P}(A)$
$$\phi \in \mathcal{P}(A) \text{ , for any set } A$$

- A set is a subset of itself
$$
A \in \mathcal{P}(A) \text{ since } A \subseteq A
$$

- Every element in $\mathcal{P}(A)$ is a set (either empty or non-empty).


> [!example] 
> ![[Proofs involving Sets-20240722143641989.webp]] [stack exchange](https://math.stackexchange.com/questions/332130/prove-that-mathcalpa%E2%8A%86-mathcalpb-if-and-only-if-a%E2%8A%86b)
> ![[Proofs involving Sets-20240722143603789.webp]]


---