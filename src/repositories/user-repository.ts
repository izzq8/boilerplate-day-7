import { User } from '../models/user-model';

exports.findByEmail = async (email: string): Promise<User | undefined> => {
  return User.query().findOne({ email });
};

exports.createUser = async (userData: Partial<User>): Promise<User> => {
  return User.query().insert(userData);
};

exports.getAllUsers = async (): Promise<User[]> => {
  return User.query();
};

exports.findUserById = async (id: number): Promise<User | undefined> => {
  return User.query().findById(id);
};

exports.updateUserById = async (id: number, userData: Partial<User>): Promise<User | undefined> => {
  return User.query().patchAndFetchById(id, userData);
};

exports.deleteUserById = async (id: number): Promise<number> => {
  return User.query().deleteById(id);
};
