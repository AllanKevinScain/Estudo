function measureExecutionTime(fn, n) {
  const start = performance.now();
  const result = fn(n);
  const end = performance.now();
  const timeInSeconds = (end - start) / 1000;
  console.log(`${fn.name} took ${timeInSeconds} seconds`);
  return result;
}

function memo_fibonacci(n, f) {
  if (f[n] >= 0) {
    return f[n];
  }
  if (n <= 2) {
    return 1;
  } else {
    f[n] = memo_fibonacci(n - 1, f) + memo_fibonacci(n - 2, f);
  }
  return f[n];
}

function fibonacciTopDown(n) {
  const f = [];
  for (let i = 0; i < n; i++) {
    f[i] = -1;
  }

  return memo_fibonacci(n - 1, f) + memo_fibonacci(n - 2, f);
}

function fibonacciBottomUp(n) {
  let F = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let x;
    if (i < 2) {
      x = 1;
    } else {
      x = F[i - 1] + F[i - 2];
    }
    F[i] = x;
  }

  return F[n];
}

function fibonacci(n) {
  if (n < 2) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

measureExecutionTime(fibonacciTopDown, 50);
measureExecutionTime(fibonacciBottomUp, 50);
measureExecutionTime(fibonacci, 50);
