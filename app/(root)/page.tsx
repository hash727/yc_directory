import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import {client} from "@/sanity/lib/client";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import { auth } from "@/auth";


export default async function Home({ searchParams } : {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  // const posts = await client.fetch(STARTUPS_QUERY)
  const params = { search: query || null};

  const session = await auth();

  console.log(session?.id)

  const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params});

  console.log(JSON.stringify(posts, null, 2))
  // const posts = [{
  //   _createdAt: new Date,
  //   views: 55,
  //   author: { _id: 1, name: "Harish"},
  //   _id: 1,
  //   description: 'This is a description.',
  //   image: "https://t4.ftcdn.net/jpg/05/99/01/27/240_F_599012797_nAUTiVIm2VfISUhJlXJd6yX8jhnzxEm6.jpg",
  //   category: "Robots",
  //   title: "We Robots",
  // }]
  return (
   <>

      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br/> Connect with Entrepreneurs</h1>

        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
   </>
  );
}
