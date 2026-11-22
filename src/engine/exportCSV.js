
export function historyToCSV(history) {
  const header = "generation,best,average,worst";
  const rows = history.map(
    (h) => `${h.generation},${h.best},${h.average},${h.worst}`
  );
  return [header, ...rows].join("\n");
}

export function downloadCSV(filename, csvText) {
  const blob = new Blob([csvText], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}