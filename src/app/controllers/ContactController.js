class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
  }

  show() {
    // Obter um registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
