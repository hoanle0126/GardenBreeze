function BlogSection() {
  return (
    <section className="flex flex-col gap-[30px] pb-[120px]">
      <div className="w-full flex flex-col">
        <span className="text-[21px] font-[600] text-orange-primary">
          Our Services
        </span>
        <span className="text-[32px] font-[700] text-green-main-dark text-gr">
          Our Top Selling Plants & Trees
        </span>
      </div>
      <div className="grid grid-cols-4 gap-[30px]">
        {[1,1,1,1].map((index)=>(
            <div key={index} className="h-[300px] bg-black rounded-2xl rounded-br-none">
                <img src="" alt="" />
            </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
