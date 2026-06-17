export const options = z.object({
	username: z.string(),
});

export default Command<typeof options>(({ username }) => {
	Console.log("Login", username);
});
