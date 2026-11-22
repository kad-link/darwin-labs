import { test } from "node:test";
import assert from "node:assert/strict";
import { historyToCSV } from "./exportCSV.js";

test("converts history to CSV with header", () => {
  const history = [
    { generation: 0, best: 576, average: 293, worst: 64 },
    { generation: 1, best: 729, average: 438.5, worst: 144 },
  ];
  assert.equal(
    historyToCSV(history),
    "generation,best,average,worst\n0,576,293,64\n1,729,438.5,144"
  );
});

test("empty history gives only the header", () => {
  assert.equal(historyToCSV([]), "generation,best,average,worst");
});