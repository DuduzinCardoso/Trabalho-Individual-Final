var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});
router.get("/metrica", function (req, res) {
    usuarioController.metrica(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/registrar", function (req, res) {
    usuarioController.texto(req, res);
})
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;