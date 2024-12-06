exports.getUsers = (req, res) => {
    res.json({ users: ['Alice', 'Bob'] });
};

exports.createUser = (req, res) => {
    const newUser = req.body.name;
    res.status(201).json({ message: `User ${newUser} created.` });
};
