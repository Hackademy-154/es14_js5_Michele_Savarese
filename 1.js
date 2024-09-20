let rubrica = {
    'contacts': [
        {'nome': 'Angela', 'telefono': '3331111111'},
        {'nome': 'Annalisa', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Emilia', 'telefono': '3334444444'}
    ],
    
    'rubricacopia': this.contacts,
    
    'showContacts' : function(){
        this.contacts.sort();
        this.contacts.forEach( (contatto)=> console.log(contatto.nome)
    )
},

'numero' : function(nome) {
let trovato = this.contacts.filter( (contatto)=> contatto.nome == nome );
console.log(trovato[0].telefono)
},

'deleteContact' : function(nome) {
let findContact = this.contacts.find((element) => element.nome === nome);

if (findContact) {
    this.contacts = this.contacts.filter((element) => element.nome !== nome);
    console.log('Contatto eliminato');
} else {
    console.log('Nessun contatto trovato');
    return false;
}
},

addContact : function(nome, telefono){
    let newContact = {'nome' : nome, 'telefono':telefono}
    this.contacts.push(newContact)
},

changeNumberContact : function(nome, telefonoNuovo){
    let index = this.contacts.findIndex((obj)=>obj.nome==nome)
    this.contacts[index].telefono = telefonoNuovo
},


}

rubrica.showContacts();

rubrica.numero(`Angela`);

rubrica.deleteContact(`Emilia`)

rubrica.showContacts();

rubrica.addContact(`Matteo`, 392384599)

rubrica.showContacts();

rubrica.numero(`Matteo`)

rubrica.addContact(`Nicola`, 392384599)

rubrica.numero(`Nicola`)
rubrica.changeNumberContact(`Nicola`, 345753657)

rubrica.numero(`Nicola`)
