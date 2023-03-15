const express = require('express')
const res = express('response')
const Chiste = require('../models/Chiste')


const getChistes = async (req, res) => {
    try {
        
        const chiste = await Chiste.find()
        console.log(chiste)

        res.json({
            ok: true,
            msg: "Chiste renderizado correctamente",
            chiste
        })

    } catch (error) {
        res.json({
            ok: false,
        })
    }
}

const getOneChiste = async (req, res) => {
    try {

        const id = req.params.id
        const chiste = await Chiste.findById(id)

        if(!chiste) {
            return res.status(401).json({
                ok: false,
                msg: 'Chiste no encontrado'
            })
        } return res.json({
            ok: true,
            msg: 'Chiste encontrado',
            chiste

        })        
        
    } catch (error) {
        res.json({
            ok:false
        })
        
        
    }
}

const createChiste = async (req, res) => {
    try {
        const chiste = new Chiste(req.body)
        await chiste.save()

        res.json({
            ok: true,
            msg: 'Chiste creado correctamente',
            chiste
        })
    } catch (error) {
        res.json({
            ok:false,
            error
        })
    }
}

const updateChiste = async (req, res) => {
    try {
        const id = req.params.id
        const chiste = await Chiste.findById(id)

        if(!chiste) {
            return res.status(401).json({
                ok: false,
                msg: 'Chiste no encontrado'
            })
        }
        
        chiste.setup = req.body.setup;
        chiste.punchline = req.body.punchline

        await chiste.save();

        res.json({
            ok:true,
            msg: 'Chiste actualizado correctamente',
            chiste
        })

    } catch (error) {
        res.json({
            ok:false,
            error
        })
    }
}

const deleteChiste = async (req, res) => {
    try {
        const id = req.params.id
        
        const chiste = await Chiste.findById(id)

        if(!chiste) {
            return res.status(401).json({
                ok: false,
                msg: 'Chiste no encontrado'
            })
        }
        
        await chiste.deleteOne({_id: id})
        res.json({
            ok:true,
            msg: 'Chiste eliminado correctamente'
        })


    } catch (error) {
        res.json({
            ok:false,
            error
        })
    }
}

module.exports = {
    getChistes,
    getOneChiste,
    updateChiste,
    deleteChiste,
    createChiste

}