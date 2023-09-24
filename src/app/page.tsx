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
            <Post />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            earum quaerat rem non perspiciatis quas tenetur facilis dolor ipsum
            laborum ea eius obcaecati, velit sunt, est tempore ad necessitatibus
            consequuntur.
        </main>
    )
}
