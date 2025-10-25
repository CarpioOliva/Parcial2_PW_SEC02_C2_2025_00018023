const express = require('express');
const router = express.Router();
const {
  obtenerTodasLasCuentas,
  obtenerCuentaPorId,
  buscarCuentas,
  obtenerBalanceCuentas
} = require('../controllers/cuentasController');

router.get('/cuentas', obtenerTodasLasCuentas);

router.get('/cuenta/:id', obtenerCuentaPorId);

router.get('/buscar', buscarCuentas);

router.get('/cuentasBalance', obtenerBalanceCuentas);

module.exports = router;