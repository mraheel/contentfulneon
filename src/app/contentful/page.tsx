import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

async function getContentfulData () {

  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogPosts`);
  if(!res.ok){
    throw new Error(`Failed to fetch data.`)
  }
  return res.json()
}

export default async function posts() {
  const blogs = await getContentfulData();

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Contentful</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            
          { blogs.items.map((item:any, index:any)=> {
                return (
                  <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden">
                      { blogs.includes.Asset.map((img:any, i:any)=>(
                      
                          <div key={i}>
                          { item.fields.image.sys.id ==  img.sys.id?
                            <Image alt="content" className="object-cover object-center h-full w-full" width={'300'} height={'300'} src={"https:" + img.fields.file.url} /> : <div></div>                          }
                          </div>

                       ))}

                      
                    </div>
                    <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.fields.title}</h2>
                    {documentToReactComponents(item.fields.description)}
                    <a className="text-indigo-500 inline-flex items-center mt-3">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
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