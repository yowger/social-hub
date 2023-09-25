import Post from "@/components/post/Post"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
    return (
        <main className="">
            {/* post composer */}
            <div>
                <Textarea placeholder="What's on your mind" />
            </div>
            <br />
            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"public"}
            />

            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"private"}
            />

            <Post
                name={"Roger Pantil"}
                date={new Date(Date.now() - 60 * 60 * 1000)}
                privacy={"followers"}
            />
        </main>
    )
}
