//INPUT USER 
const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
  }
//get user info//
interface User {
    id: number
    firstName: string
    lastName: string
    role: string
  }
   
  function updateUser(id: number, update: Partial<User>) {
    const user = getUser(id)
    const newUser = { ...user, ...update }
    saveUser(id, newUser)
  }
   

  // exer 01

  export const addTwoNumbers = (a, b) => {
    return a + b;
  };

  