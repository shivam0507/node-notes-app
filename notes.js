const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "My name is Shivam Gupta"
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log( chalk.green.inverse('New Note added!'))
    }else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('No note found!'))
    }else{
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    
}   

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bold.greenBright("Your notes"))
    notes.forEach((note) => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes()

    const noteFound = notes.find((note) => note.title === title)

    if(noteFound){
        console.log(chalk.inverse('Title: ' + noteFound.title))
        console.log('Body: ' + noteFound.body)
    }else {
        console.log(chalk.red.inverse('No note found?'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =  () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}