const chalk = require('chalk')

const yargs = require('yargs')

const notesUtil = require('./notes.js')

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demand: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demand: true,
            type: 'string'

        }
    },
    handler(argv){
        notesUtil.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a new note",
    builder:{
        title: {
            describe: "Note title",
            demand: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler(){
        notesUtil.listNotes()
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demand: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtil.readNote(argv.title)
    }
})

yargs.parse()
