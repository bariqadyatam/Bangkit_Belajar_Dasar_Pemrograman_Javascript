const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
    // membuat object newEmployee
    const newEmployee = {
      name: name,
      email: email,
      joinYear: joinYear,
    };
    
    // command untuk menambahkan nilai akhir di object newEmployee
    employees.push(newEmployee);
  }
  
  // Example usage:
  addEmployee('Budi', 'budi@dicoding.com', 2021);
  console.log(employees);
  