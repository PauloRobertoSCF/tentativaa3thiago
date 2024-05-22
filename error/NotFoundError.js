class NotFoundError extends Error{
    constructor(entidade){
        super()
        this.status = 422
        this.message = `${entidade} não localizado!`
        this.idError = "NOT_FOUND"

    }
}
module.exports  = NotFoundError;