let animales = [
    { especie: 'Perro', color: 'blanco', edad: 3, tamaño: 'Mediano', sonido: 'Guau' },
    { especie: 'Gato', color: 'Negro', edad: 2, tamaño: 'Pequeño', sonido: 'Miau' },
    { especie: 'León', color: 'Amarillo', edad: 5, tamaño: 'Grande', sonido: 'Rugido' },
    { especie: 'Elefante', color: 'Gris', edad: 10, tamaño: 'Enorme', sonido: 'Brrrrruuu' }
];
animales.forEach(function(animal) {
    console.log('Especie: ' + animal.especie);
    console.log('Color: ' + animal.color);
    console.log('Edad: ' + animal.edad);
    console.log('Tamaño: ' + animal.tamaño);
    console.log('Sonido: ' + animal.sonido);
});
