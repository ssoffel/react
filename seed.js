const {db, Contact} = require('./server/db')

db.sync({force: true})
  .then(() => {
    return Promise.all([
      Contact.create({name: 'Rey', phone: '777-777-7777', email: 'rey@milleniumfalcon.com'}),
      Contact.create({name: 'Finn', phone: '888-888-8888', email: 'finn@resistance.com'}),
      Contact.create({name: 'Poe', phone: '999-999-9999', email: 'poe@resistance.com'})
    ])
  })
  .then(() => {
    console.log(`
      Seed success!
    `)
    db.close()
  })
  .catch((err) => {
    console.error(`
      Oh noes!
    `)
    console.error(err.stack)
    db.close()
  })
