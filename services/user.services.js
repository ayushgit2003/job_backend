const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

class UserService {
	static async generateUniqueID() {
		const highestIDUser = await UserModel.findOne(
			{},
			{},
			{ sort: { userId: -1 } }
		);
		const highestID = highestIDUser
			? highestIDUser.userId
			: 999; // If no user exists, start from 999
		return highestID + 1;
	}
	static async registerUser(
		accountType,
		firstName,
		lastName,
		userName,
		email,
		phone,
		password
	) {
		try {
			console.log({ password });
			const userId =
				await UserService.generateUniqueID();
			const newUser = new UserModel({
				userId,
				accountType,
				firstName,
				lastName,
				userName,
				email,
				phone,
				password,
			});
			const savedUser = await newUser.save();
			return savedUser;
		} catch (error) {
			console.error("Error registering user:", error);
			throw error;
		}
	}

	static async checkUser(email) {
		try {
			// const checkResult=await UserModel({ email });
			// const checkResult=await UserModel.findOne({ email });
			const checkResult = await UserModel.findOne({
				email,
			}).select("_id");
			return checkResult;
		} catch (error) {
			console.error("Error registering user:", error);
			throw error;
		}
	}

	static async generateToken(tokenData, secretKey, jwt_expire) {
		return await jwt.sign(tokenData, "secretKey", {
			expiresIn: jwt_expire,
		});
	}
}

module.exports = UserService;
