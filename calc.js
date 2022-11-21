const N1 = document.getElementById("n1");
const N2 = document.getElementById("n2");
const Result = document.getElementById("result");
const sumUP = document.getElementById("sumUp");
sumUP.addEventListener("click", () => {
  const Total = parseInt(N1.value) + parseInt(N2.value);
  Result.innerHTML = Total;
});
const n1 = document.getElementById("p1");
const n2 = document.getElementById("p2");
const ResultP = document.getElementById("resultP");
const times = document.getElementById("timesUp");
times.addEventListener("click", () => {
  const Totalp = parseInt(p1.value) * parseInt(p2.value);
  ResultP.innerHTML = Totalp;
});
