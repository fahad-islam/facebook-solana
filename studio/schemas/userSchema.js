// User Schema
export const userSchema = {
  name: "users",
  title: "Users", 
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "walletAddress",
      type: "string",
      title: "Wallet Address"
    },
    {
      name: "profileImage",
      type: "string",
      title: "Profile Image"
    }
  ]
}