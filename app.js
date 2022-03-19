const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')


yargs.version('1.1.0')


//Create a add command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note message',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

// add, remove , read , list

yargs.parse()