const authorizeRoles = (...allowRoles) => {
    return (req, res, next)=> {
        if(!allowRoles.includes(req.user.role)){
            return res.status(403).json({ message: 'You are not authorized to access this resource' })
        }
        next()
    }
}

module.exports = authorizeRoles