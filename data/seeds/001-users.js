exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Tacobell", password: "bell", department: "Taco" },
        { username: "KFC", password: "chick", department: "chicken" },
        { username: "Von's", password: "yum", department: "chicken" },
        { username: "BurgerKing", password: "burg", department: "burger" }
      ]);
    });
};
