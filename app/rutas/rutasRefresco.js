const express=require('express');
const ControladorRefrescos=require('../controlador/ControladorRefrescos');

const Router =express.Router();

Router.get('/',ControladorRefrescos.index)
.post('/',ControladorRefrescos.crear)
.get('/:key/:value',ControladorRefrescos.buscar,ControladorRefrescos.mostrar)
.put('/:key/:value',ControladorRefrescos.buscar,ControladorRefrescos.actualizar)
.delete('/:key/:value',ControladorRefrescos.buscar,ControladorRefrescos.eliminar);

module.exports=Router;

