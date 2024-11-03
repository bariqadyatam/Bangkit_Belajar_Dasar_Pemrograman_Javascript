function fibonacci(n) {
    // Basis: jika n adalah 0, kembalikan 0
    if (n === 0) {
      return 0;
    }
    // Basis: jika n adalah 1, kembalikan 1
    else if (n === 1) {
      return 1;
    }
    // Rekursi: kembalikan jumlah dari dua angka Fibonacci sebelumnya
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Fungsi untuk menghasilkan deret Fibonacci hingga elemen ke-n
  function fibonacciSeries(n) {
    const series = [];
    for (let i = 0; i <= n; i++) {
      series.push(fibonacci(i));
    }
    return series;
  }
  
  // Jangan hapus kode di bawah ini!
  export { fibonacci, fibonacciSeries };