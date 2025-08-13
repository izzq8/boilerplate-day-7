import { User } from '../models/user-model';

const userRepository = require('../repositories/user-repository');

// create user baru
exports.createUser = async (userData: Partial<User>): Promise<User> => {
  return await userRepository.createUser(userData);
};

// cari user berdasarkan id nya
const findUserById = async (id: number): Promise<User | undefined> => {
  return await userRepository.findUserById(id);
};
exports.findUserById = findUserById;

// dapatkan semua user
exports.getUsers = async (): Promise<User[]> => {
  return await userRepository.getAllUsers();
};

// ubah data user
exports.updateUserById = async (
  id: number,
  input: Partial<User>,
): Promise<User | undefined> => {
  return await userRepository.updateUserById(id, input);
};

// hapus data user berdasarkan id nya
exports.deleteUserById = async (
  id: number,
): Promise<number> => {
  return await userRepository.deleteUserById(id);
};
