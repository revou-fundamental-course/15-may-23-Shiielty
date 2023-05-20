// logic hitung luas persegi
function hitungLuas(sisi) {
  return sisi * sisi;
}

// logic hitung keliling persegi
function hitungKeliling(sisi) {
  return 4 * sisi;
}

// luas persegi
const luasInput = document.querySelector("input[name='sisi-luas']");
const luasBtn = document.querySelector("button[name='hitung-luas']");
const luasOutputWrapper = document.querySelector("#luas-output-wrapper");
const hasilLuas = document.querySelector("#hasil-luas");
const luasOutput = document.querySelector("#luas_output");

luasBtn.addEventListener("click", () => {
  if (/^\d+(\.\d{1,2})?$/.test(luasInput.value)) {
    let sisi = luasInput.value;
    let luas = hitungLuas(sisi);

    // menampilkan output
    hasilLuas.textContent = `L = ${sisi} x ${sisi}`;
    luasOutput.textContent = luas;
    luasOutputWrapper.style.display = "block";
  } else if (luasInput.value === "") {
    luasOutputWrapper.style.display = "none";
  }
});

// keliling persegi
const kelilingInput = document.querySelector("input[name='sisi-keliling']");
const kelilingBtn = document.querySelector("button[name='hitung-keliling']");
const kelilingOutputWrapper = document.querySelector(
  "#keliling-output-wrapper"
);
const hasilKeliling = document.querySelector("#hasil-keliling");
const kelilingOutput = document.querySelector("#keliling_output");

kelilingBtn.addEventListener("click", () => {
  if (/^\d+(\.\d{1,2})?$/.test(kelilingInput.value)) {
    let sisi = kelilingInput.value;
    let keliling = hitungKeliling(sisi);

    // menampilkan output
    hasilKeliling.textContent = `K = 4 x ${sisi}`;
    kelilingOutput.textContent = keliling;
    kelilingOutputWrapper.style.display = "block";
  } else if (kelilingInput.value === "") {
    kelilingOutputWrapper.style.display = "none";
  }
});
