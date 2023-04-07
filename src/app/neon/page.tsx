import Image from 'next/image'
import profilePic from 'public/web1.png'

async function getData() {
    const res = await fetch(`${process.env.BASE_FETCH_URL}/api/posts`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function posts() {
    const posts = await getData();

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">What is Neon Database?</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Neon is a fully managed serverless PostgreSQL with a generous free tier. Neon separates storage and compute and offers modern developer features such as serverless, branching, bottomless storage, and more. Neon is open source and written in Rust.</p>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        {
                            posts.map((post:any)=> {
                                return (
                                    <div key={post.id} className="xl:w-1/4 md:w-1/2 p-4">
                                        <div className="bg-gray-100 p-6 rounded-lg">
                                        <Image
                                                src={profilePic}
                                                alt="Picture of the author"
                                                className="h-40 rounded w-full object-cover object-center mb-6" />
                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{post.created_at }</h3>
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.title}</h2>
                                            <p className="leading-relaxed text-base">{post.description}</p>
                                        </div>
                                    </div> 
                                )
                            })
                        }
                       

                    </div>

                </div>
            </section>
        </>
    )
}