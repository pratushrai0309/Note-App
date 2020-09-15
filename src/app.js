const chalk = require('chalk')
const yargs = require('yargs')
const { listNotes } = require('./notes.js')
const notes = require('./notes.js')

yargs.version('1.1.0')


//Create Add Command
yargs.command({
  command : 'add', //A new command is registered to our app which we can use with --title and --note option and this command print their values
  describe : 'Add A New Note',
  builder: {//It can be used to add a option to a command
     title : {
       describe : 'Note title',
       demandOption: true,
       type: 'string'
     },
     note : {
       describe : 'Body Of The Note',
       demandOption : true,
       type : 'string'
     }
  },
  handler : (argv) => {
    notes.addNote(argv.title, argv.note)
  }
})


//Creating Remove Command
yargs.command({
  command : 'remove',
  builder : {
    title : {
      describe: 'Remove a note of the given title',
      demandOption : true,
      type : 'string'
    },
  },
  describe : 'Removing a new note',
  handler : (argv) => {
    notes.removeNote(argv.title)
  }
})


//Creating Read Command
yargs.command({
  command : 'read',
  describe : 'Read A particular note',
  builder: {
    title : {
      describe: 'Title of the note to read',
      demandOption: true,
      type: 'string'
    }
  },
  handler : (argv) => {
     notes.readNote(argv.title)
  }
})


//Creating List Command
yargs.command({
  command : 'list',
  describe : 'List of all your notes',
  handler : () => {
    notes.listNotes()
  }
})


yargs.parse()// Its Neccessary While Using yargs or we can use .parse()
