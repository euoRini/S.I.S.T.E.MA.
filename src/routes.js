const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const AdminsController = require('./controllers/AdminsController');
const RecargaController = require ('./controllers/RecargaController');
const VendedorController = require ('./controllers/VendedorController');
const VendaController = require ('./controllers/VendaController');
const PagamentoController = require ('./controllers/PagamentoController');
const AcessoController = require ('./controllers/AcessoController');
const ProdutoController = require ('./controllers/ProdutoController');

const routes = express.Router();

routes.get('/',(req,res)=>{ res.send('Sistema  em funcionamento...'); });
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
routes.post('/systemlogin', AdminsController.login);
////////////////////////////////////////////////////////////////
routes.post('/login', VendedorController.login);
////////////////////////////////////////////////////////////////
// routes.use(authMiddleware);
routes.use(cors());
////////////////////////////////////////////////////////////////
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:matricula', UserController.update);
routes.get('/users/r/:matricula', UserController.findRecharge);
routes.get('/users/:matricula', UserController.credenciais);
routes.delete('/users/:matricula', UserController.delete);
////////////////////////////////////////////////////////////////
routes.post('/admins', AdminsController.store);
routes.put('/admins/:login', AdminsController.update);
routes.delete('/admins/e/:email', AdminsController.deleteByEmail);
routes.delete('/admins/l/:login', AdminsController.deleteByLogin);
routes.get('/admins/l/:login', AdminsController.findBylogin);
routes.get('/admins/e/:email', AdminsController.findByemail);
routes.get('/admins', AdminsController.index);
////////////////////////////////////////////////////////////////

routes.get('/recargas', RecargaController.index);
routes.post('/recargas/:matricula', RecargaController.store); //**?**?**?**
routes.put('/recargas/:matricula', UserController.update);
////////////////////////////////////////////////////////////////

routes.delete('/vendedores/m/:matricula', VendedorController.deleteByMatricula);
routes.delete('/vendedores/e/:email', VendedorController.deleteByEmail);
routes.get('/vendedores/e/:email', VendedorController.findByEmail);
routes.get('/vendedores/m/:matricula', VendedorController.findByMatricula);
routes.get('/vendedores', VendedorController.index);
routes.post('/vendedores', VendedorController.store);
routes.put('/vendedores', VendedorController.update);
////////////////////////////////////////////////////////////////

routes.get('/vendas', VendaController.index);
routes.post('/vendas/:matricula/',VendaController.store);//**?**?**?**
////////////////////////////////////////////////////////////////

routes.get('/pagamentos', PagamentoController.index);
routes.post('/pagamentos/:id_venda', PagamentoController.store);//**?**?**?**
////////////////////////////////////////////////////////////////

routes.put('/acessos/:id_acesso/', AcessoController.confirm);
routes.get('/acessos', AcessoController.index);
routes.get('/acessos/requests', AcessoController.notConfirmed);
routes.get('/acessos/allow', AcessoController.Confirmed);
routes.get('/acessos/a/:login/', AcessoController.indexAdmin);
routes.get('/acessos/v/:matricula/', AcessoController.indexVendedor);
routes.post('/acessos/:matricula', AcessoController.store);
routes.get('/acessos/date/:data/', AcessoController.findByDate);

////////////////////////////////////////////////////////////////

routes.post('/produtos/:id_venda/', ProdutoController.addProdutosVenda); //**?**?**?**
routes.delete('/produtos/:nome', ProdutoController.deleteByName);
routes.get('/produtos/:nome', ProdutoController.findByName);
routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id_venda/', ProdutoController.produtosVenda);
routes.post('/produtos', ProdutoController.store);
////////////////////////////////////////////////////////////////
module.exports = routes;
