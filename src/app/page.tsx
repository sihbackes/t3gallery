import { db } from "npm/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  const images = await db.query.images.findMany()

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))}

      </div>
      Hello (galerry in progress)
    </main>
  );
}
;