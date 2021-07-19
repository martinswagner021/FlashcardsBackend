// Libraries Imports
const express = require('express')

// Authenticator Middleware
const Authenticator = (req, res, next) => {
    next()
}

// Exports
module.exports = Authenticator