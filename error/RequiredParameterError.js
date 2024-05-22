class RequiredParameterError extends Error{
    constructor(parameter){
        super()
        this.status = 422
        this.message = `${parameter} é obrigatorio!`
        this.idError = "REQUIRED_PARAMETER"

    }
}
module.exports  = RequiredParameterError;