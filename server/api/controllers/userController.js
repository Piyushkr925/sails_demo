module.exports={
    async create(req, res) {
        try {
          const { firstName, lastName } = req.body;
          const user = await user.create({ firstName, lastName }).fetch();
          return res.json(user);
        } catch (error) {
          return res.serverError(error);
        }
      },
      async find(req, res) {
        try {
          const users = await user.find();
          return res.json(users);
        } catch (error) {
          return res.serverError(error);
        }
      },
      async findOne(req, res) {
        try {
          const user = await user.findOne({ id: req.params.id });
          if (!user) {
            return res.notFound('User not found');
          }
          return res.json(user);
        } catch (error) {
          return res.serverError(error);
        }
      },
      async update(req, res) {
        try {
          const { firstName, lastName } = req.body;
          const user = await user.updateOne({ id: req.params.id })
            .set({ firstName, lastName });
          if (!user) {
            return res.notFound('User not found');
          }
          return res.json(user);
        } catch (error) {
          return res.serverError(error);
        }
      },
      async delete(req, res) {
        try {
          const user = await user.destroyOne({ id: req.params.id });
          if (!user) {
            return res.notFound('User not found');
          }
          return res.json(user);
        } catch (error) {
          return res.serverError(error);
        }
      }
}