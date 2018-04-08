'use strict';

const cote = require('cote');

// cliente de conversion de divisas

const requester = new cote.Requester({
  name: 'anbitioticoterapia-client'
});

requester.send({
  type: 'convert', // quienquiera que escuche peticiones 'convert'
  peso: 10, //kg
  dosismg: '5', //en mg
  concentracion: '5' //%
}, res => {
  console.log(`Calculo dosis antibiotico 1er día: --> ${res}`);
});