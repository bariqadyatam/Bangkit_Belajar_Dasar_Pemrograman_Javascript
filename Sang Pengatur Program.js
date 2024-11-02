function categorizeNumber(input) {
    // Cek apakah input adalah tipe data number dan bilangan bulat
    if (typeof input !== 'number' || !Number.isInteger(input)) {
      throw new Error('Input harus berupa bilangan bulat');
    }
  
    // Cek apakah input adalah nol
    if (input === 0) {
      return 'Nol';
    }
  
    // Cek apakah input negatif
    if (input < 0) {
      return 'Negatif';
    }
  
    // Fungsi untuk memeriksa bilangan prima
    function isPrime(num) {
      if (num <= 1) return false; // Bilangan kurang dari atau sama dengan 1 bukan prima
      if (num === 2) return true; // 2 adalah bilangan prima
      if (num % 2 === 0) return false; // Menyaring bilangan genap lebih dari 2
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; // Memeriksa faktor dari 3 hingga akar kuadrat num
      }
      return true; // Jika tidak ada faktor, num adalah prima
    }
  
    // Cek apakah bilangan prima
    if (isPrime(input)) {
      return 'Prima';
    }
  
    // Jika bukan nol, bukan negatif, dan bukan prima, maka pasti genap atau ganjil
    return input % 2 === 0 ? 'Genap' : 'Ganjil';
  }
  
  // Contoh penggunaan
  try {
    console.log(categorizeNumber(0)); // Output: 'Nol'
    console.log(categorizeNumber(-5)); // Output: 'Negatif'
    console.log(categorizeNumber(7)); // Output: 'Prima'
    console.log(categorizeNumber(10)); // Output: 'Genap'
    console.log(categorizeNumber(11)); // Output: 'Prima'
    console.log(categorizeNumber(15)); // Output: 'Ganjil'
  } catch (error) {
    console.error(error.message);
  }