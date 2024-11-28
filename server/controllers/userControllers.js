import User from '../models/user.js';

export const createUser = async (req, res) => {
    const { nombre, apellido, telefono, gmail, dni } = req.body;
    console.log('createUser  llamado con:', req.body);

    try {
        const newUser = new User({ nombre, apellido, telefono, gmail, dni });
        await User.create(newUser)
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el usuario', error });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        console.error(err)
        res.json({ message: 'Error getting Users' });
    }
}

export const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error al obtener el usuario', error });

    }
};