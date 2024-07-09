
import Feed from "@components/Feed"

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Discover & Share
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center"> AI-Powered prompts</span>
			</h1>
			<p className="desc text-center">
				Welcome to Promptopia, a place where you can discover and share AI-powered prompts. 
				We have a wide range of prompts for you to choose from, so you can find the perfect one for your project.
			</p>

			<Feed />
		</section>
	)
}

export default Home
