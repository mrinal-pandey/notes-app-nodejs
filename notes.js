const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note === undefined){
        console.log(chalk.red.inverse("Note doesn't exist!"))
    }else{
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if(notes.length !== notesToKeep.length){
        console.log(chalk.green.inverse("Note removed!"))
    }else{
        console.log(chalk.red.inverse("Note doesn't exist!"))
    }
    
    saveNotes(notesToKeep)
}

const listNotes = () => {
    console.log(chalk.inverse("Your Notes"))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const addNote = (title, body) => {
    
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Added"))
    }else{
        console.log(chalk.red.inverse("Already there"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
