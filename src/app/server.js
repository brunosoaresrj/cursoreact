(async () =>{

    const database = require('./controller/db');
    const Notebooks = require('./model/notebooks');
    await database.sync();

    const novoNotebook = Notebooks.create({
        patrimonio: 33306,
        serial_number: '546TY68U',
        fabricante: 'DELL',
        modelo: 'Vostro 5481',
        garantia: '21/12/2022',
        service_tag: '6WYBV53',
        entrega: '17/08/2022',
        usuario: 'FULANO DA SILVA',
        area: 'Operação e Suporte',
        cargo: 'Analista Senior'
    })
    console.log(novoNotebook);

})();