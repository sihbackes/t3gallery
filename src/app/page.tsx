import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/87a4aa64-b7e8-4aa5-b252-af03922e3708-empass.JPG",
  "https://utfs.io/f/d605ed14-bdc1-4314-9630-08fb8ceacff6-emp9yn.JPG",
  "https://utfs.io/f/a9b1b826-3380-4ecf-ac5c-32a0bbd49636-emp9w2.JPG",
  "https://utfs.io/f/680533e4-0332-41f4-be86-12072ecf493a-emp9w1.JPG",
  "https://utfs.io/f/bc36b2b6-a845-482a-bfde-e6b139b3b04c-empa30.JPG",
  "https://utfs.io/f/8dd98148-9586-46f7-a052-d93ced345f64-emp9yp.JPG",
  "https://utfs.io/f/87483a4e-b1a3-4144-8665-34cbc9687b46-empapf.JPG",
  "https://utfs.io/f/5c1648c2-1370-4156-8544-e7f69b7ca59e-empaqc.JPG"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))}

      </div>
      Hello (galerry in progress)
    </main>
  );
}
