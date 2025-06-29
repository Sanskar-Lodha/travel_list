export default function Footer({ items }) {
  if (!items.length) {
    return (
      <div>
        <div className="h-[48px] flex items-center justify-center bg-cyan-400 w-full">
          <p className="italic font-semibold">
            Start adding items to your list 🚀
          </p>
        </div>
        <div className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-white w-full text-sm text-gray-700 ">
          {/* Creator Text */}
          <p className="font-medium text-center font-quicksand">
            Made by Sanskar Lodha
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sanskar-lodha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
              LinkedIn
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sanskar_2508?igsh=dGE5em85Z3l1bjhy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                alt="Instagram"
                className="w-5 h-5"
              />
              Instagram
            </a>

            {/* Gmail */}
            <a
              href="mailto:sanskar.l@somaiya.edu"
              className="flex items-center gap-1"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Gmail"
                className="w-5 h-5"
              />
              sanskar.l@somaiya.edu
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sanskar-lodha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="w-5 h-5"
              />
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);

  return (
    <div>
      <div className="h-[48px] flex items-center justify-center bg-cyan-400 w-full">
        <p className="italic font-semibold text-center px-4">
          {percent === 100
            ? "You got everything! Ready to go 👍"
            : `💼 You have ${numItems} items and packed ${numPacked} (${percent}%)`}
        </p>
      </div>

      {/* Footer Section */}
      <div className="h-auto py-4 flex flex-col items-center justify-center gap-2 bg-white w-full text-sm text-gray-700 ">
        {/* Creator Text */}
        <p className="font-medium text-center font-quicksand">
          Made by Sanskar Lodha
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sanskar-lodha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-quicksand"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
              className="w-5 h-5 "
            />
            LinkedIn
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sanskar_2508?igsh=dGE5em85Z3l1bjhy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              alt="Instagram"
              className="w-5 h-5"
            />
            Instagram
          </a>

          {/* Gmail */}
          <a
            href="mailto:sanskar.l@somaiya.edu"
            className="flex items-center gap-1 font-quicksand"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Gmail"
              className="w-5 h-5"
            />
            sanskar.l@somaiya.edu
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sanskar-lodha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-5 h-5"
            />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
