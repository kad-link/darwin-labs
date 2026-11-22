
export function generationsToTarget(history, target) {
  const hit = history.find((h) => h.best >= target);
  return hit ? hit.generation : -1;
}


export function lastImprovementGeneration(history) {
  if (history.length === 0) return -1;
  let bestSoFar = -Infinity;
  let last = history[0].generation;
  for (const h of history) {
    if (h.best > bestSoFar) {
      bestSoFar = h.best;
      last = h.generation;
    }
  }
  return last;
}