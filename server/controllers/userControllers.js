import User from '../models/user.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) => {
    const { nombre, apellido, telefono, gmail, dni, password } = req.body;

    try {
        const existingUser = await User.findOne({ gmail });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
        }

        const existingDNI = await User.findOne({ dni });
        if (existingDNI) {
            return res.status(400).json({ message: 'El DNI ya está registrado' });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            nombre,
            apellido,
            telefono,
            gmail,
            dni,
            password: encryptedPassword,
            nivel: 1
        });

        await User.create(newUser);

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el usuario', error });
    }
};
export const loginUser = async (req, res) => {
    const { gmail, password } = req.body;

    try {
        const user = await User.findOne({ gmail });
        if (!user) {
            return res.status(400).json({ message: 'El correo electrónico no existe' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
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

export const updateUserLevel = async (req, res) => {
    const { id } = req.params;
    const { nivel } = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { nivel }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Nivel actualizado', user });
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el nivel', error });
    }
};

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