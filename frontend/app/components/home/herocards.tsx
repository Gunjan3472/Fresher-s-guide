export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 max-w-6xl mx-auto gap-8">
      
      {/* Left Text Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 leading-tight">
          “College is a <br />
          big Journey <br />
          -Make the first step, <br />
          the Easiest one”
        </h1>
        
        <p className="text-sm md:text-base text-zinc-500 max-w-md leading-relaxed">
  Starting college is a big step. From picking the right laptop to navigating campus, we’re here to help. Built by students for students, this is your hub for honest tech advice and survival hacks.
</p>
      </div>

      {/* Right Image Content */}
      <div className="flex-1 flex justify-center">
        {/* Replace the src with your actual image path */}
        <img 
          src="/image 1.png" 
          alt="Student illustration" 
          className="w-full max-w-md h-auto"
        />
      </div>
    </section>
  );
}