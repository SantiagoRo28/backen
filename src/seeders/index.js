module.exports = () => {
  
    const {Role} = require("../../database/connection");
    

    const roles = [
        {
            name:"Admin"
        },
        {
            name:"User"
        }
    ];

    roles.forEach(item => {
       Role.create(item);
    }); 
}