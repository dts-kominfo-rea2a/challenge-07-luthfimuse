const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    let ixx = await promiseTheaterIXX();
    let vgc = await promiseTheaterVGC();

    let filterHasilEmosiIxx = ixx.filter(
      hasilSetelahMenonton => (hasilSetelahMenonton.hasil === emosi)
    ).length

    let filterHasilEmosiVgc = vgc.filter(
      hasilSetelahMenonton => (hasilSetelahMenonton.hasil == emosi)
    ).length

    let hasil = filterHasilEmosiIxx + filterHasilEmosiVgc;

    return hasil;

  } catch (error) {
    return `${error}`;
  }
  
};


module.exports = {
  promiseOutput,
};
