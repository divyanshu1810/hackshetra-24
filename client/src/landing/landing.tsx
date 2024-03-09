import React from "react";
import { LandingPage } from "./landing-page";
import { AnimatedTooltipPreview } from "./developers";

function Landing() {
	return (
		<div className="flex w-full h-screen items-center justify-center">
			<div className="flex items-center justify-center gap-x-20 w-full max-w-3xl h-screen">
				<LandingPage />
				<div className="flex flex-col w-full items-center gap-5">
					<h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
						Developed by
					</h3>
					<AnimatedTooltipPreview />
				</div>
			</div>
		</div>
	);
}

export default Landing;
