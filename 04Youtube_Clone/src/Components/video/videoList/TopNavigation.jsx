import { memo, useEffect, useMemo, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const paddingY = "py-1";

function  TopNavigation() {

  const ScrollableButton = ({ label }) => {
    console.log('ScrollableButton')
    return (
      <button className={`text-sm text-nowrap shadow-2xl rounded-md px-3 ${paddingY} bg-gray-700`}>
        {label}
      </button>
    );
  };

  const buttonLabels = [
    "All", "Music", "StoryTelling", "Mythology", "Karna", "South Hindi Movie", "News", "Podcast", 
    "Live", "Drama", "Apis", "Mantras", "Animated Films", "Recently Uploaded", "Watched", 
    "Chota Bhim", "New To You", "Hello", "Ok", "Namaste", "Computer", "Laptop", "Mouse", 
    "Keyboard", "Nali", "Papad", "Kurkure", "Lays", "Lijat", "Surf", "Nestle", "Hindustan", 
    "ITC", "Bingo", "Suzik"
  ];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  const scrollRef = useRef(null);

  const scrollLeft = useMemo(() => {
    return () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' });
      }
    }
  } , [scrollRef])

  const scrollRight = useMemo(() => {
    return () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' });
      }
    }
  } , [scrollRef]);    


  const checkScrollButtons = useMemo(() => {
    return () => {
      if (scrollRef.current) {
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        setCanScrollRight(scrollRef.current.scrollLeft < maxScrollLeft - 2);
      }
    }
  } , [scrollRef])

  useEffect(() => {
    checkScrollButtons();
  }, [buttonLabels]);

  useEffect(() => {
    const handleScroll = () => checkScrollButtons();

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      style={{ top: "var(--navbar-height)", width: "100%" }}
      className="z-[100] py-5 box-border flex gap-x-2 sticky overflow-x-auto scrollbar-hide bg-[#0F0F0F]"
      ref={scrollRef}
    >
      {/* Left scroll button */}
      <button
        id="left"
        onClick={scrollLeft}
        className={`sticky bg-[#232323] z-[3000] left-0 top-0 h-full hover:bg-gray-500 hover:rounded-full ${paddingY} ${canScrollLeft ? '' : 'opacity-50 cursor-not-allowed'}`}
        title={"Previous"}
        hidden={!canScrollLeft}
      >
        <MdKeyboardArrowLeft className="text-2xl px-1 box-content" />
      </button>

      {/* Scrollable buttons */}
      {buttonLabels.map((label, index) => (
        <ScrollableButton key={index} label={label} />
      ))}

      {/* Right scroll button */}
      <button
        id="right"
        onClick={scrollRight}
        className={`sticky bg-[#232323] z-[3000] right-0 top-0 h-full hover:bg-gray-500 hover:rounded-full  ${paddingY} ${canScrollRight ? '' : 'opacity-50 cursor-not-allowed'}`}
        title="Next"
        hidden={!canScrollRight}
      >
        <MdKeyboardArrowRight className="text-2xl px-1 box-content" />
      </button>
    </div>
  );
}

export default TopNavigation;
