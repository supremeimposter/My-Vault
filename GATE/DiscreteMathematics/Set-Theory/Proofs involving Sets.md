---
pdf: lec-10-12
module: 5
lecture: "10"
date: 2023-10-07T09:08:00
version:
  - DM-24
last-revision: 
notes-taken: false
---
# Proofs involving Sets

> [!youtube]  [Proofs involving Sets](https://www.youtube.com/watch?v=MqdZvHmkgvo) lec-10

## Proofs involving Subsets

![[Proofs involving Sets-20240719102921641.webp]]

Pick any arbitrary element $a \in A$, then prove that $a \in B$.

![[Proofs involving Sets-20240719105742471.webp]]

## Proving Equality of Sets

![[Proofs involving Sets-20240719103342028.webp]]

To prove equality of sets $A$ and $B$, prove the quantified statement, $\forall x\: \bigg(\, \big(\, (x \in A) \to (x \in B) \, \big) \land \big(\, (x \in B) \to (x \in A)\, \big)\, \bigg)$

![[Proofs involving Sets-20240718174457985.webp]]

## Proofs involving Powersets

> [!youtube] [Proofs involving Power Sets](https://www.youtube.com/watch?v=ibrifgABSok) - Lec-12

$$
X \subseteq A \text{ iff } X \in \mathcal{P}(A)
$$
- $\phi$ may NOT be in a set $A$, but definitely $\phi \in \mathcal{P}(A)$
$$\phi \in \mathcal{P}(A) \text{ , for any set } A$$
$$
A \in \mathcal{P}(A) \text{ since } A \subseteq A
$$

- Every element in $\mathcal{P}(A)$ is a set either empty or non-empty.