import Image from "next/image";
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"


const feedbacks = [
  {
    name: 'Allison Adam',
    title: 'Founder & CEO',
    feedback: 'Great user experience! The platform is intuitive, and applying for jobs was a breeze.',
    image: user1,
  },
  {
    name: 'Alex Jesse',
    title: 'Head of Design',
    feedback: 'This platform made my job search so much easier! I found the perfect role in just a few days.',
    image: user2,
  },
  {
    name: 'Rahman Smith',
    title: 'Senior Developer',
    feedback: 'I love how personalized the job recommendations are—really saves time and effort.',
    image: user3
  },
];

const Feedback = () => {
  return (
    <section className="py-12 bg-white lg:px-32 px-12 py-12 ">
      <div className="max-w-7xl mx-auto  ">
        <h2 className="text-3xl font-extrabold text-gray-900 ">User’s Feedback</h2>
        <p className="mt-4 text-sm lg:w-1/2 text-gray-600 " style={{wordSpacing:"0.1rem"}}>
        Share your thoughts and feedback in the comments section below. Your insights help us improve and create a better experience for everyone.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((item, index) => (
            <div key={index} className="px-6 py-12 space-y-4  rounded-lg border-2 border-gray-200">
              <div className="flex justify-center mb-4">
                <Image src={item.image} alt={item.name} className="h-16 w-16" />

              </div>
              <p className="text-sm text-center text-gray-500" style={{wordSpacing:"0.3rem",fontSize:"13px"}}>{item.feedback}</p>
              <div className="pt-8 text-center">
                <h3 className="text-md font-bold text-gray-900">{item.name}</h3>
                <p className="text-xs text-gray-400">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
