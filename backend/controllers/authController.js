const { prisma } = require("../constats/config")
const bcrypt = require('bcrypt');

const auth_register = async (req, res) => {
  const { email, password } = req.body;

  let emailCheck;
  try {
    emailCheck = await prisma.user.findUnique({
      where: {
        email: email  
      }
    })
  }
}