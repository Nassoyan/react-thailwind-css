const people = [
  {
    name: "Sahak Tadevosyan",
    role: "Co-Founder / CEO",
    imageUrl: "https://ayotech.am/images/team/pic13.webp",
  },
  {
    name: "Gor Poghosyan",
    role: "Co-Founder / CTO",
    imageUrl: "https://ayotech.am/images/team/pic14.webp",
  },
  {
    name: "Ani Antonyan",
    role: "Head of Business Development ",
    imageUrl: "https://ayotech.am/images/team/pic21.webp",
  },
  {
    name: "Tigran Nasoyan",
    role: "Software Developer",
    imageUrl:
      "https://yt3.googleusercontent.com/ytc/AGIKgqN9BXXwtmOk9X6hNvzgl3W7QV-gbMJX2f3ro4k9j2c=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ashot Hakobyan",
    role: "Senior Software Engineer",
    imageUrl: "https://ayotech.am/images/team/Ashot.webp",
  },
  {
    name: "Margarita Yolchian",
    role: "Seo Content manager",
    imageUrl: "https://ayotech.am/images/team/Margarita.webp",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            3 core values that we are attached to deeply are transparency,
            loyalty and accuracy. Throughout our career, we gave a chance to
            every employer to thrive in the sphere and always believed in their
            potential We turn the working process into joy by making our team
            happy and valued every day. That is why our company culture and the
            characteristics of the team stand behind every successful business
            idea we deliver to a client.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
