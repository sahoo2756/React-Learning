import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import { useState } from "react";

const SingleUserComment = () => {
  let profileImage = `https://yt3.ggpht.com/CtGV_B8MeX828s5O92l3fI1WSSfPMji3XAuhOC0mYORktfpu9R8uxYF7OlRZeu5d6YS5vIpM6A=s88-c-k-c0x00ffffff-no-rj`;

  const [isCommentReadMoreOptionTrue, toggleIsCommentReadMoreOptionTrue] =
    useState(false);

  return (
    <div className="flex items-start gap-x-4">
      <img
        className="bg-cover rounded-full w-10 h-10"
        src={profileImage}
        alt=""
      />

      <div id="metaData">
        {/* below div for authorProfileName and comment posted date */}
        <div className="flex items-center gap-x-2">
          <span id="name" className="text-sm font-semibold">
            @NikkiBen-qg4qd
          </span>
          <span className="text-gray-400 text-sm">7 months ago</span>
        </div>

        {/* below div for commentToDisplay and read more button */}
        <div className="mt-2">
          <p
            className={`max-h-16 mb-1 overflow-hidden cursor-pointer text-sm caret-slate-950 text-ellipsis line-clamp-${
              isCommentReadMoreOptionTrue ? 0 : 2
            }`}
            id="actual-comment-text-to-display"
          >
            I'm not sure if anyone is reading this right now, but if so, I want
            you to know that I wish you a day full of love and joy. May every
            moment bring you closer to your goals and may you never lose faith
            in yourself. You are unique and capable of achieving anything you
            set your mind to!
          </p>

          <button
            className="text-sm text-gray-400"
            onClick={() =>
              toggleIsCommentReadMoreOptionTrue(!isCommentReadMoreOptionTrue)
            }
          >
            {isCommentReadMoreOptionTrue ? "show less" : "read more"}
          </button>
        </div>

        {/* below div for like and dislike count */}
        <div
          id="like_and_dislike"
          className="mt-2 text-xl text-white/80 rounded-full flex w-fit gap-x-3"
        >
          <button className="pr-1 flex items-center gap-x-2">
            <AiOutlineLike className="text-base" />{" "}
            <span className="text-base text-gray-400">1.6 k</span>
          </button>
          <button>
            <BiDislike className="text-base" />
          </button>
        </div>

        {/* below p tag show total replies count for a specific autor who made comment */}
        <p className="mt-2 text-sm text-green-400">9 replies</p>
      </div>
    </div>
  );
};

export default function ListOfComments() {
  return (
    <div className="mt-10">
      {/* comments heading */}
      <div
        id="comments-heading"
        className="flex items-center gap-x-8 text-xl pb-5 border-b-[0.5px] border-gray-500"
      >
        <p className="font-semibold">5,513 Comments</p>
        <div className="flex items-center gap-x-1">
          <MdOutlineSort className="text-gray-400 text-2xl" />
          <button className="text-base font-montserrat">Sort by</button>
        </div>
      </div>

      {/* user comments */}
      <div className="mt-4 space-y-5">
        <SingleUserComment />
        <SingleUserComment />
        <SingleUserComment />
        <SingleUserComment />
      </div>
    </div>
  );
}
