---
pdf: 
module: 5
lecture: 16C
date: 2024-02-16T12:54:00
version:
  - TOC-24
last-revision: 
notes-taken: false
tags:
  - TheoryOfComputation/Decidability
  - TheoryOfComputation/TuringMachine
  - TheoryOfComputation/Language
---
# Rice Theorem
> [!youtube] 
> [Lecture 16C - Rice Theorem | Undecidability | Unrecognizability | Theory of Computation - YouTube](https://www.youtube.com/watch?v=2SeZIr2sVQ4)

- Rice theorem is applicable only on the properties of languages of Turing Machine.


> [!header] When Rice theorem is ***NOT*** applicable?


> [!header] Trivial and Non-Trivial Property

- All non-trivial properties of RE languages are undecidable.
- All trivial properties of RE languages are decidable.

> [!tip] 
> Trivial properties of anything is desirable, because it is trivial. Its a straight ***YES*** or ***NO*** answer.

![[Rice Theorem-20240216212030575.webp]]

> [!header] Monotonic and Non-monotonic Property

- Every trivial property is monotonic, but the converse is ***NOT*** true.
- Rice theorem cannot say that something is RE but not REC i.e. never say that something is recognizable but not decidable.

> [!template] Template for Rice Theorem
> $J =$ Given a Turing Machine $M$, does $\mathcal{L}(M)$ have the property $P$ ?
> $J =$ $\{ \langle M \rangle \mid M$ is a Turing machine and $\mathcal{L}(M)$ has some property $P \}$   

# Language Property vs Machine Property

