// No.9184 신나는 함수 실행

let input = ["1 1 1", "2 2 2", "10 4 6", "50 50 50", "-1 7 18", "-1 -1 -1"];

const dp = new Array(21);
for (let i = 0; i < 21; ++i) {
  dp[i] = new Array(21);
  for (let j = 0; j < 21; ++j) {
    dp[i][j] = new Array(21).fill(0);
  }
}

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;

  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (dp[a][b][c] !== 0) return dp[a][b][c];

  if (a < b && b < c) {
    dp[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return dp[a][b][c];
  }
  dp[a][b][c] =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1);
  return dp[a][b][c];
}

for (let line of input) {
  let [a, b, c] = line.split(" ").map((num) => Number(num));
  if (a === -1 && b === -1 && c === -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
