function hello(name, origin = "Bandung") {
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

let rahmat = hello("Rahmat", "Semarang");
let indra = hello("Indra");

console.log(rahmat); // Output: Halo! Nama saya Rahmat. Saya tinggal di Semarang.
console.log(indra);  // Output: Halo! Nama saya Indra. Saya tinggal di Bandung.
