import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
async function processData(data) {
  const results = [];

  for (const item of data) {
    try {
      const result = await API.fetch(item.delay, item.simulateError);
      results.push(result);
    } catch (error) {
      throw error; // Membangkitkan error jika fetch gagal
    }
  }

  return results; // Mengembalikan array hasil
}

// Contoh pemanggilan untuk melihat hasil
processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']