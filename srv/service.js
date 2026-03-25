const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {
   
    this.on('RequisicaoCadastro', async (req) => {
        
        const { Cadastro } = this.entities;
        const VariavelID = req?.data?.ID;

        if (!VariavelID) {
            return req.error(400,'Não foi digitado o campo chave')
        } 

        const retornoTabelaCadastro = await SELECT.from(Cadastro).where({ ID: VariavelID })
        return retornoTabelaCadastro

    })

})