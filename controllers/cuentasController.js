class userData {
    constructor(id, isActive, picture, balance, client, gender) {
        this.id = id;
        this.isActive = isActive;
        this.picture = picture;
        this.balance = balance;
        this.client = client;
        this.gender = gender;
    }
}

var user1 = new userData("1", true, "http://placehold.it/32x32", 2853.33, "Ana García", "femenino");
var user2 = new userData("2", false, "http://placehold.it/32x32", 1500.50, "Carlos López", "masculino");
var user3 = new userData("3", true, "http://placehold.it/32x32", 3200.75, "María Rodríguez", "femenino");
var user4 = new userData("4", true, "http://placehold.it/32x32", 1850.25, "Juan Martínez", "masculino");
var user5 = new userData("5", false, "http://placehold.it/32x32", 2750.80, "Laura Hernández", "femenino");
var user6 = new userData("6", true, "http://placehold.it/32x32", 4100.90, "Roberto Silva", "masculino");
var user7 = new userData("7", true, "http://placehold.it/32x32", 1950.60, "Sofia Castro", "femenino");

const cuentas = [user1, user2, user3, user4, user5, user6, user7];

const obtenerTodasLasCuentas = (req, res) => {
  try {
    res.json({
      count: cuentas.length,
      data: cuentas
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error interno del servidor',
      message: error.message
    });
  }
};

const obtenerCuentaPorId = (req, res) => {
  try {
    const { id } = req.params;
    const cuenta = cuentas.find(c => c._id === id);
    
    if (cuenta) {
      res.json({
        finded: true,
        account: cuenta
      });
    } else {
      res.json({
        finded: false,
        account: null
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Error interno del servidor',
      message: error.message
    });
  }
};

const buscarCuentas = (req, res) => {
  try {
    const { id, nombre, genero } = req.query;
    let resultados = [...cuentas];

    if (id) {
      resultados = resultados.filter(c => c._id === id);
    }

    if (nombre) {
      resultados = resultados.filter(c => 
        c.name.toLowerCase().includes(nombre.toLowerCase())
      );
    }

    if (genero) {
      resultados = resultados.filter(c => 
        c.gender.toLowerCase() === genero.toLowerCase()
      );
    }

    if (resultados.length === 0) {
      res.json({
        finded: false,
        message: 'No se encontraron cuentas con los criterios especificados'
      });
    } else if (resultados.length === 1) {
      res.json({
        finded: true,
        account: resultados[0]
      });
    } else {
      res.json({
        finded: true,
        data: resultados,
        count: resultados.length
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Error interno del servidor',
      message: error.message
    });
  }
};

const obtenerBalanceCuentas = (req, res) => {
  try {
    const cuentasActivas = cuentas.filter(c => c.isActive === true);
    
    if (cuentasActivas.length === 0) {
      res.json({
        status: false,
        accountBalance: 0,
        message: 'No hay cuentas activas para calcular el balance'
      });
    } else {
      const totalBalance = cuentasActivas.reduce((sum, cuenta) => {
        return sum + parseFloat(cuenta.balance);
      }, 0);

      res.json({
        status: true,
        accountBalance: totalBalance.toFixed(2),
        cuentasActivas: cuentasActivas.length,
        cuentasTotales: cuentas.length
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Error interno del servidor',
      message: error.message
    });
  }
};

module.exports = {
  obtenerTodasLasCuentas,
  obtenerCuentaPorId,
  buscarCuentas,
  obtenerBalanceCuentas
};