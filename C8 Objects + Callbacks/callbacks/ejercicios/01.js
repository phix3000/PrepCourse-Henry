function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // NOTA: no debes retornar nada.
   // Tu código:
   cb(invocarCallback);
}

module.exports = invocarCallback;
