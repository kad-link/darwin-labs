import { test } from "node:test";
import assert from "node:assert/strict";
import { generationsToTarget, lastImprovementGeneration } from "./convergence.js";

const history = [
  { generation: 0, best: 10 },
  { generation: 1, best: 14 },
  { generation: 2, best: 14 },
  { generation: 3, best: 16 },
  { generation: 4, best: 16 },
];

test("finds first generation reaching the target", () => {
  assert.equal(generationsToTarget(history, 14), 1);
  assert.equal(generationsToTarget(history, 16), 3);
});

test("returns -1 when target is never reached", () => {
  assert.equal(generationsToTarget(history, 99), -1);
});

test("finds the last generation where best improved", () => {
  assert.equal(lastImprovementGeneration(history), 3);
  assert.equal(lastImprovementGeneration([]), -1);
});