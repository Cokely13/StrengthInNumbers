// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Friend = require('./friend')
const Drink = require('./drink')
const SelectedFriend = require('./selectedFriend')
const Order = require('./order')
const Total = require('./total')

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).
// Example:
//
// Puppy.belongsTo(Owner)
Order.belongsTo(Friend)
Friend.hasMany(Order)
SelectedFriend.belongsTo(Friend)
Total.belongsTo(Friend)
Friend.hasOne(Total)


module.exports = {
  // Include your models in this exports object as well!
  db,
  Drink,
  Friend,
  SelectedFriend,
  Order,
  Total
}
