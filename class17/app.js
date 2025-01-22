// Password Hashing Example

// Example: Username - laiba, Password - 12345678
// The password "12345678" is converted into a hashed format using a hashing algorithm.
// Example of a hashed password:
// "12345678" -> "ashbajsfbcka2786hkascbkaSCB8927634JHSCB"

// Adding Salt to the Hashed Password
// After hashing, a "salt" (a random string) is added to make the hash more secure.
// Example of salt:
// "8297SJADVCAWEVLKNEKLNVVNK"
// Combined hash and salt:
// "KSALBJ892364823478" + "ashbajsfbcka2786hkascbkaSCB8927634JHSCB"


const users = [{ username: "admin", password: "12345678" }];

function auth(username, password) {
    const user = users.find((u) => u.username === username);
    if (user && user.password === password) {
        return "authentication successful!";
    } else {
        return "invalid credentials!";
    }
}
let user = auth("laiba", "12345678"); 
console.log(user);



