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

  import { expect, it } from "vitest";

  export const addTwoNumbers = (a, b) => {
    return a + b;
  };
  
  it("Should add the two numbers together", () => {
    expect(addTwoNumbers(2, 4)).toEqual(6);
    expect(addTwoNumbers(10, 10)).toEqual(20);
  });

  