import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://images.pexels.com/photos/5732473/pexels-photo-5732473.jpeg",
    title: "Trusted Pet Sitters",
  },
  {
    img: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg",
    title: "Loving Home Care",
  },
  {
    img: "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg",
    title: "Happy Pets, Peaceful You",
  },
];

const words = ["Dogs", "Cats", "Birds", "Rabbits", "All Pets"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  // Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Typewriter
  useEffect(() => {
    const currentWord = words[wordIndex];
    let i = 0;

    const typing = setInterval(() => {
      setText(currentWord.slice(0, i));
      i++;
      if (i > currentWord.length) {
        clearInterval(typing);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1200);
      }
    }, 120);

    return () => clearInterval(typing);
  }, [wordIndex]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-amber-50 to-white pt-24">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[index].img}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Floating SVG Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://www.svgrepo.com/show/530413/dog.svg"
          alt="dog"
          className="w-14 absolute top-24 left-20"
          style={{
            animation: "float 4s ease-in-out infinite",
          }}
        />
        <img
          src="https://www.svgrepo.com/show/530414/cat.svg"
          alt="cat"
          className="w-12 absolute top-1/3 right-24"
          style={{
            animation: "float 5s ease-in-out infinite 0.5s",
          }}
        />
        <img
          src="https://www.svgrepo.com/show/530408/paw.svg"
          alt="paw"
          className="w-10 absolute bottom-32 left-1/3"
          style={{
            animation: "float 7s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Loving Care for <br />
            <span className="text-amber-600">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Find verified pet sitters near you. Book trusted care for your pets
            anytime, anywhere.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition">
              Find a Sitter
            </button>
            <button className="px-7 py-3 rounded-full border border-black text-black font-semibold hover:bg-black hover:text-white transition">
              Become a Sitter
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
