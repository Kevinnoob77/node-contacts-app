import { Router } from 'express';
import { get, getAll, create, update, remove } from '../controllers/contacts.controller.js';
import pool from '../config/database.js';

const router = Router();

// router.get('/', (req, res) => res.redirect('/home'))

// router.get('/home', async (req, res) => res.render('home', {
//    contacts: (await pool.query('SELECT * FROM contacts'))[0]
// }))

router.get('/contacts/:id', get)
router.get('/contacts', getAll)
router.post('/contacts', async (req, res, next) => {
   const [rows] = await pool.query('SELECT * FROM contacts')

   if (rows.length >= 40)
      await pool.query('TRUNCATE TABLE contacts')

   next()
}, create)
router.put('/contacts/:id', update)
router.delete('/contacts/:id', remove)

export default router
