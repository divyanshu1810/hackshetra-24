import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
	{
		id: 1,
		name: "Tanmay Agrawal",
		designation: "@tanmayagrwl",
		image: "https://avatars.githubusercontent.com/u/86347805?v=4",
	},
	{
		id: 2,
		name: "Divyanshu yadav",
		designation: "@divyanshu1810",
		image:
			"https://media.licdn.com/dms/image/C4D03AQHcZ-NpTjvO5w/profile-displayphoto-shrink_400_400/0/1656002128364?e=1715212800&v=beta&t=GlM0OYqExabFBVeusu4RjmZcA-G_vIl4sEg2kNC_hxA",
	},
	{
		id: 3,
		name: "Jayatri Banerjee",
		designation: "@BanerjeeJ",
		image: "https://avatars.githubusercontent.com/u/100158687?v=4",
	},
	{
		id: 4,
		name: "Aparna Singh",
		designation: "@aaparnaaa",
		image:
			"https://media.licdn.com/dms/image/D4E03AQG56Rdin7DOCQ/profile-displayphoto-shrink_400_400/0/1693001466774?e=1715212800&v=beta&t=BeCAP-4khPuoG0XKm5AV0cbNEyin2wweR_mUEKdjePw",
	},
];

export function AnimatedTooltipPreview() {
	return (
		<div className="flex flex-row items-center justify-center mb-10 w-full">
			<AnimatedTooltip items={people} />
		</div>
	);
}
