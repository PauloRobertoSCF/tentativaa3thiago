class InsuficientProductError extends Error{
    constructor(){
        super()
        this.status = 422
        this.message = `sem produto`
        this.idError = "INSUFICIENT_PRODUCT"

    }
}
module.exports  = InsuficientProductError;