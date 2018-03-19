import { Router } from 'express';
import { User } from '../models';

const router = Router();

router.get('/', (req, res, next) => {
    User.all()
        .then(users => {
            res.json(users);
        });
});

router.get('/:id', (req, res, next) => {
    User.findOne({
        where: { id: req.params.id }
    })
        .then(users => {
            res.json(users);
        });
});

router.post('/', (req, res, next) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email    
    })
        .then(user => {
            res.json(user);
        });
});

router.put('/:id', (req, res, next) => {
    User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email    
    },{
        where: { id: req.params.id }
    })
        .then(user => {
            res.json(user);
        });
});

router.delete('/:id', (req, res, next) => {
    User.destroy({
        where: { id: req.params.id }
    })
        .then(
            res.json({message: 'User deleted'})
        );
});

export default router;