const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql');

const _ = require('lodash');
var casual = require('casual');

var functions = casual.functions();

casual.define('user', function() {
	return {
    name: functions.name(),
		email: functions.email(),
    phone: functions.phone(),
    address: functions.address()
	};
});

var array_of = function(times) {
	var result = [];

	for (var i = 0; i < times; ++i) {
		result.push(casual.user);
	}

	return result;
};

var users = array_of(2000);

// console.log("Users", users);

const User = new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},
    address: {type: GraphQLString},
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(User),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        // Get data from db / other source
        return array_of(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})
