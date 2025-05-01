
import User from '../models/User.js';
import { signToken, AuthenticationError } from '../services/auth.js';

interface AddUserArgs {
  input:{
    username: string;
    email: string;
    password: string;
  }
}

interface LoginUserArgs {
  email: string;
  password: string;
}

interface addBookArgs{
  bookData:{
    authors: []
    description: String
    title: String
    image: String
    link: String
  }
}



const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, context: any) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new AuthenticationError('Could not authenticate user.');
    },
    },
  Mutation: {
    login: async (_parent: any, { email, password }: LoginUserArgs) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }
  
      const isValidPassword = await user.isCorrectPassword(password);
      if (!isValidPassword) {
        throw new AuthenticationError('Invalid credentials');
      }
  
      const token = signToken(user.username, user.password, user._id);
      return { token, user };
    },
    

    addUser: async (_parent: any, { input }: AddUserArgs) => {
      const user = await User.create({ ...input });
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },

    saveBook: async (_parent: any, { bookData }: addBookArgs, context: any) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      } 


      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: bookData } },
        { new: true, runValidators: true }
      );

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    },


    removeBook: async (_: any, { bookId }: { bookId: string }, context: any) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      if (!bookId) {
        throw new Error('Book ID is required'); 
      }

      return User.findByIdAndUpdate(
        context.user._id,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
    },
      
  }
}

export default resolvers;