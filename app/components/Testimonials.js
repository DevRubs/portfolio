export default function Testimonials() {
    return (
      <section id="testimonials" className="px-4 md:px-12 lg:px-32 py-16 md:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00ff9d] text-xs md:text-sm mb-4">Testimonials</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e0e0e0] mb-8">
            Testimonials
          </h2>
  
          <div className="p-6 border border-dashed border-[#1a1a1a] text-center">
            <p className="text-[#666666] text-sm md:text-base mb-2">
              No testimonials yet...
            </p>
            <p className="text-[#666666] text-xs">
              Be my first client and leave a review!
            </p>
          </div>
        </div>
      </section>
    );
  }