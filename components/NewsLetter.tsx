export default function NewsLetter() {
  return (
    <section className="w-full h-45 py-12   xl:py-12 bg-black flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Revolutionize Your Music Experience
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and take control of your inbox. Fast, secure, and
                designed for modern life.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <form className="flex space-x-2">
                <input
                  type="email"
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                  placeholder="Enter your email"
                />
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#FF9500] text-black"
                  type="submit"
                >
                  Join Now
                </button>
              </form>
              <p className="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your email experience.
                <a className="underline underline-offset-2 text-white" href="#">
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
