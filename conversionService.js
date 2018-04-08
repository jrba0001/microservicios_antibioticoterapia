'use strict';

// Servicio de calculo dosis anbitioticoterapia mascotas 1 er día

const cote = require('cote');

const responder = new cote.Responder({
  name: 'anbitioticoterapia-servicio'
});

// tabla de conversión
// simboliza mi almacén de datos propio
const rates = {
  var1: 0,
  var2: 0
};

// req: { peso, dosismg, concentracion, tratamiento}
responder.on('convert', (req, done) => {
  console.log('servicio: Calculo dosis antibioticoterapia');
  var mg = req.peso * req.dosismg;
  const resultado = req.concentracion * 1000 / mg

  done(result);
});