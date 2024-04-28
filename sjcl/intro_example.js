// Create a new variable containing the key as a string "test".
var key = "test";

// Create a variable containing the plaintext as a string "test".
var plaintext = "test";

// Encrypt plaintext with the key. SJCL uses aes-128 by default.
var ciphertext = sjcl.encrypt(key, plaintext);

// Decrypt ciphertext with the key (still aes-128).
var decrypted = sjcl.decrypt(key, ciphertext);

// Check if decrypted is equal to plaintext (should print true).
console.log(decrypted === plaintext);
