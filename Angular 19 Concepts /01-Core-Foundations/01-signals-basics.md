# Signals Basics

## 1) One-line Meaning

Signals are reactive values that notify Angular exactly where UI needs update.

## 2) Why It Exists

- Problem this concept solves: simpler local state and predictable UI updates.
- What goes wrong without it: overuse of manual subscriptions and harder state tracking.

## 3) Mental Model

A signal is like a smart variable with a "notify dependents" system built in.

## 4) Syntax / API (minimal)

```ts
const count = signal(0);
const doubled = computed(() => count() * 2);

function inc() {
  count.update(v => v + 1);
}
```

## 5) Real Use-case

- Scenario: counter, filters, local UI states, wizard steps.
- Why this approach: less boilerplate than a full observable chain for local state.

## 6) Common Mistakes

- Mutating nested objects directly instead of using `set`/`update`.
- Using effects for pure derivations (should use `computed`).

## 7) Interview Q&A

- Q1: Difference between signal and observable?
- Q2: When to use `computed` vs `effect`?

## 8) Proof Links

- Code proof: `../proofs/signal-counter-proof.ts`

## 9) 60-second Recall Prompt

Signals store state, computed derives state, effect reacts to changes.

## 10) Revision Log

- [ ] Day 1 recall done
- [ ] Day 3 recall done
- [ ] Day 7 teach-back done
- [ ] Day 14 interview question done

