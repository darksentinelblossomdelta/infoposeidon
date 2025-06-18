const terminal = document.getElementById('terminal');
  const mediaSection = document.getElementById('media');

  const lines = [
    'Estableciendo conexión con el servidor...',
    'Poseidon esta siendo kchada',
    'Kchada a poseidon ...',
    '',
    'Extrayendo Informacion: POSEIDÓN 🐬🌊',
    '',
    'DNI: 46833975-2',
    'NOMBRES: YEYMY MICHELY',
    'APELLIDOS: LEON DOMINGUEZ',
    'GENERO: FEMENINO',
    'NACIMIENTO: 05/03/1991',
    'EDAD:34 AÑOS',
    'DEPARTAMENTO: LIMA',
    'PROVINCIA: LIMA',
    'DISTRITO: CARABAYLLO',
    'NIVEL EDUCATIVO: SECUNDARIA COMPLETA',
    'ESTADO CIVIL: SOLTERO',
    'ESTATURA: 1.6 MT.',
    'FECHA INSCRIPCION: 11/03/2009',
    'FECHA EMISION: 20/02/2024',
    'FECHA CADUCIDAD: 20/02/2029',
    'DONANTE ORGANOS: NO',
    'PADRE: SEGUNDO VICENTE LEON',
    'MADRE: ELEUTERIA DOMINGUEZ',
    'RESTRICCION: NINGUNA',
    'DIRECCION: MIGUEL GRAU 464 JOVEN EL PROGRESO 1ER SECT',
    'UBIGEO RENIEC: 140105',
    'UBIGEO INE ➾ 228216',
    'UBIGEO SUNAT ➾ 118774.',
  ];

  let index = 0;

  function typeLine() {
    if (index < lines.length) {
      terminal.innerHTML += lines[index] + '\n';
      index++;
      setTimeout(typeLine, 120);
    } else {
      mediaSection.classList.remove('hidden');
    }
  }

  window.onload = typeLine;