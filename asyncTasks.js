// A. 
function greetA(name) {
  return new Promise((resolve, reject) => {
    if (!name) reject("Error: Name cannot be empty!");
    else resolve(`Good day, ${name}!`);
  });
}

async function exerciseA() {
  const name = document.getElementById('nameA').value;
  try {
    const result = await greetA(name);
    document.getElementById('resultA').textContent = result;
  } catch (err) {
    document.getElementById('resultA').textContent = err;
  }
}

// B.
function greetB(name) {
  return new Promise((resolve, reject) => {
    if (!name) reject("Error: Name cannot be empty!");
    else setTimeout(() => resolve(`Good day, ${name}!`), 5000);
  });
}

async function exerciseB() {
  const name = document.getElementById('nameB').value;
  try {
    const result = await greetB(name);
    document.getElementById('resultB').textContent = result;
  } catch (err) {
    document.getElementById('resultB').textContent = err;
  }
}

// C.
function greetC(name) {
  return new Promise((resolve, reject) => {
    if (!name) reject("Error: Name cannot be empty!");
    else setTimeout(() => resolve(`Good day, ${name}!`), 7000);
  });
}

async function exerciseC() {
  const name = document.getElementById('nameC').value;
  try {
    const result = await greetC(name);
    document.getElementById('resultC').textContent = result;
  } catch (err) {
    document.getElementById('resultC').textContent = err;
  }
}

// D.
function greetD(name) {
  return new Promise((resolve, reject) => {
    if (!name) reject("Error: Name cannot be empty!");
    else resolve(`Good day, ${name.toUpperCase()}!`);
  });
}

async function exerciseD() {
  const name = document.getElementById('nameD').value;
  try {
    const result = await greetD(name);
    document.getElementById('resultD').textContent = result;
  } catch (err) {
    document.getElementById('resultD').textContent = err;
  }
}

// E.
function greetE(name) {
  return new Promise((resolve, reject) => {
    if (!name || name.length < 5)
      reject("Error: Name cannot be empty or less than 5 characters!");
    else resolve(`Good day, ${name.toUpperCase()}!`);
  });
}

async function exerciseE() {
  const name = document.getElementById('nameE').value;
  try {
    const result = await greetE(name);
    document.getElementById('resultE').textContent = result;
  } catch (err) {
    document.getElementById('resultE').textContent = err;
  }
}

// F.
function greetF(name) {
  return new Promise((resolve, reject) => {
    if (!name || name.length < 5)
      reject("Error: Name cannot be empty or less than 5 characters!");
    else {
      const reversed = name.split('').reverse().join('');
      resolve(`Good day, ${reversed}!`);
    }
  });
}

async function exerciseF() {
  const name = document.getElementById('nameF').value;
  try {
    const result = await greetF(name);
    document.getElementById('resultF').textContent = result;
  } catch (err) {
    document.getElementById('resultF').textContent = err;
  }
}

// G.
function squareNumber(num) {
  return new Promise((resolve, reject) => {
    const n = Number(num);
    if (!Number.isInteger(n)) reject("Error: Value must be an integer!");
    else resolve(`${n} is ${n * n} when doubled`);
  });
}

async function exerciseG() {
  const num = document.getElementById('numG').value;
  try {
    const result = await squareNumber(num);
    document.getElementById('resultG').textContent = result;
  } catch (err) {
    document.getElementById('resultG').textContent = err;
  }
}

// H.
function cubeNumber(num) {
  return new Promise((resolve, reject) => {
    const n = Number(num);
    if (!Number.isInteger(n)) reject("Error: Value must be an integer!");
    else {
      setTimeout(() => resolve(`${n} is ${n ** 3} when cubed`), 5000);
    }
  });
}

async function exerciseH() {
  const num = document.getElementById('numH').value;
  try {
    const result = await cubeNumber(num);
    document.getElementById('resultH').textContent = result;
  } catch (err) {
    document.getElementById('resultH').textContent = err;
  }
}

// I.
let failCount = 0;

function checkNumberRange(num) {
  return new Promise((resolve, reject) => {
    const n = Number(num);
    if (n >= 1 && n <= 10) resolve(`Yes, ${n} is between 1 and 10`);
    else reject("Error: Number not between 1 and 10");
  });
}

async function exerciseI() {
  const num = document.getElementById('numI').value;
  try {
    const result = await checkNumberRange(num);
    document.getElementById('resultI').textContent = result;
    failCount = 0;
  } catch (err) {
    failCount++;
    if (failCount >= 3) {
      document.getElementById('resultI').textContent =
        "You already failed three times, so no chances anymore";
    } else {
      document.getElementById('resultI').textContent = err;
    }
  }
}
