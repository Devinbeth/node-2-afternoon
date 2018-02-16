module.exports = {
    create: (req, res) => {
      const db = req.app.get('db');
      const {name, description, price, imageurl} = req.body;
      db.create_product([name, description, price, imageurl])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    },
  
    getOne: (req, res) => {
      const db = req.app.get('db');
      const id = req.params.id;
      db.read_product([id])
        .then(product => res.status(200).send(product))
        .catch(() => res.status(500).send() );
    },
  
    getAll: (req, res) => {
      const db = req.app.get('db');
      db.read_products()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send() );
    },
  
    update: (req, res) => {
      const db = req.app.get('db');
      const {params, body} = req;
      db.update_product([params.id, body.name, body.description, body.price, body.imageurl])
        .then((product) => res.status(200).send(product))
        .catch(() => res.status(500).send());
    },
  
    delete: (req, res) => {
      const db = req.app.get('db');
      const id = req.params.id;
      db.delete_product([id])
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send());
    }
  };
  