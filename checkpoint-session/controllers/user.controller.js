import express, {response, request} from "express";
import {signinService, signupService, logoutService} from '../services/user.service.js'

export const signupController = async (req=request, res=response) =>{
    try {

        req.session.user = {
            firstName:  req.user.first_name,
            lastName:   req.user.last_name,
            age:        req.user.age,
            email:      req.user.email
        }

        return res.status(201).json({
            status: "success",
            detail: "user registrado correctamente",
            payload: req.session.user
        })
    } catch (error) {
        return res.json({error})
    }
}

export const signinController = async (req=request, res=response) =>{
    try {
    if(!req.user) return res.status(400).json({ status: 'error', msg: 'Credenciales invalidas'})

    req.session.user = {
        firstName:  req.user.first_name,
        lastName:   req.user.last_name,
        age:        req.user.age,
        email:      req.user.email
    }

        return res.status(201).json({
            status: "success",
            detail: "user login correctamente",
            payload: req.session.user
        })
    } catch (error) {
        return res.json({error})
    }
}

export const logoutController = async (req=request, res=response) =>{
    try {
            req.session.destroy(function(err) {
                if(err){
                    console.log(err)
                    return res.status(500).send('Error al cerrar sesión')
                }else{
                            //   Regresa el user a home
                            //   res.redirect('/') // Esto sirve para views
                            
                    return res.status(200).json({
                        status: "success",
                        details: "logout success"
                    })
                }
            })

    } catch (error) {
        return res.json({error})
    }
}