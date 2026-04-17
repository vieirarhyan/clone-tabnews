function status(request, response) {
  response.status(200).send({chave : "média"});
}

export default status;