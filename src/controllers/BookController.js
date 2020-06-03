const Book = require('../models/Book')

module.exports = {
    async index(req,res) {
        const books = await Book.findAll()

        return res.json(books)
    },
    async show(req, res){
        const { bookId } = req.params;

        const book = await Book.findOne({
            where: {
                id: bookId
            }
        });
        if(book == null){
            return res.json({message: "Livro não existe."})
        }

        return res.json(book);
    },
    async create(req, res) {
        const book = await Book.create({
            title: req.body.title,
            description: req.body.description
        }).then(() => {
            res.status(200).send({
                message: "Livro criado com Sucesso."
            })
        }).catch((err) => {
            res.status(401).send("Erro ao criar o Livro.")
            console.log("ERROR: "+ err)
        });

        return res.json(book)
    },
    async update(req, res){
        const bookId = req.params.bookId;
        
        await Book.update({
            title: req.body.title,
            description: req.body.description
        }, 
        {
            where:{
                id: bookId
            }
        }).then(() => {
            res.status(200).send("Livro atualizado com Sucesso.")
        }).catch((err) => {
            res.status(401).send("Erro ao atulizar o Livro.")
            console.log("ERROR: "+ err)
        })
    },
    async delete(req,res){
        const bookId = req.params.bookId;

        await Book.destroy({
            where: {
                id: bookId
            }
        }).then(() => {
                res.status(200).send("Livro deletado com Sucesso.")
        }).catch(() =>{
                res.status(401).send("Erro ao atualizar o Livro.")
        })
    }
}