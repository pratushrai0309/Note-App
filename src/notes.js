const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

/*Adding 
NOte
*/
const addNote = function (title, note) {
    const notes = loadNotes()
    const duplicateTitle = notes.find((notee) => {
        return notee.title === title
    })

    //Checking for a duplicate title
    if(!duplicateTitle){
        notes.push({
            title: title,
            note: note
        })
    console.log('New note added');

    }else{
        console.log(`Title ${chalk.blue(duplicateTitle.title)} Already In Use`);

    }

        saveNotes(notes)
}

//Removing note
const removeNote = (title) => {
  const notes = loadNotes()
  const noteToKeep = notes.filter((note) => {
      return note.title !== title
  })
  if(notes.length > noteToKeep.length){
    console.log(chalk.green(`Note with title ${title} has been removed`));

  }else{
    console.log(chalk.red('No note found with the given title'));
  }

  saveNotes(noteToKeep)
}

//Read Note
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.title === title
    })
    if(note){
        console.log(chalk.greenBright(`The note find with the ${chalk.blue(note.title)} is ${chalk.blue(note.note)}`));
        
    }else{
        console.log('No note found with the given title');
        
    }
    
}

//List all the notes
const listNotes = () => {
    const notes = loadNotes()
    console.log('All Your Notes =>');
    notes.forEach(note => {
        console.log(`Title: ${chalk.blue(note.title)}, Note: ${chalk.blue(note.note)}`);
    });
}

//Save all the notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//Load all the notes
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
}
