const User = require('../model/user_model');

const userController = () => {
    const createUser = async (req,res) =>{
        try{
            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
            })
            user.save()
            res.json({message:"user created successfully",data:user})
        }
        catch (err) {
            console.error(err);
            return (err, res);
        }
    };

    const getUser = async (req,res) =>{
        try{
            const user = await User.find()
            // res.status(200).send(user,"user viewed sucessfully")
            res.json({message:"user viewed successfully",data:user})
        }
        catch (err) {
            console.error(err);
            return (err, res);
        }
    };

    const updateUser = ('/:_id',async (req,res) =>{
        try{
            const user = await User.updateOne(
                {_id: req.query._id},
                {$set:{
                    name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                }}
            )
            // res.status(200).send(user,"user Updated sucessfully")
            res.json({message:"user Updated successfully",data:user})
        }
        catch (err) {
            console.error(err);
            return (err, res);
        }
    });

    const deleteUser = ('/:_id',async (req,res) =>{
        try{
            const user = await User.deleteOne({_id: req.query._id})
            // res.status(200).send(user,"user Deleted sucessfully")
            res.json({message:"user Deleted successfully",data:user})
        }
        catch (err) {
            console.error(err);
            return (err, res);
        }
    })

return{
    createUser,
    updateUser,
    deleteUser,
    getUser
}
};

module.exports = userController();