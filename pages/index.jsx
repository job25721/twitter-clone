import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Tweet } from "../components/Tweet";

export default function Home() {
  const [tweetMsg, setMsg] = useState("");
  const [tweets, setTweets] = useState([]);
  const [image, setimg] = useState("");
  function tweet() {
    console.log(tweetMsg.split("\n"));
    if (tweetMsg !== "") {
      setTweets([
        ...tweets,
        {
          text: tweetMsg.split("\n"),
          time: new Date().toLocaleTimeString().substr(0, 11),
          img: image,
        },
      ]);
      setMsg("");
      setimg("");
    }
  }

  function onImgChange(event) {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setimg(URL.createObjectURL(img));
    }
  }
  return (
    <div className="container px-60 mx-auto py-4 " style={{ color: "white" }}>
      <Head>
        <title>(20) Home / Twitter</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          href="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        />
      </Head>
      <div className="grid grid-cols-2">
        <img
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt=""
          className="content-start h-20 w-20"
        />
        <div className="flex items-center col-start-3">
          <button className="bg-red-500 active:bg-red-300 focus:outline-none text-white rounded-full shadow py-2 px-4">
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="shadow p-4 w-3/5 rounded-lg"
          style={{ background: "#fff" }}
        >
          <div className="grid grid-cols-8 my-3 ">
            <img
              src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/109632694_688668535322958_4102403510138700454_n.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeG7ZaEbzxexoQZfCJSXXfb7SCrDKwY0FfJIKsMrBjQV8qxv0vGcVta2yn6QS2FYz26Jba3e5VzLMZdb8i1FiGfG&_nc_ohc=W8XerPfd1p0AX_WiPgp&_nc_ht=scontent.fbkk12-2.fna&oh=6d03833627bd7ede3bcba3932d51bbcc&oe=5FFAA495"
              alt=""
              className="rounded-full h-12 w-12"
            />
            <textarea
              type="text"
              placeholder="What's happening?"
              className="focus:outline-none mx-4 col-span-7"
              value={tweetMsg}
              style={{ color: "#000", resize: "none", height: "auto" }}
              onChange={({ target }) => setMsg(target.value)}
            />
          </div>
          <div className="grid grid-cols-2">
            <div>
              <input
                onChange={onImgChange}
                type="file"
                id="up"
                style={{ display: "none" }}
                accept="image/*"
              />

              <label
                className="bg-blue-500 active:bg-blue-300 focus:outline-none text-white rounded-full shadow py-2 px-4"
                htmlFor="up"
                style={{ cursor: "pointer" }}
              >
                Upload photo
              </label>
              {image !== "" ? (
                <div className="my-4">
                  <img src={image} alt="" style={{ width: "50%" }} />
                </div>
              ) : null}
            </div>
            <div className="text-right">
              <button
                onClick={tweet}
                className="bg-blue-500 active:bg-blue-300 focus:outline-none text-white rounded-full shadow py-2 px-4"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 w-3/5 flex flex-col-reverse">
          {tweets.map((msg, i) => (
            <Tweet key={i} msg={msg.text} time={msg.time} img={msg.img} />
          ))}
        </div>
      </div>
    </div>
  );
}
