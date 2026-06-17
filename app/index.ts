export const options = z.object({
	name: z.string(),
});

export default Command((data) => {
	const { name } = data;
	Console.log("Hi", name);
});
