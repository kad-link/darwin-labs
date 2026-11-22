# Darwin Labs - Interactive Genetic Algorithm Visualizer

A browser-based educational and experimentation platform for understanding and mastering **Genetic Algorithms (GA)** through step-by-step interactive simulations, real-time analytics, and verified textbook examples.

Inspired by DSA visualizers like [VisuAlgo](https://visualgo.net/en/), Darwin Labs brings evolutionary computing to life with full transport controls, chromosome-level diffing, gene pool heatmaps, diversity metrics, and mathematical validation.

---

## Features

### 1. Multi-Problem Sandbox
- **OneMax Problem**: Maximize the number of `1`s in a binary bit-string (classic GA benchmark).
- **Function Maximization (f(x) = x^2)**: Binary-encoded integer optimization directly from Goldberg (1989).
- **Target String Evolution**: Evolve a population from random letters toward any custom target phrase (e.g., `"HELLO"` or `"DARWIN"`).

### 2. Full Transport Controls
- **Play / Pause / Step / Reset**: Step through each phase of the algorithm individually (Initialize -> Evaluate -> Select -> Crossover -> Mutate -> Replace) or run continuously.
- **Configurable Step Interval**: Adjustable from 5 seconds to 10 seconds per step, featuring a real-time countdown progress bar.

### 3. Hyperparameter Tuning
- **Population Size** (4 to 20)
- **Chromosome Length** (4 to 16 genes)
- **Crossover Rate** (0.00 to 1.00)
- **Mutation Rate** (0.00 to 0.50)
- **Selection Operator**: Roulette Wheel (Fitness Proportionate), Tournament (k=3), or Rank-based
- **Generational Replacement**: Standard generational replacement conforming to core curriculum syllabi.

### 4. Interactive Visualizations and Analytics
- **Population View**: Detailed gene-by-gene layout, parent highlights, crossover cut points, and mutation indicators.
- **Fitness Chart**: High-resolution area and line chart tracking Best, Average, and Worst fitness across generations using Recharts.
- **Gene Pool Heatmap**: Real-time allele frequency distribution across all chromosome positions (loci) to inspect genetic drift and locus locking.
- **Diversity Metric**: Tracking unique population genotypes to observe search-space exploration vs. premature convergence.
- **Textbook Verification**: Complete step-by-step walkthrough reproducing David E. Goldberg's classic 1989 hand calculation with verified arithmetic proof.

---

## Tech Stack

- **React 19**
- **Vite 6**
- **Tailwind CSS v4**
- **Framer Motion**
- **Recharts**
- **Lucide Icons**

---

## Getting Started

### Prerequisites
Node.js 18+ and npm installed.

### Installation
```bash
git clone <repo-url>
cd darwin-labs
npm install
```

### Run Locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

## Testing

Engine logic is covered by unit tests using Node's built-in test runner:

    npm test

Tests include the Goldberg (1989) textbook population (fitness 169, 576, 64, 361) for elitism, CSV export of run history, and convergence metrics. 